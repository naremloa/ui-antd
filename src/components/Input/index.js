import {
  FeInput, FeInputPassword,
} from './src';

const install = (Vue) => {
  Vue.component('FeInput', FeInput);
  Vue.component('FeInputPassword', FeInputPassword);
};

export default install;
