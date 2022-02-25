// Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  let hourToMinutes = h * 60;
  let minuteToSeconds = (hourToMinutes + m) * 60;
  let totalSeconds = minuteToSeconds + s;
  let milliseconds = totalSeconds * 1000;
  return milliseconds;
}

console.log(past(0, 1, 1));
