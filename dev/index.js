/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import backstageUi from 'backstage-ui';
import router from './router';
import App from './App.vue';
// import './index.less';
import '../src/styles/index.less';
// /src/styles/

Vue.use(backstageUi);

export default new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
