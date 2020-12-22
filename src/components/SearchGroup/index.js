import FeSearchGroup from './src/index.vue';
import FeForm from '../Form';

const install = (Vue) => {
  Vue.use(FeForm);
  Vue.component('FeSearchGroup', FeSearchGroup);
};

export default install;
