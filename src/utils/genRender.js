import {
  keys, isObject, has, isArray, isEmpty,
} from './lodash';

const outputHeadName = 'Fe';
const localHeadName = 'My';

const handleClassName = (name) => name
  .replace(/[A-Z]/g, ($0) => `-${$0.toLowerCase()}`)
  .replace(/^-/, '');

function genRender({
  name,
  comp,
  components = {},
  props = {},
  bindPropChange = {},
  model = null,
  on = [],
  nativeOn = null,
  slots = [],
  scopedSlots = [],
  classes = [],
  ref = null,
  propToSlot = {},
  // propToChildren: Array<{ prop: String, children: String }>
  propToChildren = [],
} = {}) {
  if ([name, comp].includes(undefined)) throw new Error('required not be emptyed');
  const modelSetting = isObject(model) && has(model, 'prop') && has(model, 'event');
  const computedProps = {
    ...props,
    ...(modelSetting && !has(props, model.prop) ? { [model.prop]: {} } : {}),
  };
  const computedOn = [
    ...on,
    ...(modelSetting
        && !on.map((i) => (isObject(i) ? i.name : i))
          .includes(model.event) ? [model.event] : []),
  ];
  const computedNativeOn = nativeOn !== null ? { nativeOn } : {};
  const computedRef = ref !== null ? { ref } : {};
  return [
    {
      name: `${outputHeadName}${name}`,
      inheritAttrs: false,
      ...(modelSetting ? { model } : {}),
      components: { [`${localHeadName}${name}`]: comp, ...components },
      props: computedProps,
      render(h) {
        return h(
          `${localHeadName}${name}`,
          {
            class: {
              [handleClassName(`${outputHeadName}${name}`)]: true,
              ...classes.reduce((acc, cur) => ({ ...acc, [cur]: true }), {}),
            },
            props: {
              ...this.$attrs,
              ...keys(computedProps).reduce((acc, cur) => ({
                ...acc,
                [cur]: bindPropChange[cur]
                  ? bindPropChange[cur].format.apply(this)
                  : this[cur],
              }), {}),
            },
            on: computedOn
              .reduce((acc, cur) => {
                let onName = cur;
                let onHandle = (...param) => this.$emit(cur, ...param);
                if (isObject(cur)) {
                  const { name: curName, handle: curHandle } = cur;
                  [onName, onHandle] = [curName, curHandle];
                }
                return {
                  ...acc,
                  [onName]: onHandle.bind(this),
                };
              }, {}),
            ...(isEmpty(computedNativeOn) ? {}
              : {
                nativeOn: keys(computedNativeOn?.nativeOn || {}).reduce((acc, cur) => ({
                  ...acc,
                  [cur]: computedNativeOn?.nativeOn?.[cur].bind(this),
                }), {}),
              }),
            scopedSlots: [...(new Set(['default', ...scopedSlots]))]
              .reduce((acc, cur) => ({
                ...acc,
                [cur]: this.$scopedSlots[cur],
              }), {}),
            ...computedRef,
          },
          [
            ...[...(new Set(['default', ...slots]))].map((i) => {
              if (i === 'default') {
                return propToSlot[i]
                  ? this[propToSlot[i].prop] || this.$slots[i]
                  : this.$slots[i];
              }
              return h('template', { slot: i }, this.$slots[i]);
            }),
            ...(propToChildren.map(({
              prop,
              children,
            }) => (isArray(this[prop]) ? this[prop] : [this[prop]])
              .filter((i) => i !== undefined)
              .map((item) => h(children, { props: item })))),
          ],
        );
      },
    },
    `${localHeadName}${name}`,
  ];
}

export default genRender;
