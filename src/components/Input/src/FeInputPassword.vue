<script>
import {
  Input as AInput,
} from 'ant-design-vue';

export default {
  name: 'FeInput',
  components: {
    AInputPassword: AInput.Password,
  },
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  render(h) {
    return h(
      'a-input-password',
      {
        props: {
          ...this.$attrs,
          value: this.value,
        },
        on: {
          'change.value': (val) => this.$emit('change', val),
        },
      },
    );
  },
};
</script>
