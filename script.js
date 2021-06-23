
let seconds = 00;
let minutes = 00;
let hours = 00;

const appendSeconds = document.getElementById("seconds") 
const appendMinutes = document.getElementById("minutes")
const appendHours = document.getElementById("hours")

const startButton = document.getElementById("button-start")
const stopButton = document.getElementById("button-stop")
const restartButton = document.getElementById("button-restart")

let interval;

startButton.onclick = function () {

    clearInterval(interval);
    interval = setInterval(startTimer, 1000)
}

stopButton.onclick = function() {
    clearInterval(interval);
}


restartButton.onclick = function() {
  clearInterval(interval);
   seconds = "00";
   minutes = "00";
   hours = "00";
   appendSeconds.innerHTML = seconds;
   appendMinutes.innerHTML = minutes;
   appendHours.innerHTML = hours;
}

function startTimer () {
    seconds++; 
    
    if(seconds <= 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
      }     
    
    if (seconds > 59) {
      console.log("seconds");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      if (minutes> 9){
        appendMinutes.innerHTML = minutes; 
      }
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (minutes == 59 && seconds ==59){
      hours++;
      appendHours.innerHTML = "0" + hours;
      if(hours<9){
        appendHours.innerHTML = hours; 
      }
      minutes = 0;
    }
  
  }







