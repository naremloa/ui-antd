<template>
  <div class="page">
    <fe-row>
      <fe-input
        v-model="inputNumber"
        type="inputNumber"
        :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\$\s?|(,*)/g, '')" />
    </fe-row>
    <fe-button
      @click="handleModal">
      彈窗
    </fe-button>
    <fe-switch
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
      data="Mydata"
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
    <fe-icon
      type="info-circle"
      theme="filled" />
    <fe-export-data-btn
      :btn-text="'導出excel數據'" />
    <fe-button @click="handleNotify">
      Notify
    </fe-button>
    <fe-button @click="handleModalDirec">
      Modal
    </fe-button>
  </div>
</template>
<script>
import { Table as ATable } from 'ant-design-vue';
// import {
//   ftColumn, ftText, ftButton, fPagination, ftSelect, ftSwitch, ftTextarea,
// } from './format';
import { dataSource2 } from './data';
import ModalTemplate from './ModalTemplate.vue';

export default {
  name: 'Page',
  components: { ATable },
  data() {
    const {
      ftColumn, ftPagination,
    } = this.$format;

    return {
      inputNumber: 1,
      dataSource2,
      pagination: ftPagination({ total: 500 }),

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
    handleNotify() {
      this.$notify({
        title: '通知',
        message: '通知内容',
      });
    },
    handleModalDirec() {
      this.$modal({
        title: '通知',
        message: '通知内容',
        type: 'error',
      });
    },
  },
};
</script>
