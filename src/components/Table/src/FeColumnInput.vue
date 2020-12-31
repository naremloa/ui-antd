<script>
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
  },
  data() {
    return {
      value: this.data,
    };
  },
  watch: {
    data(newVal) {
      this.value = newVal;
    },
  },
  methods: {
    handleChange(value) {
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
          },
          on: { 'change.value': this.handleChange },
        },
      )],
    );
  },
};
</script>
