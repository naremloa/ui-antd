<template>
  <div>
    <fe-search-group
      :form-list="formList"
      :form-init="{ selectValue: 1 }"
      :search="handleSearch"
      :date-shortcut="'date'" />

    <fe-tabs
      :tabs-array="tabsArray"
      :change="changeTab" />

    <fe-row
      type="flex"
      justify="space-between"
      align="middle">
      <div>
        <fe-title
          title="列表名稱"
          type="table" />
      </div>
      <div>
        <fe-add-button
          title="title"
          @click="handleButton" />
      </div>
    </fe-row>

    <fe-table
      ref="formTable"
      :loading="tableLoading"
      :form="true"
      :table-error="true"
      :columns="columns"
      :data-source="dataSource"
      :pagination.sync="pagination"
      :scroll="{ x: true }"
      @change="handleChange" />

    <fe-modal
      v-model="visible"
      width="small"
      :data="{}"
      :template="template"
      @close="closeModal" />

    <fe-button @click="formSubmit">
      表單表格提交
    </fe-button>
  </div>
</template>

<script>
import { dataSource } from './dataSource';
import testModal from './TestModal.vue';

export default {
  name: 'Button',

  data() {
    const {
      fsInput, fsSelect,
      ftColumn, ftTextarea, ftButton, ftSwitch, ftSelect,
      ftPagination, ftInput, ftCheckbox,
    } = this.$format;
    return {
      tabsArray: [
        { label: 'ERC-20', content: 'content1' },
        { label: 'OMNI', content: 'content2' },
        { label: 'BTC', content: 'content2' },
      ],
      tableLoading: false,
      template: testModal,
      pagination: ftPagination({ total: 500 }),
      dataSource: [],
      visible: false,
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
        ftColumn({ dataIndex: 'id', title: '用户编号' })(),
        ftColumn({ dataIndex: 'username', title: '账号', width: 160 })(),
        ftColumn({ dataIndex: 'nickname', title: '名称', width: 160 })(),
        ftColumn({ dataIndex: 'platform', title: '平台' })(),
        ftColumn({ dataIndex: 'ids', title: '用户编号' })(),
        ftColumn({ dataIndex: 'usernames', title: '账号', width: 160 })(),
        ftColumn({ dataIndex: 'nicknames', title: '名称', width: 160 })(),
        ftColumn({ dataIndex: 'platforms', title: '平台' })(),
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
          ftButton({
            text: '按鈕',
            disabled: (rowData) => !rowData.switch,
            click: this.openModal,
          }),
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
      formList: [
        fsInput({
          prop: 'inputValue',
          label: '測試',
          default: '22',
          formTypeProps: {
            placeholder: '3345667',
          },
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),
        fsInput({
          prop: 'inputValue',
          label: '測試2',
          default: '22',
          formTypeProps: {
            placeholder: '3345667',
          },
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),
        fsSelect({
          hide: true,
          prop: 'selectValue',
          label: '測試 select',
          options: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2' }],
          allowClear: true,
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),
        fsInput({
          hide: true,
          prop: 'inputValue',
          label: '測試23',
          default: '22',
          formTypeProps: {
            placeholder: '3345667',
          },
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),
        fsInput({
          hide: true,
          prop: 'inputValue',
          label: '測試4',
          default: '22',
          formTypeProps: {
            placeholder: '3345667',
          },
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),

        fsInput({
          hide: true,
          prop: 'inputValue',
          label: '測試5',
          default: '22',
          formTypeProps: {
            placeholder: '3345667',
          },
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),
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
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    handleButton() {
      console.log('hi');
    },
    changeTab(tabNumber) {
      console.log(tabNumber);
    },
    async handleSearch(...params) {
      console.log('handleSearch', params);
    },
    handleChange({ current, pageSize }) {
      console.log('handle change');
    },
    async formSubmit() {
      const res = await this.$refs.formTable.submit();
      console.log('check submit', res);
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
