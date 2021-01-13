import FeMenu from './src/index.vue';
import Icon from '../Icon';

const install = (Vue) => {
  Vue.use(Icon);
  Vue.component('FeMenu', FeMenu);
};

export default install;
