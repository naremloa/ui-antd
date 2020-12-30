<script>
export default {
  name: 'FeColumnInput',
  props: {
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
        },
      },
      [h(
        'fe-input',
        {
          props: this.$attrs,
          on: { 'change.value': this.handleChange },
        },
      )],
    );
  },
};
</script>
