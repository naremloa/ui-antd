import { Tabs } from 'ant-design-vue';
import FeTabs from './src/index.vue';

export { FeTabs };

const install = (Vue) => {
  Vue.use(Tabs);
  Vue.component('FeTabs', FeTabs);
};
export default install;
