<script>
import {
  Input as AInput,
  InputNumber as AInputNumber,
} from 'ant-design-vue';

export default {
  name: 'FeInput',
  components: {
    AInput,
    AInputNumber,
  },
  model: { prop: 'value', event: 'change' },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    formatter: {
      type: Function,
      default: undefined,
    },
    parser: {
      type: Function,
      default: undefined,
    },
  },
  methods: {
    // updateValue(val) { this.$emit('change', +`${this.parser(val)}`); },
  },
  render(h) {
    if (this.type === 'inputNumber') {
      return h(
        'a-input-number',
        {
          props: {
            ...this.$attrs,
            value: this.value,
            // formatter: this.formatter,
            // parser: this.parser,
          },
          on: {
            change: (val) => this.$emit('change', +`${val}`),
          },
          // nativeOn: {
          //   '!keypress': (e) => {
          //     if (this.formatter && this.parser) {
          //       e.stopPropagation();
          //       const { target: { value: val }, key } = e;
          //       const parser = this.parser(val);
          //       this.updateValue(val);
          //       const formatter = this.formatter(`${parser}${key}`);
          //       setTimeout(() => { e.target.value = formatter; }, 0);
          //     }
          //   },
          //   '!input': (e) => {
          //     if (this.formatter && this.parser) {
          //       e.stopPropagation();
          //     }
          //   },
          //   '!mousedown': (e) => {
          //     if (this.formatter && this.parser) {
          //       if (e.target.className !== 'ant-input-number-input') {
          //         const input = document.querySelector('input.ant-input-number-input');
          //         this.updateValue(input.value);
          //       }
          //     }
          //   },
          //   '!blur': (e) => {
          //     if (this.formatter && this.parser) {
          //       e.stopPropagation();
          //       this.updateValue(e.target.value);
          //     }
          //   },
          // },
        },
      );
    }
    return h(
      'a-input',
      {
        props: {
          ...this.$attrs,
          type: this.type,
          value: this.value,
        },
        on: {
          'change.value': (val) => this.$emit('change', val),
        },
      },
    );
  },
};
</script>
