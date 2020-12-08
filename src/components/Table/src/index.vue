<script>
import { Table as ATable } from 'ant-design-vue';
import { FeCard } from '@/components/Card';
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
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => ({ current: 1, pageSize: 10, total: 0 }),
    },
  },
  render(h) {
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
          },
          on: this.$listeners,
          scopedSlots: this.$scopedSlots,
        },
        this.columns.map(({
          dataIndex,
          title,
          cusColumns = [],
          columnsStyle = {},
          ...rest
        } = {}) => h(
          'a-table-column',
          {
            props: {
              ...rest,
              key: dataIndex,
              dataIndex,
              title,
            },
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
