<template>
  <div class="page">
    <fe-table
      :table-error="true"
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :scroll="{ x: 400 }"
      @change="handleChange" />
    <fe-button
      @click="handleModal">
      彈窗
    </fe-button>
    <fe-switch
      :default-checked="true"
      :checked-children="`ON`"
      :un-checked-children="`OFF`"
      @change="switchChange" />
    <fe-textarea
      placeholder="Plz type something here."
      :default-value="`預設值`" />
    <fe-tabs
      :tabs-array="[{label:'1',content:'content1'},{label:'2',content:'content2'}]"
      :change="changeTab">
      <template #content1>
        <fe-avatar
          :size="100"
          :shape="`square`"
          src="https://randomuser.me/api/portraits/men/62.jpg" />
      </template>
      <template #content2>
        2222
      </template>
    </fe-tabs>
    <fe-avatar
      :size="`large`"
      src="https://randomuser.me/api/portraits/men/62.jpg" />
    <!-- TODO table標頭需能夠客製化 目前需求是有tooltip -->
    <!-- FIXME fe-table-->
    <a-table
      row-key="A"
      :columns="columns2"
      :data-source="dataSource2"
      :pagination="pagination"
      :scroll="{ x: 400 }"
      @change="handleChange">
      <template #customTitle>
        <fe-tooltip
          :placement="'top'"
          :title="'A'"
          :content="'CONTENT'" />
      </template>
      <template #customTitle2>
        <fe-icon type="down" />
      </template>
      <template
        slot="scopedC"
        slot-scope="tr, td">
        <button>YO {{ tr }} {{ td }}</button>
      </template>
    </a-table>

    <fe-modal
      v-model="visible"
      width="middle"
      :template="modalTemplate" />

    <fe-dropdown
      :dropdown-title="`下拉標題`"
      :dropdown-list="[
        {label:'A',clickFunc:clickFuncA},
        {label:'B',clickFunc:clickFuncA},
        {label:'C',clickFunc:clickFuncA}
      ]" />
    <div>
      <fe-tooltip
        :placement="'bottom'"
        :title="'TOOLTIP'"
        :content="'CONTENT'" />

      <fe-tooltip
        :placement="'left'"
        :content="'挖slot給你 自己塞icon跟標題'">
        <template #tooltipSlot>
          TOOLTIP2
        </template>
      </fe-tooltip>
    </div>

    <fe-export-data-btn
      :btn-text="'導出excel數據'" />
  </div>
</template>
<script>
import { Table as ATable } from 'ant-design-vue';
// import {
//   ftColumn, ftText, ftButton, fPagination, ftSelect, ftSwitch, ftTextarea,
// } from './format';
import { dataSource, dataSource2 } from './data';
import ModalTemplate from './ModalTemplate.vue';

export default {
  name: 'Page',
  components: { ATable },
  data() {
    const {
      ftColumn, ftText, ftButton, ftPagination, ftSelect, ftSwitch, ftTextarea,
    } = this.$format;

    return {
      dataSource,
      dataSource2,
      pagination: ftPagination({ total: 500 }),
      columns: [
        ftColumn({
          dataIndex: 'age',
          title: 'Age',
          // width: 80,
        })(ftText({ text: 'aaage' })),
        ftColumn({
          dataIndex: 'address',
          title: 'Address',
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
          columnsStyle: { display: 'flex', justifyContent: 'space-around' },
        })(ftButton({ text: '按鈕' }), ftButton({ text: '按鈕2' })),
        ftColumn({
          dataIndex: 'switch',
          title: 'Switch',
        })(ftSwitch({
          checkedChildren: 'OK',
          unCheckedChildren: 'NO',
          change: (data, row) => {
            console.log('row---', row);
          },
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
          defaultValue: 'DEFAULT',
        })),
      ],
      columns2: [
        {
          dataIndex: 'A',
          key: 'A',
          slots: { title: 'customTitle' },
        },
        {
          dataIndex: 'B',
          key: 'B',
          slots: { title: 'customTitle2' },
        },
        ftColumn({
          dataIndex: 'C',
          title: 'C',
          width: 180,
          scopedSlots: { customRender: 'scopedC' },
        })(),
      ],
      visible: false,
      modalTemplate: ModalTemplate,
      selectOptions: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2' }],

    };
  },
  methods: {
    handleChange({ current, pageSize }) {
      this.pagination = { ...this.pagination, current, pageSize };
    },
    handleModal() {
      this.visible = true;
    },

    switchChange(e) {
      console.log('e--', e);
    },
    changeTab(e) {
      console.log('e--', e);
    },
    clickFuncA(e) {
      console.log('e--', e);
    },
  },
};
</script>
