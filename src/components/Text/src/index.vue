<script>
import { isFunction } from '@/utils/lodash';

export default {
  name: 'FeText',
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: [Number, String, Boolean],
      default: '',
    },
    format: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleDisplay() {
      const { value, format } = this;
      const displayText = isFunction(format) ? format(value) : value;
      return displayText || '-';
    },
  },
  render(h) {
    return h(
      'span',
      {
        class: 'fe-text',
      },
      this.handleDisplay(),
    );
  },
};
</script>
