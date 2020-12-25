<script>
import { FormModel } from 'ant-design-vue';
import { isFunction } from '@/utils/lodash';

const { Item } = FormModel;
export default {
  name: 'FeFormItemSetting',
  components: { FeFormItem: Item },
  inheritAttrs: false,
  model: { prop: 'value', event: 'input' },
  props: {
    value: {
      type: [Array, String, Number, Boolean],
      default: null,
    },
    prop: {
      type: String,
      default: '',
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
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
  },
  render(h) {
    const renderInner = () => h(
      this.formType,
      {
        props: {
          ...this.formTypeProps,
          [this.formTypeProp]: this.value,
        },
        on: {
          [this.formTypeEvent]: (value) => this.$emit('input', value),
        },
      },
    );
    return h(
      'fe-form-item',
      {
        props: {
          ...this.$attrs,
          prop: this.prop,
          rules: this.rules,
        },
        on: this.$listeners,
      },
      [isFunction(this.formType)
        ? this.formType(h, { value: this.value })
        : renderInner()],
    );
  },
};
</script>
