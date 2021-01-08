<script>
import { DatePicker } from 'ant-design-vue';
import dayjs from '@/utils/dayjs';

export default {
  name: 'FeDatePicker',
  components: { ADatePicker: DatePicker },
  model: { prop: 'value', event: 'change' },
  props: {
    valueFormat: {
      type: String,
      default: 'x',
    },
    value: {
      type: [String, Number],
      default: undefined,
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
      'a-date-picker',
      {
        props: {
          ...this.$attrs,
          value: this.localValue,
          valueFormat: this.valueFormat,
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
