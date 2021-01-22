import { Modal } from 'ant-design-vue';
import FeModal from './src/index.vue';
import modal from './src/Modal';
import errorMessage from './src/ErrorMessage';

export { FeModal };

const install = (Vue) => {
  Vue.use(Modal);
  Vue.component('FeModal', FeModal);
  Vue.prototype.$modal = modal;
  Vue.prototype.$errorMessage = errorMessage;
};
export default install;
