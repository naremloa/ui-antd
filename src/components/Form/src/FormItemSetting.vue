<script>
import { FormModel } from 'ant-design-vue';
import { isFunction, isObject } from '@/utils/lodash';

const { Item } = FormModel;
export default {
  name: 'FeFormItemSetting',
  components: { FeFormItem: Item },
  inheritAttrs: false,
  model: { prop: 'value', event: 'input' },
  props: {
    /* eslint-disable vue/require-prop-types */
    value: {
      default: undefined,
    },
    /* eslint-enable vue/require-prop-types */
    prop: {
      type: String,
      default: '',
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    asyncRuleStatus: {
      type: Boolean,
      default: true,
    },
    asyncRuleErrMsg: {
      type: String,
      default: '',
    },
    formType: {
      type: [Function, Object, String],
      default: '',
    },
    formTypeProp: {
      type: String,
      default: 'value',
    },
    formTypeProps: {
      type: Object,
      default: () => {},
    },
    formTypeEvent: {
      type: String,
      default: 'input',
    },
    nested: {
      type: [String, Object],
      default: '',
    },
    description: {
      type: [String, Object],
      default: '',
    },
    descriptionHeight: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    asyncRuleStatus(newVal) {
      if (newVal === false) this.$refs.FormItem.onFieldBlur();
      this.$nextTick(() => this.$emit('update:asyncRuleStatus', true));
    },
  },
  render(h) {
    const isInputNumber = this.formType === 'fe-input' && this.formTypeProps?.type === 'inputNumber';
    const renderInner = () => h(this.formType, {
      props: {
        ...this.formTypeProps,
        [this.formTypeProp]: this.value,
      },
      attrs: this.formTypeProps,
      on: {
        [this.formTypeEvent]: (value) => this.$emit('input', value),
      },
    });
    const renderFromItemDescriptions = () => {
      const className = 'form-item-description';
      if (this.description) {
        if (isObject(this.description)) {
          return h(this.description, { class: className });
        }
        return h('div', { class: className }, this.description);
      }
      return null;
    };
    const renderFormItem = () => h(
      'fe-form-item',
      {
        // NOTE: 為了 inputNumber 在 formItem 下高度丟失，新增 class 以修復
        style: { ...(isInputNumber ? { height: `${40 + +(this.descriptionHeight || 0)}px` } : {}) },
        class: { 'form-item-input-number': isInputNumber },
        props: {
          ...this.$attrs,
          prop: this.prop,
          rules: [
            {
              validator: (_, val, cb) => {
                if (!this.asyncRuleStatus) {
                  return cb(this.asyncRuleErrMsg);
                }
                return cb();
              },
              trigger: 'blur',
            },
            ...this.rules,
          ],
        },
        on: this.$listeners,
        ref: 'FormItem',
      },
      [
        isFunction(this.formType) ? this.formType(h, { value: this.value }) : renderInner(),
        renderFromItemDescriptions(),
      ],
    );
    if (!this.nested) return renderFormItem();
    const handleNested = (val) => {
      if (isObject(val)) return val;
      return { label: val };
    };
    return h(
      'fe-form-item',
      { props: handleNested(this.nested) },
      [renderFormItem()],
    );
  },
};
</script>
