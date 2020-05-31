import { getMinuteHeartData } from "./fitbit.js";
import moment from "moment";

const msPerMin = 60*1000
const delay = 30*msPerMin
const updatePeriodMs = 15*msPerMin
const longAgo = moment('2000-01-01')

function update() {
  getMinuteHeartData(moment().subtract(delay), moment()).then((data) => {
    console.log(data);
    const beats = heartData.beats;
    const lastBeat = beats.length ? beats[beats.length - 1]: longAgo;
    const newBeats = minuteRateToBeats(
      data.filter((x) => lastBeat <= x.time))
    heartData.beats = beats.concat(newBeats)
  });
}
export const heartData = {
  beats: [],
  updateInterval: null,
  getMostRecentBefore() {
    return 65;
  },
  start: function() {
    update();
    this.updateInterval = setInterval(update, updatePeriodMs);
  },
  stop: function() {
    clearInterval(this.updateInterval);
  },
};

function minuteRateToBeats(rateTimeseries){
  const events = [];
  rateTimeseries.forEach((point) => {
    const start = point.time;
    const msPerBeat = msPerMin/point.rate | 0 //truncate to int
    for(var intoMin = msPerBeat; intoMin <= msPerMin; intoMin += msPerBeat){
      events.push(moment(start).add(intoMin, 'ms'));
    }
  });
  return events;
}
