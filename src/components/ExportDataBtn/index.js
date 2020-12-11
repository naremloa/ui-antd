import { Button } from 'ant-design-vue';
import FeExportDataBtn from './src/index.vue';

export { FeExportDataBtn };

const install = (Vue) => {
  Vue.use(Button);
  Vue.component('FeExportDataBtn', FeExportDataBtn);
};
export default install;
