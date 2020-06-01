import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import moment from "moment";
import { heartData } from "./heartData";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

window.heartData = heartData;
window.moment = moment;
