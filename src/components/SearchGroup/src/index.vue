<template>
  <div class="fe-search-group">
    <fe-row
      type="flex"
      justify="end">
      <fe-button
        type="link"
        @click="handleCollpase">
        <template v-if="collapse">
          <fe-icon type="down" />
          展开篩選
        </template>
        <template v-else>
          <fe-icon type="up" />
          收合
        </template>
      </fe-button>
    </fe-row>
    <fe-card :body-style="{padding: '12px 20px', position: 'relative'}">
      <fe-form
        ref="Form"
        :model="form"
        layout="inline"
        :label-col="{}"
        :wrapper-col="{}">
        <div class="search-group">
          <div class="search-group__always-show">
            <template v-if="dateShortcut">
              <shortcut
                ref="DateShortcut"
                :shortcut-default="dateShortcutDefault"
                :label="dateShortcutLabel"
                :type-options="dateShortcutTypeOptions"
                :collapse="collapse" />
            </template>
            <fe-row
              v-if="localFormList && localFormList.length">
              <fe-form-item-setting
                v-for="(item, iIdx) in localFormList"
                :key="`${item.prop || 0} - ${iIdx}`"
                v-model="form[item.prop]"
                v-bind="item" />
            </fe-row>
          </div>

          <div class="search-group__btn-wrapper search-group__btn-wrapper--pc">
            <div
              class="search-btn-wrapper">
              <fe-space>
                <fe-button @click="handleReset">
                  清除條件
                </fe-button>
                <fe-button
                  type="primary"
                  :has-loading="true"
                  @click="validate({ current: 1 })">
                  搜索
                </fe-button>
              </fe-space>
            </div>
          </div>
        </div>

        <transition-collapse>
          <div v-show="!collapse">
            <fe-row class="search-group-more">
              <fe-form-item-setting
                v-for="(item, iIdx) in localHideFormList"
                :key="`${item.prop || 0} - ${iIdx}`"
                v-model="form[item.prop]"
                v-bind="item" />
            </fe-row>
            <!-- 佔位 -->
            <fe-row
              class="pc-show"
              style="margin-top: 4px; height: 32px" />
          </div>
        </transition-collapse>

        <fe-row>
          <div class="search-group__btn-wrapper--mobile">
            <div>
              <fe-space>
                <fe-button @click="handleReset">
                  清除條件
                </fe-button>
                <fe-button
                  type="primary"
                  :has-loading="true"
                  @click="validate">
                  搜索
                </fe-button>
              </fe-space>
            </div>
          </div>
        </fe-row>
      </fe-form>
    </fe-card>
  </div>
</template>
<script>
import {
  isArray, cloneDeep, has, forOwn, isFunction,
} from '@/utils/lodash';
import { notification } from 'ant-design-vue';
import TransitionCollapse from './TransitionCollapse.vue';
import Shortcut from './Shortcut.vue';

export default {
  name: 'FeSearchGroup',
  components: { TransitionCollapse, Shortcut },
  props: {
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
    dateShortcutLabel: {
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
    dateShortcutTypeOptions: {
      type: Array,
      default: () => [],
    },
    formatOutput: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      collapse: false,
      localFormList: [],
      localHideFormList: [],
      form: {},
      formDefault: {},
    };
  },
  computed: {
    collapseState() {
      const w = window.document.body.clientWidth;
      console.log('w--', w);

      if (w < 576) {
        return true;
      }
      return false;
    },
  },
  watch: {
    formList: {
      handler(newVal) {
        Promise.resolve(newVal).then((list) => {
          if (!isArray(list) || list.length === 0) {
            this.localFormList.splice(0);
            this.localHideFormList.splice(0);
            return;
          }
          const [fList, hfList] = cloneDeep(list).reduce((acc, cur) => {
            const [formList, hideFormList] = acc;
            if (cur.hide) hideFormList.push(cur);
            else formList.push(cur);
            return [formList, hideFormList];
          }, [[], []]);
          this.localFormList = fList;
          this.localHideFormList = hfList;
          this.form = this.handleFormInit(cloneDeep(this.form), list);
        });
      },
      immediate: true,
    },
  },
  methods: {
    handleCollpase() {
      this.collapse = !this.collapse;
    },
    handleFormInit(form, formList) {
      const formDefault = {};
      formList.forEach((item) => {
        if (item?.prop) {
          const { prop, default: defaultValue = null } = item;
          if (!has(form, prop)) {
            form[prop] = has(this.formInit, prop)
              ? this.formInit[prop]
              : defaultValue;
          }
          formDefault[prop] = defaultValue;
        }
      });
      this.formDefault = formDefault;
      return form;
    },
    handleReset() {
      // forOwn(this.form, (value, key) => {
      //   if (isArray(this.form[key])) {
      //     this.form[key] = [];
      //   } else this.form[key] = null;
      //   this.$refs.Form.clearValidate();
      // });
      this.form = cloneDeep(this.formDefault);
      this.$refs.Form.clearValidate();
      // 处理 日期热键的初始化问题
      this.$refs.DateShortcut.reset();
      this.$emit('reset');
    },
    handleFormOutput(form) {
      const outputForm = cloneDeep(form || this.form);
      if (isFunction(this.formatOutput)) return this.formatOutput(outputForm);
      forOwn(outputForm, (value, key) => {
        if (value === '' || value === -1) outputForm[key] = null;
      });
      // 將日期混入搜索 params 中
      if (this.dateShortcut) outputForm[this.dateShortcut] = this.$refs.DateShortcut.output();
      return outputForm;
    },
    async validate(params = {}) {
      try {
        await this.$refs.Form.validate();
        this.handleSearch(params);
      } catch (err) {
        notification.error({
          message: '標題',
          description: '驗證有誤',
        });
      }
    },
    async handleSearch(params = {}) {
      const searchData = this.handleFormOutput(this.form) || {};
      const data = { ...searchData, ...params };
      this.$emit('search', data);
    },
    async search(params = {}) {
      return new Promise((res) => {
        setTimeout(async () => {
          await this.validate(params);
          res();
        }, 200);
      });
    },
  },
};
</script>
