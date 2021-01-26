import { FeCollapse, FeCollapsePanel } from './src';

const install = (Vue) => {
  Vue.component('FeCollapse', FeCollapse);
  Vue.component('FeCollapsePanel', FeCollapsePanel);
};

export default install;
