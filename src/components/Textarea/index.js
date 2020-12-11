import { Input } from 'ant-design-vue';
import FeTextarea from './src/index.vue';

export { FeTextarea };

const install = (Vue) => {
  Vue.use(Input);
  Vue.component('FeTextarea', FeTextarea);
};
export default install;
