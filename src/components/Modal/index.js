import { Modal } from 'ant-design-vue';
import FeModal from './src/index.vue';

export { FeModal };

const install = (Vue) => {
  Vue.use(Modal);
  Vue.component('FeModal', FeModal);
};
export default install;
