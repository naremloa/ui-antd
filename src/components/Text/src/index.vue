<script>
import {
  isFunction, isObject, isArray, isString,
} from '@/utils/lodash';

export default {
  name: 'FeText',
  inheritAttrs: false,
  model: { prop: 'value', event: 'change' },
  props: {
    // any type
    /* eslint-disable vue/require-prop-types */
    value: {
      default: '',
    },
    format: {
      type: Function,
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    slotComponent: {
      type: [String, Object],
      default: null,
    },
    className: {
      type: [Function, Array, Object, String],
      default: undefined,
    },
  },
  computed: {
    compClassName() {
      const defaultClass = 'fe-text';
      const className = this.className?.call?.(this) || '';

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
    if (this.multiple && this.slotComponent) {
      return h(
        'div',
        {
          class: this.compClassName,
          style: isFunction(this.$attrs.style) ? this.$attrs.style() : this.$attrs.style,
        },
        [h(this.slotComponent, { props: { value: this.value, format: this.format } })],
      );
    }
    return h(
      'span',
      {
        class: this.compClassName,
        style: isFunction(this.$attrs.style) ? this.$attrs.style() : this.$attrs.style,
      },
      this.handleDisplay(),
    );
  },
};
</script>
