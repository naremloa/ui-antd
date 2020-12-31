import FeCard from '@/components/Card';
import FeForm from '@/components/Form';
import FeSearchGroup from './src/index.vue';

const install = (Vue) => {
  Vue.use(FeForm);
  Vue.use(FeCard);
  Vue.component('FeSearchGroup', FeSearchGroup);
};

export default install;
