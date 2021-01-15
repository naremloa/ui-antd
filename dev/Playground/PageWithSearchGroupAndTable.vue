<template>
  <div class="page-with-search-group-and-table">
    <fe-search-group
      ref="SearchGroup"
      :form-list="formList"
      @search="handleSearch" />
    <fe-table
      :loading="tableLoading"
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      @change="handleChange" />
  </div>
</template>
<script>
import { getData } from './dataSource';

export default {
  name: 'PageWithSearchGroupAndTable',
  data() {
    const { fsInput, ftPagination, ftColumn } = this.$format;
    return {
      formList: [
        fsInput({
          hide: false,
          prop: 'keyword',
          label: '關鍵字',
          default: 'something',
          formTypeProps: {
            placeholder: 'something',
          },
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
        }),
      ],
      columns: [
        ftColumn({
          dataIndex: 'id',
          title: 'id',
        })(),
        ftColumn({
          dataIndex: 'name',
          title: 'name',
        })(),
        ftColumn({
          dataIndex: 'age',
          title: 'age',
        })(),
      ],
      pagination: ftPagination(),
      dataSource: [],
      tableLoading: false,
    };
  },
  methods: {
    async handleSearch(param) {
      this.tableLoading = true;
      this.dataSource = [];
      const data = {
        ...this.pagination,
        ...param,
      };
      console.log('check data', data);
      // 請求送出
      const [err, res] = (await getData(data)) || [];
      console.log('response res', res);
      const { current, pageSize } = data;
      const { data: resData = [], meta: { total = 0 } = {} } = res || {};
      // 更新分頁資訊
      this.pagination = this.$format.ftPagination({ current, pageSize, total });
      // 無特殊錯誤需要處理時，可以通過在上面給預設值之後，走和請求成功一樣的處理方式
      // if (err) {
      //   this.tableLoading = false;
      //   return;
      // }
      // 更新請求成功資訊
      this.dataSource = resData;
      this.tableLoading = false;
    },
    handleChange(data) { this.$refs.SearchGroup.search(data); },
  },
};
</script>
