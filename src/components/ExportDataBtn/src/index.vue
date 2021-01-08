<template>
  <!-- NOTE 導出excel數據的按鈕-->
  <a-button
    ref="ExportDataBtn"
    :loading="loading"
    :disabled="loading || noData"
    @click="handleDownload">
    {{ btnText }}
  </a-button>
</template>
<script>
import { isFunction } from '@/utils/lodash';
import { Button as AButton } from 'ant-design-vue';

export default {
  name: 'FeExportDataBtn',
  components: { AButton },
  props: {
    btnText: {
      type: String,
      default: '导出当前数据',
    },
    downloadApiFunc: { // 下載excel的函式
      type: Function,
      default: null,
    },
    noData: {
      type: Boolean,
      default: false,
    },
    defaultFilename: { // 預設檔名
      type: [String, Function],
      default: 'default-file-name',
    },
    emitEventName: { // 檔案下載完 如果需要emit 可帶emit事件名稱
      type: String,
      default: '',
    },
    total: { // 檔案數據有幾筆 超過會變成壓縮檔
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      loading: false,
      downloadParams: {},
      downloadFileName: '',
    };
  },

  methods: {
    // Remove fields with empty value
    async getDownloadParams() {
      if (!isFunction(this.downloadApiFunc)) {
        console.error('downloadApiFunc is not function');
        return {};
      }
      const tempParams = await this.downloadApiFunc();
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, val] of Object.entries(tempParams)) {
        if (val === '') {
          delete tempParams[key];
        }
      }
      return tempParams;
    },
    // 設定下載檔案的檔名
    setDownloadFileName(res) {
      try {
        // eslint-disable-next-line prefer-destructuring
        this.downloadFileName = res.headers['content-disposition'].split(
          'filename=',
        )[1];
      } catch (e) {
        // 異常時, 採用預設檔名
        const extName = this.total > 100000 ? '.zip' : '.xlsx';
        this.downloadFileName = typeof this.defaultFilename === 'function'
          ? `${this.defaultFilename()}${extName}`
          : `${this.defaultFilename}${extName}`;
      }
    },
    // 下載檔案
    async handleDownload() {
      // Getting parameters needed in downloading
      this.loading = true;
      const res = await this.getDownloadParams();
      this.loading = false;

      // Start downloading
      // Parse download file name in response
      this.setDownloadFileName(res);

      // Create download link
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(
        new Blob([res.data]),
      );
      link.setAttribute('download', this.downloadFileName);
      document.body.appendChild(link);
      link.click();

      // Trigger closing modal if needed
      this.$emit(this.emitEventName);
    },
  },

};
</script>
