function timeGetter(slot){
  const date = rawTime('soon') - rawTime('current');

  var hours = String(Math.floor((date%(1000*60*60*24)) / (1000*60*60)));

  var minutes = String(Math.floor((date%(1000*60*60)) / (1000*60)));

  var seconds = String(Math.floor((date%(1000*60)) / 1000));

  if (hours.length == 1){
    hours = "0" + hours;
  }
  if (minutes.length == 1){
    minutes = "0" + minutes;
  }
  if (seconds.length == 1){
    seconds = "0" + seconds;
  }

  if (slot == 'hours') {
    return hours;
  }
  if (slot == 'minutes') {
    return minutes;
  }
  else {
    return seconds;
  }
}
function rawTime(timetarget){
  let date
  if (timetarget == 'current'){
    date = new Date();
  }
  else {
    date = new Date('January 1, 2024 00:00:00');
  }
  return date.getTime();
}

function getTime(){
  document.getElementById("h").innerHTML = timeGetter('hours');
  document.getElementById("m").innerHTML = timeGetter('minutes');
  document.getElementById("s").innerHTML = timeGetter('seconds');
  //console.log(timeGetter('now'));
}
const Interval = 5;

setInterval(getTime,Interval);
