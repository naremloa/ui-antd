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
  render(h) {
    return h(
      'form-model',
      {
        props: {
          ...this.$attrs,
          labelCol: this.labelCol,
          wrapperCol: this.wrapperCol,
        },
      },
      this.$slots.default,
    );
  },
};
</script>
