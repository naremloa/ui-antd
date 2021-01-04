<script>
import { isFunction } from '@/utils/lodash';
import { Radio } from 'ant-design-vue';

const { Group: ARadioGroup } = Radio;

export default {
  name: 'FeRadioGroup',
  components: { ARadioGroup },
  inheritAttrs: false,
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    change: {
      type: Function,
      default: null,
    },
  },
  render(h) {
    return h(
      'a-radio-group',
      {
        props: {
          ...this.$attrs,
          options: this.options,
          value: this.value,
        },
        on: {
          input: (newVal) => {
            const { value: oldVal } = this;
            if (isFunction(this.change)) {
              this.change(newVal, oldVal, { ...this.$props, ...this.$attrs });
            }
            this.$emit('change', newVal);
          },
        },
      },
      this.$slots.default,
    );
  },
};
</script>
