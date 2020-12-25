<template>
  <div class="clearfix">
    <Upload
      :file-list="value"
      :list-type="listType"
      :remove="handleRemove"
      :before-upload="beforeUpload"
      @preview="handlePreview"
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
      :data="previewImage"
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
  },
  data() {
    return {
      modalTemplate: ModalTemplate,
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
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
