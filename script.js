"use strict";
window.addEventListener("DOMContentLoaded", start);

const countingArray = [];
let counter;

start();

function start() {
  console.log("start");
  counter = -1;

  startCounter();
}

function startCounter() {
  console.log(
    "%cCounting Array",
    "color: hotpink; font-weight: bold; font-size: 2rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);"
  );

  counter++;

  countingArray.unshift(counter);
  console.log(countingArray);

  if (counter > 8) {
    countingArray.length = 8;
    setTimeout(startCounter, 1000);
  } else {
    setTimeout(startCounter, 1000);
  }
}
