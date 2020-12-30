<template>
  <div class="table">
    <fe-table
      :table-error="true"
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :scroll="{ x: 400 }"
      @change="handleChange" />
  </div>
</template>
<script>
import { dataSource } from '../data';
import TableHeader from './TableHeader.vue';

export default {
  name: 'Table',
  data() {
    const {
      ftColumn, ftText, ftTextarea, ftButton, ftSwitch, ftSelect, ftPagination,
    } = this.$format;
    return {
      pagination: ftPagination({ total: 500 }),
      dataSource,
      columns: [
        ftColumn({
          dataIndex: 'age',
          title: 'Age',
          header: (h) => h('div', 'Age Header'),
          // width: 80,
        })(ftText({ text: 'aaage' })),
        ftColumn({
          dataIndex: 'address',
          title: 'Address',
          header: TableHeader,
          // width: 300,
        })(),
        ftColumn({
          dataIndex: 'firstName',
          title: 'FirstName',
          // width: 100,
        })(),
        ftColumn({
          dataIndex: 'lastName',
          title: 'LastName',
          // width: 100,
        })(),
        ftColumn({
          dataIndex: 'tags',
          title: 'Tags',
          // width: 100,
        })({ columnType: 'tag' }),
        ftColumn({
          dataIndex: 'action',
          title: 'Action',
          // width: 200,
          columnsStyle: { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' },
        })(
          ftButton({ text: '按鈕', disabled: (rowData) => !rowData.switch }),
          ftButton({ text: '按鈕2' }),
        ),
        ftColumn({
          dataIndex: 'switch',
          title: 'Switch',
        })(ftSwitch({
          checkedChildren: 'OK',
          unCheckedChildren: 'NO',
          beforeChange: (value, { data, rowData }) => {
            const idx = this.dataSource.indexOf(rowData);
            this.dataSource[idx].switch = !data;
          }
          ,
        })),
        ftColumn({
          dataIndex: 'select',
          title: 'Select',
          width: 200,
        })(ftSelect({
          defaultValue: { value: 1, label: 'A1' }.label,
          options: [{ value: 1, label: 'A1' }, { value: 2, label: 'A2' }],
          change: (row) => {
            console.log('YO', row);
          },
        })),
        ftColumn({
          dataIndex: 'textarea',
          title: 'Textarea',
        })(ftTextarea({
          placeholder: 'HI',
          change: (data, rowData) => {
            this.dataSource[this.dataSource.indexOf(rowData)].textarea = data;
          },
        })),
      ],
    };
  },
  methods: {
    handleChange({ current, pageSize }) {
      this.pagination = {
        ...this.pagination,
        current,
        pageSize,
      };
    },
  },
};
</script>
