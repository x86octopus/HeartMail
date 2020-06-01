import { getMinuteHeartData } from "./fitbit.js";
import moment from "moment";

const msPerMin = 60 * 1000;
const delay = 30 * msPerMin;
const updatePeriodMs = 15 * msPerMin;
const longAgo = moment("2000-01-01");

function update() {
  return getMinuteHeartData(moment().subtract(delay, "ms"), moment()).then(
    (data) => {
      console.log(data);
      const lastBeat = beats.length ? beats[beats.length - 1] : longAgo;
      const newBeats = minuteRateToBeats(
        data.filter((x) => lastBeat <= x.time)
      );
      beats = beats.concat(newBeats);

      if (nextTimeout == null && beats.length) {
        animateAndSchedule();
      }
    }
  );
}

export function beatToTimeout(beat) {
  return beat.valueOf() + delay - moment().valueOf();
}

function animateAndSchedule() {
  heartData.animate();
  var next;
  if (beats.length) {
    next = beatToTimeout(beats.shift());
    while (next < 0 && beats.length) {
      next = beatToTimeout(beats.shift());
    }
    if (next != null && next >= 0) {
      nextTimeout = setTimeout(animateAndSchedule, next);
    }
  }
}

var nextTimeout;
var updateInterval;
var beats = [];

export const heartData = {
  beats: () => beats.map((x) => moment(x)), //strangely, map(moment) errors
  animate: null,
  start: function(animateBeat) {
    this.animate = animateBeat;
    update();
    updateInterval = setInterval(update, updatePeriodMs);
  },
  stop: function() {
    clearInterval(updateInterval);
    updateInterval = null;

    clearTimeout(nextTimeout);
    nextTimeout = null;
  },
};

function minuteRateToBeats(rateTimeseries) {
  const events = [];
  rateTimeseries.forEach((point) => {
    const start = point.time;
    const msPerBeat = (msPerMin / point.rate) | 0; //truncate to int
    for (var intoMin = msPerBeat; intoMin <= msPerMin; intoMin += msPerBeat) {
      events.push(moment(start).add(intoMin, "ms"));
    }
  });
  return events;
}
