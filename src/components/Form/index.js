import { FeForm, FeFormItem, FeFormItemSetting } from './src';

const install = (Vue) => {
  Vue.component('FeForm', FeForm);
  Vue.component('FeFormItem', FeFormItem);
  Vue.component('FeFormItemSetting', FeFormItemSetting);
};

export default install;
