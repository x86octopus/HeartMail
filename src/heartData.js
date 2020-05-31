import { getHeartData } from "./fitbit.js";
import moment from "moment";

var heartData = {
  values: [],
  intervalId: null,
  getMostRecentBefore(datetime) {
    return 65;
  },
  start: function() {
    this.update();
    this.intervalId = setInterval(this.update, 300000);
  },
  stop: function() {
    clearInterval(this.intervalId);
  },
  update: function() {
    getHeartData(moment().subtract(40, "minutes"), moment()).then((data) => {
      console.log(data);
      this.values = data;
    });
  },
};

export { heartData };
