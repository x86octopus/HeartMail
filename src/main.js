import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import { getMinuteHeartData } from "./fitbit.js";
import moment from "moment";

import { heartData } from "./heartData";
window.heartData = heartData;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

window.getHeartData = getMinuteHeartData;
window.moment = moment;
