<script>
import { FormModel } from 'ant-design-vue';

export default {
  name: 'FeForm',
  components: { FormModel },
  inheritAttrs: false,
  props: {
    labelCol: {
      type: Object,
      default: () => ({ span: 6 }),
    },
    wrapperCol: {
      type: Object,
      default: () => ({ span: 14 }),
    },
  },
  methods: {
    validate(...params) { this.$refs.Form.validate(...params); },
    validateField(...params) { this.$refs.Form.validateField(...params); },
    resetFields(...params) { this.$refs.Form.resetFields(...params); },
    clearValidate(...params) { this.$refs.Form.clearValidate(...params); },
  },
  render(h) {
    return h(
      'form-model',
      {
        props: {
          ...this.$attrs,
          labelCol: this.labelCol,
          wrapperCol: this.wrapperCol,
        },
        ref: 'Form',
      },
      this.$slots.default,
    );
  },
};
</script>
