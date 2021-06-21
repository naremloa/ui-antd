<script>
import { TimePicker } from 'ant-design-vue';
import dayjs from '@/utils/dayjs';

export default {
  name: 'FeTimePicker',
  components: { ATimePicker: TimePicker },
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: [String, Number, Object],
      default: undefined,
    },
    valueFormat: {
      type: String,
      default: 'x',
    },
  },
  computed: {
    localValue() {
      if (!this.value) return undefined;
      if (this.valueFormat === 'X') return dayjs.unix(Number(this.value));
      if (this.valueFormat === 'x') return dayjs(Number(this.value));
      return dayjs(this.value);
    },
  },
  render(h) {
    return h(
      'a-time-picker',
      {
        props: {
          ...this.$attrs,
          value: this.localValue,
        },
        on: {
          ...this.$listeners,
          change: (val) => {
            this.$emit('change', val?.format?.(this.valueFormat));
          },
        },
      },
    );
  },
};
</script>
