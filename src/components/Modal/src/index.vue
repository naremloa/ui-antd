<script>
import { Modal as AModal } from 'ant-design-vue';

export default {
  name: 'FeModal',
  components: { AModal },
  model: { prop: 'visible', event: 'change' },
  props: {
    width: {
      type: String,
      default: 'small',
      validator: (val) => ['small', 'middle', 'large'].includes(val),
    },
    visible: {
      type: Boolean,
      default: false,
    },
    template: {
      type: [Object, String],
      default: '',
    },
    data: {
      type: [Object, Array, Boolean, String, Number],
      default: null,
    },
    // title: {
    //   type: String,
    //   default: () => '給個title吧!',
    // },
  },
  computed: {
    modalWidth() {
      const styleWidth = {
        // small: { width: ' 80%', 'max-width': '520px' },
        // middle: { width: '100%', 'max-width': '720px' },
        // large: { width: '100%', 'max-width': '1200px' },
        small: 520,
        middle: 720,
        large: 1200,
      };
      return styleWidth[this.width] || styleWidth.small;
    },
  },
  render(h) {
    const handleContent = () => {
      if (this.template) {
        return h(
          this.template,
          {
            props: {
              visible: this.visible,
              data: this.data,

            },
            on: {
              close: (status) => {
                this.$emit('change', false);
                this.$emit('close', status);
              },
            },
          },
        );
      }
      if (this.$slots.default) return this.$slots.default;
      return null;
    };
    return h(
      'a-modal',
      {
        props: {
          ...this.$attrs,
          width: this.modalWidth,
          visible: this.visible,
          footer: null,

        },
        on: {
          ...this.$listeners,
        },
      },
      [handleContent()],
    );
  },
};
</script>
