import { Modal } from 'ant-design-vue';
import FeModal from './src/index.vue';
import modal from './src/Modal';

export { FeModal };

const install = (Vue) => {
  Vue.use(Modal);
  Vue.component('FeModal', FeModal);
  Vue.prototype.$modal = modal;
};
export default install;
