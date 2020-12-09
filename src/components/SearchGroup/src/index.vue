<template>
  <div class="fe-search-group">
    <fe-card>
      <fe-form
        ref="Form"
        :model="form"
        layout="inline">
        <fe-row>
          <template v-if="dateShortcut">
            <fe-row type="flex">
              <fe-col :flex="1">
                <fe-radio-group
                  v-model="radioValue"
                  button-style="solid">
                  <fe-radio-button :value="1">
                    當日
                  </fe-radio-button>
                  <fe-radio-button :value="7">
                    前七天
                  </fe-radio-button>
                  <fe-radio-button :value="30">
                    前三十天
                  </fe-radio-button>
                </fe-radio-group>
              </fe-col>
              <fe-col :flex="2">
                <fe-range-picker
                  v-model="datePickerValue"
                  separator="到"
                  :show-tiem="{ format: 'HH:mm:ss' }"
                  format="YYYY-MM-DD HH:mm:ss"
                  :placeholder="['開始時間', '結束時間']"
                  value-format="YYYY-MM-DD HH:mm:ss"
                  @change="onChange"
                  @ok="onOk" />
              </fe-col>
            </fe-row>
          </template>
          <fe-row>
            <fe-form-item
              v-for="(item, iIdx) in localFormList"
              :key="`${item.dataKey || 0} - ${iIdx}`"
              :label="item.label"
              :prop="item.prop"
              :rules="item.rules">
              <component
                :is="`fe-${item.formType}`"
                v-model="form[item.dataKey]" />
            </fe-form-item>
            <!-- <fe-form-item
              label="測試"
              prop="inputValue"
              :rules="rules">
              <fe-input v-model="form.inputValue" />
            </fe-form-item>
            <fe-form-item label="測試">
              <fe-input v-model="form.inputValue" />
            </fe-form-item>
            <fe-form-item label="測試">
              <fe-input v-model="form.inputValue" />
            </fe-form-item>
            <fe-form-item label="測試">
              <fe-input v-model="form.inputValue" />
            </fe-form-item>
            <fe-form-item label="測試select">
              <fe-select
                v-model="form.selectValue"
                :options="selectOptions" />
            </fe-form-item>
            <fe-form-item label="測試 checkbox">
              <fe-checkbox-group
                v-model="form.checkboxValue"
                :options="checkboxOptions" />
            </fe-form-item> -->
          </fe-row>
          <fe-row
            type="flex"
            justify="end">
            <fe-col><fe-button>清除條件</fe-button></fe-col>
            <fe-col>
              <fe-button
                type="primary"
                :has-loading="true"
                @click="validate">
                搜索
              </fe-button>
            </fe-col>
          </fe-row>
        </fe-row>
      </fe-form>
    </fe-card>
  </div>
</template>
<script>
import { FeCard } from '@/components/Card';
import { FeForm } from '@/components/Form';
import { FeRadioButton, FeRadioGroup } from '@/components/Radio';
import { isArray, cloneDeep } from '@/utils/lodash';
import { notification } from 'ant-design-vue';

export default {
  name: 'FeSearchGroup',
  components: {
    FeCard, FeRadioButton, FeRadioGroup, FeForm,
  },
  props: {
    dateShortcut: {
      type: String,
      default: '',
    },
    formList: {
      type: [Array, Promise],
      default: () => [],
    },
  },
  data() {
    return {
      localFormList: [],
      radioValue: 1,
      datePickerValue: [],
      rules: [{ required: true, message: '必填 ', trigger: 'change' }],
      form: {
        inputValue: '',
        selectValue: '',
        checkboxValue: [],
      },
      checkboxOptions: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        // { label: 'Orange', value: 'Orange' },
      ],
      selectOptions: [{ value: 1, label: '測試1' }, { value: 2, label: '測試2', disabled: true }],
    };
  },
  watch: {
    formList: {
      handler(newVal) {
        Promise.resolve(newVal).then((list) => {
          if (!isArray(list) || list.length === 0) {
            this.localFormList.splice(0);
            return;
          }
          this.localFormList = cloneDeep(list);
        });
      },
      immediate: true,
    },
  },
  methods: {
    onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    },
    onOk(value) {
      console.log('onOk: ', value);
    },
    async validate() {
      try {
        await this.$refs.Form.validate();
        this.search();
      } catch (err) {
        notification.error({
          message: '標題',
          description: '驗證有誤',
        });
      }
    },
    async search() {
      console.log('serach');
    },
  },
};
</script>
<style lang="scss" scoped>
.fe-search-group {
  margin-top: 10px;
}
</style>
