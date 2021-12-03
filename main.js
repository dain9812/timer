'use strict';

const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resettBtn');
const timer = document.querySelector('.time-area');

let time = 0;
let running = true;

const startTimer = () => {
  if (running == true) {
    updateTime();
  } else {
    pauseTime();
  }
}

const updateTime = () => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time % 3600 / 60);
  let seconds = time % 3600 % 60;
  timer.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  time++;
  console.log(timer);
}