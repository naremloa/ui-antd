<script>
import { Table as ATable } from 'ant-design-vue';
import { FeCard } from '@/components/Card';
import { isObject, isFunction } from '@/utils/lodash';
import FeCusColumn from './FeCusColumn.vue';

const { Column: ATableColumn } = ATable;

export default {
  name: 'FeTable',
  components: {
    ATable,
    ATableColumn,
    FeCusColumn,
    FeCard,
  },
  props: {
    tableError: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: [String, Function],
      default: () => (record, idx) => idx,
    },

    pagination: {
      type: Object,
      default: () => ({ current: 1, pageSize: 10, total: 0 }),
    },
  },
  render(h) {
    function displayHeader(node) {
      // render func
      if (isFunction(node)) return node.apply(this, [h]);
      // component
      if (isObject(node)) return h(node);
      // text node
      return node;
    }
    return h(
      'fe-card',
      {
        class: 'fe-table',
        props: { bodyStyle: { padding: 0 } },
      },
      [h(
        'a-table',
        {
          props: {
            ...this.$attrs,
            rowKey: this.rowKey,
            columns: undefined,
            dataSource: this.dataSource,
            pagination: {
              showSizeChanger: true,
              showQuickJumper: true,
              // locale: {
              //   items_per_page: '条/页',
              //   jump_to: '跳至',
              //   page: '页',
              // },
              ...this.pagination,
            },
            bordered: true,
            locale: {
              emptyText: this.tableError ? '资料载入失败，请重新尝试' : '无符合条件之资料',
            },
          },
          on: this.$listeners,
          scopedSlots: this.$scopedSlots,
        },
        this.columns.map(({
          dataIndex,
          title,
          header = null,
          cusColumns = [],
          columnsStyle = {},
          ...rest
        } = {}) => h(
          'a-table-column',
          {
            props: {
              ...rest,
              dataIndex,
              ...(header ? {} : { title }),
            },
            key: dataIndex,
            scopedSlots: {
              default: (
                data,
                rowData,
              // idx,
              // column,
              ) => h(
                'fe-cus-column',
                {
                  props: { cusColumns, columnsStyle },
                  attrs: { data, rowData },
                },
              ),
            },
          },
          [header && h(
            'div',
            { slot: 'title' },
            [displayHeader(header)],
          )],
        )),
      )],
    );
  },
};
</script>
<style lang="scss" scoped>
.fe-table {
  margin-top: 10px;
}
</style>
