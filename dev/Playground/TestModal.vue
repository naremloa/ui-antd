<template>
  <div class="add-account">
    <fe-title
      title="新增角色"
      type="modal">
      <template #left-extra>
        left
      </template>
      <template #right-extra>
        right
      </template>
    </fe-title>
    <fe-form
      ref="addAndEditForm"
      :model="form"
      :rules="rules"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }">
      <fe-form-item-setting
        v-for="setting in formSetting"
        :key="setting.prop"
        v-model="form[setting.prop]"
        v-bind="setting" />
      <div class="btn-wrapper">
        <fe-button
          @click="closeDialog(false)">
          取消
        </fe-button>
        <fe-button
          style="margin-left: 10px;"
          type="primary"
          @click="handleSubmit">
          确定
        </fe-button>
      </div>
    </fe-form>
  </div>
</template>
<script>
// import { createAccountAPI } from '@/api/account';

import { addAccountFormConfig } from './config';

export default {
  name: 'AddAccount',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      title: '',
      form: {
        nickname: '',
        username: '',
        password: '',
        telegram_id: '',
        enigma_id: '',
        potato_id: '',
        white_list_ip: [],
        role_ids: [],
      },
      rules: {
        telegram: [{ required: true, message: 'Please input password', trigger: 'change' }],
      },
      formSetting: addAccountFormConfig({ format: this.$format }),

    };
  },
  methods: {
    closeDialog(status = false) {
      this.$emit('close', status);
    },

    async handleSubmit() {
      console.log('handleSubmit');
    },

  },
};
</script>

<style lang="scss">
.btn-wrapper {
  text-align: right;
}
</style>
