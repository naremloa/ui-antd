<script>
import {
  Input as AInput,
  InputNumber as AInputNumber,
} from 'ant-design-vue';

export default {
  name: 'FeInput',
  components: {
    AInput,
    AInputNumber,
  },
  model: { prop: 'value', event: 'change' },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  render(h) {
    if (this.type === 'inputNumber') {
      return h(
        'a-input-number',
        {
          props: {
            ...this.$attrs,
            value: this.value,
          },
          on: {
            change: (val) => this.$emit('change', +`${val}`),
          },
        },
      );
    }
    return h(
      'a-input',
      {
        props: {
          ...this.$attrs,
          type: this.type,
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
