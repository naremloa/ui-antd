<script>
import {
  Input as AInput,
} from 'ant-design-vue';
import { isFunction, isRegExp } from '@/utils/lodash';

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
    enterEvent: {
      type: Function,
      default: null,
    },
    regRule: {
      validator(val) { return isRegExp(val); },
      default: null,
    },
    inlineStyle: {
      type: Object,
      default: () => {},
    },
  },
  render(h) {
    return h(
      'a-input-password',
      {
        style: this.inlineStyle,
        props: {
          ...this.$attrs,
          value: this.value,
        },
        on: {
          'change.value': (val) => this.$emit('change', val),
        },
        nativeOn: {
          keypress: (e) => {
            if (this.regRule && !this.regRule.test(e.key)) e.preventDefault();
            if (e.keyCode === 13 && isFunction(this.enterEvent)) {
              this.enterEvent();
            }
          },
        },
      },
    );
  },
};
</script>
