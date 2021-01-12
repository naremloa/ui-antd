// 獨立使用 DatePicker 沒有引入 Input，會報錯
// vue.esm.js:628 [Vue warn]: Failed to resolve directive: ant-input
import { Input } from 'ant-design-vue';

import {
  FeDatePicker,
  FeRangePicker,
} from './src';

const install = (Vue) => {
  Vue.use(Input);
  Vue.component('FeDatePicker', FeDatePicker);
  Vue.component('FeRangePicker', FeRangePicker);
};

export default install;
