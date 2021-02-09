<script>
import { TimePicker } from 'ant-design-vue';

export default {
  name: 'FeTimePicker',
  components: { ATimePicker: TimePicker },
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
  },
  render(h) {
    return h(
      'a-time-picker',
      {
        props: {
          ...this.$attrs,
          value: this.value,
        },
        on: {
          ...this.$listeners,
          change: (val) => {
            this.$emit('change', val);
          },
        },
      },
    );
  },
};
</script>
