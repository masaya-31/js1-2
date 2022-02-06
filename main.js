"use strict";

const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop  = document.getElementById("stop");
const reset = document.getElementById("reset");

let hour = 0;
let min  = 0;
let sec  = 0;
let msec = 0;

let interval;

function stopWatch() {
  msec ++;
  if(msec / 10 == 1) {
  sec ++;
  msec = 0;
  if(sec / 60 == 1) {
  min ++;
  sec = 0;
  if(min / 60 == 1) {
  hour ++;
  min = 0;
  }}}
   timer.innerHTML = hour + ":" + min + ":" + sec + ":" + msec;
}

start.addEventListener("mousedown", function(){
  interval = setInterval(stopWatch, 100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  });

stop.addEventListener("mousedown", function(){
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  });

reset.addEventListener("mousedown", function() {
    clearInterval(interval);
    timer.innerHTML = "0:0:0:0";
     hour = 0;
     min = 0;
     sec = 0;
     msec = 0;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});