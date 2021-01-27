<template>
  <div class="upload">
    <div class="upload-input">
      <input
        name="image[]"
        type="file"
        multiple="multiple"
        accept="image/png, image/jpg"
        @change="handleChange">
      <fe-button type="primary">
        <fe-icon type="upload" />
        {{ name }}
      </fe-button>
      <span class="upload-tip">{{ tip }}</span>
    </div>

    <div class="file-list">
      <ul>
        <li
          v-for="(file, index) in fileList"
          :key="index">
          {{ file.name }}
          <fe-icon
            type="close-circle"
            @click="handleRemoveFile(index)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Array, default: () => [] },
    name: { type: String, default: 'Upload Button' },
    tip: { type: String, default: '' },
  },

  computed: {
    fileList() {
      return this.value;
    },
  },
  methods: {
    async handleChange(e) {
      const files = await this.handleFiles(e.target.files);

      const list = [...this.fileList, ...files];
      if (list.length > 5) {
        // alert(this.$t('i18n_upload_amount_error'));
      } else {
        this.$emit('input', list);
      }
    },

    handleFiles(files) {
      const hasBigFiles = [...files].some((file) => {
        const fileMB = file.size / 1024 ** 2;
        return fileMB > 4;
      });

      if (hasBigFiles) {
        // alert(this.$t('i18n_upload_size_error'));
        return [];
      }

      return Promise.all(
        [...files].map(async (file) => ({
          name: file.name,
          url: await this.convertFile(file),
        })),
      );
    },

    handleRemoveFile(index) {
      this.fileList.splice(index, 1);
    },

    convertFile(file) {
      return new Promise((resolve, reject) => {
        // 建立FileReader物件
        const reader = new FileReader();
        // 註冊onload事件，取得result則resolve (會是一個Base64字串)
        reader.onload = () => resolve(reader.result);
        // 註冊onerror事件，若發生error則reject
        reader.onerror = () => reject(reader.error);
        // 讀取檔案
        reader.readAsDataURL(file);
      });
    },
  },
};
</script>
