import {
  FeRadioButton,
  FeRadioGroup,
  FeRadio,
} from './src';

const install = (Vue) => {
  Vue.component('FeRadioButton', FeRadioButton);
  Vue.component('FeRadioGroup', FeRadioGroup);
  Vue.component('FeRadio', FeRadio);
};

export default install;
