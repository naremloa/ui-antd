<template>
  <div class="fe-search-group">
    <fe-card>
      <fe-form
        ref="Form"
        :model="form"
        layout="inline"
        :label-col="{ span: '10' }"
        :wrapper-col="{ span: '14' }">
        <fe-row>
          <template v-if="dateShortcut">
            <fe-row type="flex">
              <fe-col :flex="1">
                <fe-radio-group
                  v-model="dateShortcutValue"
                  button-style="solid">
                  <fe-radio-button
                    v-for="item in dateShortcutSetting.options"
                    :key="item.value"
                    :value="item.value">
                    {{ item.label }}
                  </fe-radio-button>
                </fe-radio-group>
              </fe-col>
              <fe-col :flex="2">
                <fe-range-picker
                  v-model="dateShortcutTime"
                  separator="到"
                  :show-tiem="{ format: 'HH:mm:ss' }"
                  format="YYYY-MM-DD HH:mm:ss"
                  :placeholder="['開始時間', '結束時間']"
                  value-format="YYYY-MM-DD HH:mm:ss" />
              </fe-col>
            </fe-row>
          </template>
          <fe-row>
            <fe-form-item-setting
              v-for="(item, iIdx) in localFormList"
              :key="`${item.prop || 0} - ${iIdx}`"
              v-model="form[item.prop]"
              v-bind="item" />
          </fe-row>
          <fe-row
            type="flex"
            justify="end">
            <fe-col>
              <fe-button @click="handleReset">
                清除條件
              </fe-button>
            </fe-col>
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
import { FeRadioButton, FeRadioGroup } from '@/components/Radio';
import {
  isArray, cloneDeep, has, isNil, forOwn, isFunction,
} from '@/utils/lodash';
import { getLatestDayTimeByNow } from '@/utils/tool';
import { notification } from 'ant-design-vue';

export default {
  name: 'FeSearchGroup',
  components: {
    FeCard, FeRadioButton, FeRadioGroup,
  },
  props: {
    search: {
      type: Function,
      default: null,
    },
    formList: {
      type: [Array, Promise],
      default: () => [],
    },
    formInit: {
      type: Object,
      default: () => ({}),
    },
    dateShortcut: {
      type: String,
      default: '',
    },
    dateShortcutDefault: {
      type: Number,
      default: 6,
      validator(val) {
        return [0, 6, 29].includes(val);
      },
    },
    formatOutput: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      localFormList: [],
      form: {},
      // checkboxOptions: [
      //   { label: 'Apple', value: 'Apple' },
      //   { label: 'Pear', value: 'Pear' },
      //   { label: 'Orange', value: 'Orange' },
      // ],
      dateShortcutTime: getLatestDayTimeByNow(this.dateShortcutDefault),
      dateShortcutValue: this.dateShortcutDefault,
      dateShortcutSetting: {
        options: [
          { value: 0, label: '当日' },
          { value: 6, label: '前 7 天' },
          { value: 29, label: '前 30 天' },
        ],
      },
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
          this.form = this.handleFormInit(cloneDeep(this.form), list);
        });
      },
      immediate: true,
    },
    dateShortcutValue: {
      handler(newVal) {
        if (!isNil(newVal) && this.dateShortcut) {
          this.dateShortcutTime = getLatestDayTimeByNow(newVal);
        }
      },
    },
  },
  methods: {
    handleFormInit(form, formList) {
      formList.forEach((item) => {
        if (item?.prop) {
          const { prop, default: defaultValue = null } = item;
          if (!has(form, prop)) {
            form[prop] = has(this.formInit, prop)
              ? this.formInit[prop]
              : defaultValue;
          }
        }
      });
      if (has(form, this.dateShortcut) && !has(this.formInitValue, this.dateShortcut)) {
        this.dateShortcutTime = getLatestDayTimeByNow(this.dateShortcutValue);
      }
      return form;
    },
    handleReset() {
      forOwn(this.form, (value, key) => {
        if (isArray(this.form[key])) {
          this.form[key] = [];
        } else this.form[key] = null;
        this.$refs.Form.clearValidate();
      });
      // 处理 日期热键的初始化问题
      if (this.dateShortcutDefault) {
        this.dateShortcutValue = this.dateShortcutDefault;
        this.dateShortcutTime = getLatestDayTimeByNow(this.dateShortcutDefault);
      }
      this.$emit('reset');
    },
    handleFormOutput(form) {
      const outputForm = cloneDeep(form);
      if (isFunction(this.formatOutput)) return this.formatOutput(outputForm);
      forOwn(outputForm, (value, key) => {
        if (value === '' || value === -1) outputForm[key] = null;
      });
      console.log('check form', form);
      // 將日期混入搜索 params 中
      if (this.dateShortcut) outputForm[this.dateShortcut] = this.dateShortcutTime;
      return outputForm;
    },
    async validate() {
      try {
        await this.$refs.Form.validate();
        this.handleSearch();
      } catch (err) {
        notification.error({
          message: '標題',
          description: '驗證有誤',
        });
      }
    },
    async handleSearch() {
      // 保證 search 正常可用
      if (!isFunction(this.search)) {
        return this.$notify({ type: 'error', message: 'do not have search function' });
      }
      this.$emit('search-start');
      const params = this.handleFormOutput(this.form);
      await this.search(params);
      this.$emit('search-end');
      return null;
    },
    async handleResearch() {
      return new Promise((res) => {
        setTimeout(async () => {
          await this.validate();
          res();
        }, 200);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.fe-search-group {
  margin-top: 10px;
}
</style>
