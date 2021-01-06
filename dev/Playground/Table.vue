<template>
  <div class="table">
    <fe-table
      ref="formTable"
      :loading="tableLoading"
      :form="true"
      :table-error="true"
      :columns="columns"
      :data-source="dataSource"
      :pagination.sync="pagination"
      :scroll="{ x: 400 }"
      @change="handleChange" />
    <fe-button @click="formSubmit">
      表單表格提交
    </fe-button>
  </div>
</template>
<script>
import { dataSource } from '../data';
import TableHeader from './TableHeader.vue';

export default {
  name: 'Table',
  data() {
    const {
      ftColumn, ftTextarea, ftButton, ftSwitch, ftSelect,
      ftPagination, ftInput, ftCheckbox,
    } = this.$format;
    return {
      tableLoading: false,
      pagination: ftPagination({ total: 500 }),
      dataSource: [],
      columns: [
        // ftColumn({
        //   dataIndex: 'age',
        //   title: 'Age',
        //   header: (h) => h('div', 'Age Header'),
        //   // width: 80,
        // })(ftText({ text: 'aaage' })),
        // ftColumn({
        //   dataIndex: 'address',
        //   title: 'Address',
        //   header: TableHeader,
        //   // width: 300,
        // })(),
        // ftColumn({
        //   dataIndex: 'firstName',
        //   title: 'FirstName',
        //   // width: 100,
        // })(),
        ftColumn({
          dataIndex: 'checkbox',
          title: 'Checkbox',
          header: (h) => h('div', 'Age Header'),
        })(ftCheckbox({ options: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2' }] })),
        ftColumn({
          dataIndex: 'lastName',
          title: 'LastName',
          // width: 100,
        })(
          ftInput({
            disabled: (rowData) => !rowData.switch,
            type: 'inputNumber',
            rules: [{ required: true, message: 'required', trigger: 'change' }],
          }),
        ),
        ftColumn({
          dataIndex: 'tags',
          title: 'Tags',
          // width: 100,
        })({ columnType: 'fe-column-tag' }),
        ftColumn({
          dataIndex: 'action',
          title: 'Action',
          // width: 200,
          columnsStyle: { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' },
        })(
          ftButton({ text: '按鈕', disabled: (rowData) => !rowData.switch }),
          // ftButton({ text: '按鈕2' }),
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
          },
        })),
        ftColumn({
          dataIndex: 'select',
          title: 'Select',
          width: 200,
        })(ftSelect({
          defaultValue: { value: 1, label: 'A1' }.label,
          options: () => new Promise((res) => {
            setTimeout(() => {
              res([{ value: 1, label: 'A1' }, { value: 2, label: 'A2' }]);
            }, 5000);
          }),
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
  async mounted() {
    this.tableLoading = true;
    await new Promise((res) => setTimeout(() => res(), 500));
    this.dataSource = dataSource;
    this.tableLoading = false;
  },
  methods: {
    handleChange({ current, pageSize }) {
      console.log('handle change');
      // this.pagination = {
      //   ...this.pagination,
      //   current,
      //   pageSize,
      // };
    },
    async formSubmit() {
      const res = await this.$refs.formTable.submit();
      console.log('check submit', res);
    },
  },
};
</script>
