<script>
import { DatePicker } from 'ant-design-vue';

export default {
  name: 'FeDatePicker',
  components: { ADatePicker: DatePicker },
  props: {
    valueFormat: {
      type: String,
      default: 'x',
    },
  },
  render(h) {
    return h(
      'a-date-picker',
      {
        props: {
          ...this.$attrs,
          valueFormat: this.valueFormat,
        },
        on: this.$listeners,
      },
    );
  },

};
</script>
