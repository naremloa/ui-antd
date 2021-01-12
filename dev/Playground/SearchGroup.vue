<template>
  <div class="search-group">
    <fe-search-group
      :form-list="formList"
      :form-init="{ selectValue: 1 }"
      :search="handleSearch"
      :date-shortcut="'date'"
      date-shortcut-label="dateShortcut 測試" />
  </div>
</template>
<script>
export default {
  name: 'SearchGroup',
  data() {
    const { fsInput, fsSelect } = this.$format;
    return {
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
        fsSelect({
          hide: true,
          prop: 'selectValue',
          label: '測試 select',
          options: [{ value: 1, label: '香蕉' }, { value: 2, label: '蘋果' }],
          allowClear: true,
          rules: [{ required: true, message: '必填 ', trigger: 'change' }],
          formTypeProps: {
            showSearch: true,
          },
        }),
      ],
    };
  },
  methods: {
    async handleSearch(...params) {
      console.log('handleSearch', params);
    },
  },
};
</script>
