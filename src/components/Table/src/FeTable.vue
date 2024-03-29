<script>
import { Table as ATable } from 'ant-design-vue';
import { isObject, isFunction, cloneDeep } from '@/utils/lodash';
import FeColumnLoading from './FeColumnLoading.vue';

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
    loadingDataSource: {
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
        if (this.form) this.localDataSource = cloneDeep(newVal);
      },
      immediate: true,
    },
  },
  methods: {
    submit() {
      if (this.form) this.$refs.tableForm.submit();
    },
    outputData() { return cloneDeep(this.localDataSource); },
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
          pagination: this.pagination === null ? false : {
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
          change: ({
            current, pageSize, total,
          }, filters, sorter) => {
            const pagination = {
              ...this.pagination, current, pageSize, total,
            };

            this.$el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            this.$emit('change', pagination, filters, sorter);
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
      } = {}, columnsIndex) => h(
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
            ) => {
              const loadingStatus = this.loadingDataSource.includes(idx);
              const checkColSpan = (status) => {
                if (!status) return 1;
                // 處於 loading 狀態
                if (columnsIndex === 0) return this.columns.length;
                return 0;
              };
              return {
                attrs: { colSpan: checkColSpan(loadingStatus) },
                children: loadingStatus && columnsIndex === 0
                  ? h(FeColumnLoading)
                  : h(
                    'fe-cus-column',
                    {
                      props: {
                        cusColumns,
                        columnsStyle,
                        dataIndex,
                        rowData,
                        localRowData: this.localDataSource[idx],
                      },
                      attrs: { data, idx },
                      on: {
                        'update:data-source': (value) => {
                          if (this.form) {
                            this.localDataSource.splice(
                              idx, 1, { ...this.localDataSource[idx], ...value },
                            );
                          }
                        },
                      },
                    },
                  ),
              };
            },
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
              on: {
                submit: () => { this.$emit('submit', this.localDataSource); },
                'submit-error': () => this.$emit('submit-error'),
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
