import { Tooltip } from 'ant-design-vue';
import FeTooltip from './src/index.vue';

export { FeTooltip };

const install = (Vue) => {
  Vue.use(Tooltip);
  Vue.component('FeTooltip', FeTooltip);
};
export default install;
