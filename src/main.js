/* eslint-disable */
/* eslint prefer-arrow-callback: "error" */
import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';

import 'signalr';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  $,
  render: h => h(App),
}).$mount('#app');
