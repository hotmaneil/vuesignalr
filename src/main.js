/* eslint-disable */
/* eslint prefer-arrow-callback: "error" */
import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';
import FlashMessage from '@smartweb/vue-flash-message';

import 'signalr';

Vue.config.productionTip = false;

Vue.use(FlashMessage);

new Vue({
  router,
  store,
  $,
  render: h => h(App),
}).$mount('#app');
