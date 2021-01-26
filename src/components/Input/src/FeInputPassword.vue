<script>
import {
  Input as AInput,
} from 'ant-design-vue';
import { isFunction } from '@/utils/lodash';

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
  },
  render(h) {
    return h(
      'a-input-password',
      {
        props: {
          ...this.$attrs,
          value: this.value,
        },
        on: {
          'change.value': (val) => this.$emit('change', val),
        },
        nativeOn: {
          keypress: (e) => {
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
