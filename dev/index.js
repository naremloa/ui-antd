/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import backstageUi from 'backstage-ui';
import App from './App.vue';

Vue.use(backstageUi);

export default new Vue({
  render: (h) => h(App),
}).$mount('#app');
