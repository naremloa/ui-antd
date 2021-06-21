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
      if (this.valueFormat === 'X') return dayjs.utc(Number(this.value) * 1000);
      if (this.valueFormat === 'x') return dayjs.utc(Number(this.value));
      return dayjs.utc(this.value, this.valueFormat);
    },
  },
  render(h) {
    return h(
      'a-time-picker',
      {
        props: {
          ...this.$attrs,
          valueFormat: this.valueFormat,
          value: this.localValue,
        },
        on: {
          ...this.$listeners,
          change: (val) => {
            // this.$emit('change', val?.format?.(this.valueFormat));
            this.$emit('change', ['x', 'X'].includes(this.valueFormat) ? +val : val);
          },
        },
      },
    );
  },
};
</script>
