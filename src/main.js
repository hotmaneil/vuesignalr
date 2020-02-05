/* eslint-disable */
/* eslint prefer-arrow-callback: "error" */
import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';
import FlashMessage from '@smartweb/vue-flash-message';

import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'signalr';

Vue.config.productionTip = false;

Vue.use(FlashMessage);
Vue.use(HighchartsVue);
Vue.use(VueAxios, axios);

/**因為 axios 預設是發送請求的時候不會帶上 cookie 的，需要通過設置 withCredentials: true */
axios.defaults.withCredentials = false;

new Vue({
  router,
  store,
  $,
  render: h => h(App),
}).$mount('#app');
