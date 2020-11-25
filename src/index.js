import FeButton from './components/Button';

const components = {
  FeButton,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    console.log('install', key);
    Vue.component(key, components[key]);
  });
};
const backstageUiAntd = () => {};

backstageUiAntd.install = install;

export default backstageUiAntd;
