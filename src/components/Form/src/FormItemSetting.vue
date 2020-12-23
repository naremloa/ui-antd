<script>
import { FormModel } from 'ant-design-vue';

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
    },
    formType: {
      type: [Object, String],
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
    if (!this.prop) return this.formType ? renderInner() : h();
    return h(
      'fe-form-item',
      {
        props: {
          ...this.$attrs,
          prop: this.prop,
        },
        on: this.$listeners,
      },
      [renderInner()],
    );
  },
};
</script>
