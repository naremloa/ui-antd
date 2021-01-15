<template>
  <div class="clearfix">
    <Upload
      v-bind="handleAttr"
      :file-list="value"
      :list-type="listType"
      :before-upload="beforeUpload"
      :show-upload-list="{
        showRemoveIcon: remove,
        showDownloadIcon: download
      }"
      v-on="handleEvent"
      @change="handleChange">
      <fe-button>
        <fe-icon
          v-if="icon"
          :type="icon" /> {{ text }}
      </fe-button>
    </Upload>
    <fe-modal
      :visible="previewVisible"
      :template="modalTemplate"
      :footer="null"
      :data="previewData"
      width="middle"
      @cancel="handleCancel" />
  </div>
</template>

<script>
import { Upload } from 'ant-design-vue';
import ModalTemplate from './modalTemplate.vue';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  name: 'FeUpload',
  components: { Upload },
  model: { prop: 'value', event: 'change' },
  props: {
    text: {
      type: String,
      default: 'Upload',
    },
    icon: {
      type: String,
      default: 'upload',
    },
    listType: {
      type: String,
      default: 'picture',
    },
    value: {
      type: Array,
      default: () => [],
    },
    length: {
      type: Number,
      default: 1,
    },
    preview: {
      type: Boolean,
      default: true,
    },
    download: {
      type: Boolean,
      default: false,
    },
    remove: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      modalTemplate: ModalTemplate,
      previewVisible: false,
      previewData: {
        url: '',
        alt: '',
      },
      fileList: [],
    };
  },
  computed: {
    handleEvent() {
      const payload = {};
      this.preview && (payload.preview = this.handlePreview);
      this.download && (payload.download = this.handleDownload);
      this.remove && (payload.remove = this.handleRemove);
      return payload;
    },
    handleAttr() {
      const {
        download, remove, preview, ...rest
      } = this.$attrs || {};
      return rest;
    },
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewData.url = file.url || file.preview;
      this.previewData.alt = file.name;
      this.previewVisible = true;
    },
    handleDownload(file) {
      fetch(file.url)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          // a.style.display = 'none';
          a.href = url;
          a.download = file.name;
          // document.body.appendChild(a);
          a.click();
          // document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch((err) => {
          console.error('[ERROR] handleDownload is failed: ', err);
          const a = document.createElement('a');
          a.href = file.url;
          a.download = file.name;
          a.target = '_blank';
          a.click();
        });
    },
    handleChange({ fileList }) {
      if (this.length !== -1) {
        fileList.splice(0, fileList.length - this.length);
      }
      this.$emit('change', fileList);
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.$emit('change', newFileList);
    },
    beforeUpload() {
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
