<script>
import { isFunction } from '@/utils/lodash';

export default {
  name: 'FeCusColumn',
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
      default: () => ({}),
    },
  },
  render(h) {
    const displayCusColumns = () => (this.cusColumns.length > 0
      ? this.cusColumns.map(({ columnType, columnStyle, ...rest }) => h(
        columnType,
        {
          style: isFunction(columnStyle)
            ? columnStyle(this.rowData[this.dataIndex], this.rowData, rest)
            : columnStyle,
          props: {
            ...this.$attrs, ...rest, dataIndex: this.dataIndex, rowData: this.rowData,
          },
          attrs: rest,
          on: {
            'update:date-source': (value) => {
              this.$emit('update:data-source', { [this.dataIndex]: value });
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
