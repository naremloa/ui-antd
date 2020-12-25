<script>
export default {
  name: 'FeText',
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
  },
  render(h) {
    return h('span', {
      class: 'fe-text',
      domProps: {
        innerHTML: this.value,
      },
    });
  },
};
</script>
