<script>
import {
  Select as ASelect,
  Spin as ASpin,
} from 'ant-design-vue';
import { isFunction, isArray } from '@/utils/lodash';

const { Option: ASelectOption } = ASelect;

export default {
  name: 'FeSelect',
  components: { ASelect, ASelectOption, ASpin },
  inheritAttrs: false,
  model: { prop: 'value', event: 'change' },
  props: {
    options: {
      type: [Array, Promise, Function],
      default: () => [],
    },
    value: {
      type: [Array, String, Number, undefined],
      default: undefined,
    },
    showSearch: {
      type: Boolean,
      default: false,
    },
    notFoundContent: {
      type: String,
      default: '暂无资料',
    },
  },
  data() {
    return {
      localOptions: [],
      loading: false,
    };
  },
  computed: {
    baseFilterOption() {
      if (!this.showSearch) return true;
      return (inputValue, options) => !!options.data.props?.title.includes(inputValue);
    },
  },
  watch: {
    options: {
      async handler(val) {
        this.loading = true;
        const res = isFunction(val)
          ? await val()
          : await Promise.resolve(val);
        this.loading = false;
        if (isArray(res)) this.localOptions = res;
      },
      immediate: true,
    },
  },
  render(h) {
    const { options, ...restAttrs } = this.$attrs;
    return h(
      'a-select',
      {
        class: 'fe-select',
        props: {
          filterOption: this.baseFilterOption,
          ...restAttrs,
          loading: this.loading,
          value: this.value,
          notFoundContent: this.notFoundContent,
          showSearch: this.showSearch,
        },
        on: {
          ...this.$listeners,
          change: (value, option) => {
            this.$emit('change', value, option);
          },
        },
      },
      [
        this.loading
          ? h(
            'div',
            {
              style: { margin: '5px', display: 'flex', justifyContent: 'center' },
              slot: 'dropdownRender',
            },
            [h('a-spin')],
          )
          : this.localOptions.map(({
            value,
            label,
            disabled,
            class: className,
          }) => h(
            'a-select-option',
            {
              props: {
                value,
                disabled,
                title: label,
                class: className,
              },
              key: value,
            },
            label,
          )),
      ],

    );
  },
};
</script>
<style lang="scss" scoped>
.fe-select {
  width: 171px
}
</style>
