<script>
import FeColumnText from './FeColumnText.vue';
import FeColumnTag from './FeColumnTag.vue';
import FeColumnButton from './FeColumnButton.vue';
import FeColumnSelect from './FeColumnSelect.vue';
import FeColumnSwitch from './FeColumnSwitch.vue';
import FeColumnTextarea from './FeColumnTextarea.vue';
import FeColumnInput from './FeColumnInput.vue';
import FeColumnCheckbox from './FeColumnCheckbox.vue';

export default {
  name: 'FeCusColumn',
  components: {
    FeColumnText,
    FeColumnTag,
    FeColumnButton,
    FeColumnSelect,
    FeColumnSwitch,
    FeColumnTextarea,
    FeColumnInput,
    FeColumnCheckbox,
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
    dataIndex: {
      type: String,
      required: true,
    },
    rowData: {
      type: Object,
      default: () => {},
    },
  },
  render(h) {
    const displayCusColumns = () => (this.cusColumns.length > 0
      ? this.cusColumns.map(({ columnType, ...rest }) => h(
        `fe-column-${columnType}`,
        {
          props: { ...this.$attrs, ...rest, dataIndex: this.dataIndex },
          attrs: rest,
          on: {
            'update:date-source': (value) => {
              this.$emit('update:data-source', { ...this.rowData, [this.dataIndex]: value });
            },
          },
        },
      ))
      : '-');
    return h(
      'div',
      { style: this.columnsStyle, class: 'fe-cus-column' },
      displayCusColumns(),
    );
  },
};
</script>
