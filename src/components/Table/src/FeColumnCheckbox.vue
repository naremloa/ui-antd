<script>
export default {
  name: 'FeColumnCheckbox',
  props: {
    data: {
      type: Array,
      default: () => [],
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
        'fe-checkbox-group',
        {
          props: {
            ...this.$attrs,
            value: this.value,
          },
          on: {
            change: (value) => {
              this.value = value;
              this.$emit('update:data-source', value);
            },
          },
        },
      )],
    );
  },
};
</script>
