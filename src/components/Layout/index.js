import * as Layout from './src';

const install = (Vue) => {
  Object.keys(Layout).forEach((key) => {
    Vue.component(key, Layout[key]);
  });
};

export default install;
