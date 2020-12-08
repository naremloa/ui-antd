<script>
import FeColumnText from './FeColumnText.vue';
import FeColumnTag from './FeColumnTag.vue';
import FeColumnButton from './FeColumnButton.vue';

export default {
  name: 'FeCusColumn',
  components: {
    FeColumnText,
    FeColumnTag,
    FeColumnButton,
  },
  inheritAttrs: false,
  props: {
    cusColumns: {
      type: Array,
      default: () => [],
    },
    columnsStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  render(h) {
    return h(
      'div',
      { style: this.columnsStyle, class: 'fe-cus-column' },
      this.cusColumns.map(({ columnType, ...rest }) => h(
        `fe-column-${columnType}`,
        { props: { ...this.$attrs, ...rest }, attrs: rest },
      )),
    );
  },
};
</script>
