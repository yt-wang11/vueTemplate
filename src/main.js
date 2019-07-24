// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import WinDesign from 'win-design';
import 'win-design/lib/themes/default.css';
import 'win-design/lib/themes/fonts/iconx';
import App from './App';
import router from './router';

Vue.use(WinDesign);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
