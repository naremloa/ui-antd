<template>
  <div class="page">
    <fe-search-group
      :form-list="formList"
      :search="handleSearch"
      :date-shortcut="'date'" />
    <fe-table
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :scroll="{ x: 400 }"
      @change="handleChange" />
    <fe-button
      @click="handleModal">
      彈窗
    </fe-button>
    <fe-modal
      v-model="visible"
      width="middle"
      :template="modalTemplate" />
  </div>
</template>
<script>
import {
  fColumn, fText, fButton, fPagination,
} from './format';
import { dataSource } from './data';
import ModalTemplate from './ModalTemplate.vue';

export default {
  name: 'Page',
  data() {
    return {
      dataSource,
      pagination: fPagination({ total: 500 }),
      columns: [
        fColumn({
          dataIndex: 'age',
          title: 'Age',
          // width: 80,
        })(fText({ text: 'aaage' })),
        fColumn({
          dataIndex: 'address',
          title: 'Address',
          // width: 300,
        })(),
        fColumn({
          dataIndex: 'firstName',
          title: 'FirstName',
          // width: 100,
        })(),
        fColumn({
          dataIndex: 'lastName',
          title: 'LastName',
          // width: 100,
        })(),
        fColumn({
          dataIndex: 'tags',
          title: 'Tags',
          // width: 100,
        })({ columnType: 'tag' }),
        fColumn({
          dataIndex: 'action',
          title: 'Action',
          // width: 200,
          columnsStyle: { display: 'flex', justifyContent: 'space-around' },
        })(fButton({ text: '按鈕' }), fButton({ text: '按鈕2' })),
      ],
      visible: false,
      modalTemplate: ModalTemplate,
      selectOptions: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2' }],
      formList: [
        {
          prop: 'inputValue',
          label: '測試 input',
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
          formType: 'input',
        },
        {
          prop: 'selectValue',
          label: '測試 select',
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
          formType: 'select',
          options: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2' }],
          allowClear: true,
        },
      ],
    };
  },
  methods: {
    handleChange({ current, pageSize }) {
      this.pagination = { ...this.pagination, current, pageSize };
    },
    handleModal() {
      this.visible = true;
    },
    async handleSearch(...params) {
      console.log('handleSearch', params);
    },
  },
};
</script>
