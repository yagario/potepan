let startButton;    
let stopButton;     
let resetButton;    
let showTime;       

let timer;              // setinterval, clearTimeoutで使用
let startTime;          // 開始時間
let elapsedTime = 0;    // 経過時間
let holdTime = 0;       

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("timer");
  }

function start(){
    startTime = Date.now();
    measureTime();
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}  

function stop(){
    clearInterval(timer);

    holdTime += (Date.now() - startTime);

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset(){
    clearInterval(timer);

    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00:00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function measureTime() {
    timer = setTimeout(function() {
        elapsedTime = Date.now() - startTime + holdTime;
        showTime.textContent = new Date(elapsedTime).toISOString().slice(11, 22);
        
        measureTime();
    }, 10);
}