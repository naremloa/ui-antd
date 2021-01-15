<script>
import {
  isFunction, isObject, isArray, isString,
} from '@/utils/lodash';

export default {
  name: 'FeText',
  inheritAttrs: false,
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
  computed: {
    className() {
      const defaultClass = 'fe-text';
      const className = isFunction(this.$attrs.class) ? this.$attrs.class() : this.$attrs.class;

      if (isArray(className)) {
        return [defaultClass, ...className];
      }
      if (isObject(className)) {
        return { [defaultClass]: true, ...className };
      }
      if (isString(className)) {
        return `${defaultClass} ${className}`;
      }

      return defaultClass;
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
        class: this.className,
        style: isFunction(this.$attrs.style) ? this.$attrs.style() : this.$attrs.style,
      },
      this.handleDisplay(),
    );
  },
};
</script>
