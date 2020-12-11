import { Dropdown } from 'ant-design-vue';
import FeDropdown from './src/index.vue';

export { FeDropdown };

const install = (Vue) => {
  Vue.use(Dropdown);
  Vue.component('FeDropdown', FeDropdown);
};
export default install;
