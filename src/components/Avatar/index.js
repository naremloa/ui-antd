import { Avatar } from 'ant-design-vue';
import FeAvatar from './src/index.vue';

export { FeAvatar };

const install = (Vue) => {
  Vue.use(Avatar);
  Vue.component('FeAvatar', FeAvatar);
};
export default install;
