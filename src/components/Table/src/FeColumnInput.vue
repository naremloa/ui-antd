<script>
import { isBoolean, isFunction } from '@/utils/lodash';

export default {
  name: 'FeColumnInput',
  props: {
    data: {
      type: [Number, String],
      default: '',
    },
    idx: {
      type: Number,
      required: true,
    },
    dataIndex: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: [Boolean, Function],
      default: false,
    },
  },
  data() {
    return {
      value: this.data,
    };
  },
  computed: {
    isDisabled() {
      const { disabled, rowData } = this;
      if (isBoolean(disabled)) return disabled;
      if (isFunction(disabled)) return disabled(rowData);
      return false;
    },
  },
  watch: {
    data(newVal) {
      this.value = newVal;
    },
  },
  methods: {
    handleChange(value) {
      this.value = value;
      this.$emit('update:date-source', value);
    },
  },
  render(h) {
    return h(
      'fe-form-item',
      {
        style: { marginBottom: 0 },
        props: {
          prop: `data.${this.idx}.${this.dataIndex}`,
          rules: this.rules,
          wrapperCol: { span: 24 },
        },
      },
      [h(
        'fe-input',
        {
          props: {
            ...this.$attrs,
            value: this.value,
            disabled: this.isDisabled,
          },
          attrs: {
            ...this.$attrs,
            disabled: this.isDisabled,
          },
          on: { change: this.handleChange },
        },
      )],
    );
  },
};
</script>
