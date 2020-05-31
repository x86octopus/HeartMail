import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import {getHeartData} from './fitbit.js';
import moment from 'moment'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

window.getHeartData = getHeartData
window.moment = moment
