import FeBreadcrumb from './src/index.vue';
import Icon from '../Icon';

const install = (Vue) => {
  Vue.use(Icon);
  Vue.component('FeBreadcrumb', FeBreadcrumb);
};

export default install;
