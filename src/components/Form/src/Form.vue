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
    model: {
      type: Object,
      required: true,
    },
  },
  methods: {
    validate(...params) { return this.$refs.Form.validate(...params); },
    validateField(...params) { this.$refs.Form.validateField(...params); },
    resetFields(...params) { this.$refs.Form.resetFields(...params); },
    clearValidate(...params) { this.$refs.Form.clearValidate(...params); },
    async submit(...params) {
      try {
        await this.validate();
        this.$emit('submit', ...params);
      } catch (err) { console.log('Form validate error', err?.message); }
    },
  },
  render(h) {
    return h(
      'form-model',
      {
        props: {
          ...this.$attrs,
          labelCol: this.labelCol,
          wrapperCol: this.wrapperCol,
          model: this.model,
        },
        ref: 'Form',
      },
      this.$slots.default,
    );
  },
};
</script>
