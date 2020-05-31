import moment from "moment";

//Quqting Fitbit API doccs:
//   All date and time related fields in the API requests and responses are
//   rendered in the local time of the resource owner's timezone
//Fuck you Fitbit for not using UTC like a sane person
import "moment-timezone";

//Token lasts 30 days. The personal app owner (adam) can obtain a new token
// at https://dev.fitbit.com/apps/oauthinteractivetutorial
// Client ID: 22BMF2
// Recommended expire time: 2592000 (30 days)
// Scopes: heartrate, settings (for battery)
//const token =
//  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkJNRjIiLCJzdWIiOiI4OVA4TDgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyaHIgcnNldCIsImV4cCI6MTU5MzQ3MzczMSwiaWF0IjoxNTkwODgxNzMxfQ.AW776Z2qRquBqeO-KiECQGxXl2PJm5Eml9N6Cwc-EhI";
const token = process.env.VUE_APP_FITBIT_TOKEN;
console.log(token);

const site = "https://api.fitbit.com";
const heartEndpoint = "/1/user/-/activities/heart";

export function heartUrl(start, end) {
  return (
    site +
    heartEndpoint +
    `/date/${start.format("YYYY-MM-DD")}/${end.format("YYYY-MM-DD")}/1min` +
    `/time/${start.format("HH:mm")}/${end.format("HH:mm")}.json`
  );
}

function jsonToTimeSeries(start) {
  return function(json) {
    console.log(json);
    const date = start.startOf("day");
    const hrData = json["activities-heart-intraday"]["dataset"];
    const ts = Array(hrData.length);
    var prevMo;
    for (var i = 0; i < hrData.length; i++) {
      const thisMo = moment(date).add(moment.duration(hrData[i]["time"]));
      if (prevMo && thisMo < prevMo) {
        // day has changed over
        date.add(1, "d");
        thisMo.add(1, "d");
      }
      ts[i] = { time: thisMo, rate: hrData[i]["value"] };
      prevMo = thisMo;
    }
    return ts;
  };
}

export function getMinuteHeartData(start, end) {
  const startMo = moment.tz(start, "America/Los_Angeles");
  const endMo = moment(end, "America/Los_Angeles");
  return fetch(heartUrl(moment(startMo), moment(endMo)), {
    headers: new Headers({ Authorization: "Bearer " + token }),
    mode: "cors",
    method: "GET",
  })
    .then((res) => res.json())
    .then(jsonToTimeSeries(startMo));
}
