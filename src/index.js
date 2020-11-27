import 'ant-design-vue/dist/antd.css';
import FeButton from './components/Button';
import FeLayout from './components/Layout';
import FeLayoutHeader from './components/LayoutHeader';
import FeLayoutContent from './components/LayoutContent';
import FeLayoutSider from './components/LayoutSider';
import FeLayoutFooter from './components/LayoutFooter';
import FeMenu from './components/Menu';

const components = {
  FeButton,
  FeLayout,
  FeLayoutContent,
  FeLayoutFooter,
  FeLayoutHeader,
  FeLayoutSider,
  FeMenu,
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
