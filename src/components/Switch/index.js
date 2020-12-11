import { Switch } from 'ant-design-vue';
import FeSwitch from './src/index.vue';

export { FeSwitch };

const install = (Vue) => {
  Vue.use(Switch);
  Vue.component('FeSwitch', FeSwitch);
};
export default install;
