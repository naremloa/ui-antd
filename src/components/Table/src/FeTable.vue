<script>
import { Table as ATable } from 'ant-design-vue';
import { isObject, isFunction, cloneDeep } from '@/utils/lodash';

const { Column: ATableColumn } = ATable;

export default {
  name: 'FeTable',
  components: {
    ATable,
    ATableColumn,
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
    form: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: () => ({ current: 1, pageSize: 30, total: 0 }),
    },
  },
  data() {
    return {
      localDataSource: [],
    };
  },
  watch: {
    dataSource: {
      handler(newVal) {
        this.localDataSource = cloneDeep(newVal);
      },
      immediate: true,
    },
  },
  methods: {
    async submit() {
      if (!this.form) return null;
      try {
        await this.$refs.tableForm.validate();
        return this.localDataSource;
      } catch (err) {
        console.error(err?.message);
      }
      return null;
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
    const renderTable = () => h(
      'a-table',
      {
        props: {
          tableLayout: 'auto',
          scroll: { x: 'max-content', y: 'max-content' },
          ...this.$attrs,
          rowKey: this.rowKey,
          columns: undefined,
          dataSource: this.dataSource,
          pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            locale: {
              items_per_page: '条/页',
              jump_to: '跳至',
              page: '页',
            },
            pageSizeOptions: ['30', '50', '100', '150', '200'],
            ...this.pagination,
          },
          bordered: true,
          locale: {
            emptyText: this.tableError ? '资料载入失败，请重新尝试' : '无符合条件之资料',
            ...(this.$attrs.locale ? { ...this.$attrs.locale } : {}),
          },
        },
        on: {
          ...this.$listeners,
          change: ({ current, pageSize, total }) => {
            const pagination = {
              ...this.pagination, current, pageSize, total,
            };
            this.$emit('change', pagination);
          },
        },
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
              idx,
              // column,
            ) => h(
              'fe-cus-column',
              {
                props: {
                  cusColumns,
                  columnsStyle,
                  dataIndex,
                  rowData,
                },
                attrs: { data, idx },
                on: {
                  'update:data-source': (value) => {
                    this.localDataSource.splice(idx, 1, { ...this.localDataSource[idx], ...value });
                    // this.$emit('update:data-source', [
                    //   ...this.dataSource.slice(0, idx),
                    //   value,
                    //   ...this.dataSource.slice(idx - (this.dataSource.length - 1)),
                    // ]);
                  },
                },
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
    );
    return h(
      'fe-card',
      {
        class: 'fe-table',
        props: { bodyStyle: { padding: 0 }, bordered: false },

      },
      [
        this.form
          ? h(
            'fe-form',
            {
              props: {
                model: { data: this.localDataSource },
              },
              ref: 'tableForm',
            },
            [renderTable()],
          )
          : renderTable(),
      ],
    );
  },
};
</script>
<style lang="scss" scoped>
.fe-table {
  margin-top: 10px;
}
</style>
