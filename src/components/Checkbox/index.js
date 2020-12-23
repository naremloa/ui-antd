import { FeCheckboxGroup, FeCheckbox, FeCheckboxAll } from './src';

const install = (Vue) => {
  Vue.component('FeCheckboxGroup', FeCheckboxGroup);
  Vue.component('FeCheckbox', FeCheckbox);
  Vue.component('FeCheckboxAll', FeCheckboxAll);
};

export default install;
