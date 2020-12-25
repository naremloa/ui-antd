<template>
  <div class="form">
    <fe-form
      ref="ruleForm"
      :model="form"
      :rules="rules">
      <fe-form-item
        ref="name"
        label="fe-input"
        prop="name">
        <fe-input
          v-model="form.name"
          @blur="
            () => {
              $refs.name.onFieldBlur();
            }
          " />
      </fe-form-item>
      <fe-form-item
        label="fe-input-password"
        prop="password">
        <fe-input-password
          v-model="form.password"
          placeholder="Number" />
      </fe-form-item>
      <fe-form-item
        label="fe-input-number"
        prop="password">
        <fe-input-number
          v-model="form.password"
          placeholder="input password" />
      </fe-form-item>
      <fe-form-item
        label="fe-select"
        prop="region">
        <fe-select
          v-model="form.region"
          placeholder="please select your zone"
          :options="[
            {label:'AAAA',value:'AAAA'},
            {label:'BBBB',value:'BBBB'},
          ]" />
      </fe-form-item>
      <fe-form-item
        label="fe-select (mode:tags)"
        prop="regions">
        <fe-select
          v-model="form.regions"
          mode="tags"
          placeholder="please select your zone"
          :options="[
            {label:'AAAA',value:'AAAA'},
            {label:'BBBB',value:'BBBB'},
          ]" />
      </fe-form-item>
      <fe-form-item
        label="fe-select (show-search)"
        prop="regions">
        <fe-select
          v-model="form.regions"
          show-search
          placeholder="please select your zone"
          :options="[
            {label:'AAAA',value:'AAAA'},
            {label:'BBBB',value:'BBBB'},
          ]" />
      </fe-form-item>
      <fe-form-item
        label="fe-date-picker"
        required
        prop="date1">
        <fe-date-picker
          v-model="form.date1"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%;" />
      </fe-form-item>
      <fe-form-item
        label="fe-switch"
        prop="delivery">
        <fe-switch
          v-model="form.delivery"
          checked-children="开"
          un-checked-children="关" />
      </fe-form-item>
      <fe-form-item
        label="fe-checkbox-group"
        prop="type">
        <div>
          <div>
            <fe-checkbox-all
              :value="form.type"
              :options="[
                { value: 1, label: 'OnlineNew' },
                { value: 2, label: 'PromotionNew' },
                { value: 3, label: 'OfflineNew' },
              ]"
              @change="(val) => form.type = val" />
          </div>
          <div>
            <fe-checkbox-group
              v-model="form.type"
              name="type"
              :options="[
                { value: 1, label: 'OnlineNew' },
                { value: 2, label: 'PromotionNew' },
                { value: 3, label: 'OfflineNew' },
              ]" />
          </div>
        </div>
      </fe-form-item>
      <fe-form-item
        label="fe-radio"
        prop="resource">
        <fe-radio-group v-model="form.resource">
          <fe-radio value="1">
            Sponsor
          </fe-radio>
          <fe-radio value="2">
            Venue
          </fe-radio>
        </fe-radio-group>
      </fe-form-item>
      <fe-form-item
        label="fe-input (type: textarea)"
        prop="desc">
        <fe-input
          v-model="form.desc"
          type="textarea" />
      </fe-form-item>
      <fe-form-item
        label="fe-textarea"
        prop="desc">
        <fe-textarea
          v-model="form.desc" />
      </fe-form-item>
      <fe-form-item
        label="fe-input-left">
        <fe-input-list
          v-model="form.IPlist"
          :prop="'IPlist'"
          :rules="rules['IPlist']" />
      </fe-form-item>
      <fe-form-item
        label="fe-upload-button">
        <fe-upload-button v-model="form.fileList" />
      </fe-form-item>
      <fe-form-item
        label="fe-upload-button">
        <fe-upload
          v-model="form.fileList"
          list-type="picture">
          <fe-button> <fe-icon type="upload" /> upload </fe-button>
        </fe-upload>
      </fe-form-item>
      <fe-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <fe-button
          type="primary"
          @click="handleSubmit">
          Create
        </fe-button>
        <fe-button
          style="margin-left: 10px;"
          @click="resetForm">
          Reset
        </fe-button>
      </fe-form-item>
      <fe-form-item-setting
        v-for="(setting, idx) in formItemSetting"
        :key="setting.prop || `setting-${idx}`"
        v-model="form[setting.prop]"
        v-bind="setting" />
    </fe-form>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data() {
    const {
      ffInput,
      ffInputPassword,
      ffSelect,
      ffSwitch,
      ffDatePicker,
    } = this.$format;
    return {
      other: '',
      form: {
        name: '',
        region: '',
        regions: [2],
        date: null,
        date1: undefined,
        delivery: true,
        type: [],
        resource: '',
        desc: '',
        IPlist: [],
        password: '',
        fileList: [],
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'change' },
          {
            min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'change',
          },
        ],
        password: [{ required: true, message: 'Please input password', trigger: 'change' }],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        regions: [{ required: true, message: 'Please select Activity zones', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'change' }],
        IPlist: [{ required: true, message: 'Please Input IP list', trigger: 'change' }],
      },
      formItemSetting: [
        ffInput({
          prop: 'name',
          label: 'fe-input',
        }),
        ffInputPassword({
          prop: 'password',
          label: 'fe-input-password',
          formTypeProps: {
            placeholder: 'Number',
          },
        }),
        ffSelect({
          prop: 'regions',
          label: 'fe-select',
          options: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2' }],
          formTypeProps: {
            placeholder: 'Number',
          },
        }),
        ffSwitch({
          prop: 'delivery',
          label: 'fe-switch',
          // change: (row, e) => { this.form.delivery = row; },
        }),
        {
          prop: 'name',
          label: 'text',
          formType: (h, { value }) => `測試, 這邊會跟 fe-input 的值更新: ${value}`,
        },
        ffDatePicker({
          prop: 'date',
          label: 'fe-date-picker',
          rules: [{ required: true, message: 'required', trigger: 'change' }],
        }),
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
        }
      });
      console.log('handleSubmit', this.form);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      console.log('resetForm');
    },
    handle(data, rowData) {
      console.log(data, rowData);
    },
  },
};
</script>
