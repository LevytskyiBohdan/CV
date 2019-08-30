let data = document.querySelector('.data');
let time = document.querySelector('.time');


setInterval(() => {
    let newD = new Date();
    let hh = newD.getHours();
    let mm = newD.getMinutes();
    let ss = newD.getSeconds();
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;
    time.innerHTML = `${hh}:${mm}:${ss}`;
})

function dataF() {
    let d = new Date();
    data.innerHTML = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

dataF();

setInterval(function () {
    dataF();
}, 86399999);


let stopwatch = document.querySelector('.stopwatch');
let start = document.querySelector('button[value=start]');
let loop = document.querySelector('button[value=loop]');
let stop = document.querySelector('button[value=stop]');
let reset = document.querySelector('button[value=reset]');
let loopText = document.querySelector('.loop');
console.log(stopwatch, start, loop, stop, reset)

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

start.addEventListener('click', function () {
    ms++;
    let interval = setInterval(function () {
        let hStr = String(h);
        let mStr = String(m);
        let sStr = String(s);
        let msStr = String(ms);
        if (h < 10 && hStr.length == 1) h = "0" + h;
        if (m < 10 && mStr.length == 1) m = "0" + m;
        if (s < 10 && sStr.length == 1) s = "0" + s;
        if (ms < 100 && msStr.length == 1) ms = "0" + ms;
        // if (ms < 100 && msStr.length == 1) ms = "00" + ms;
        stopwatch.innerHTML = `${h}:${m}:${s}:${ms}`;
        ms++;
        if (ms >= 100) {
            ms = 0;
            s++;
            if (s >= 60) {
                s = 0;
                m++;
                if (m >= 60) {
                    m = 0;
                    h++;
                }
            }
        }

    }, 10);
    stop.addEventListener('click', function () {
        clearInterval(interval);
    })
    reset.addEventListener('click', function () {
        clearInterval(interval);
        h = 0;
        m = 0;
        s = 0;
        ms = 0;
        stopwatch.innerHTML = '00:00:00:000'
        for (let i = 0; i < loopText.children.length; i++) {
            loopText.removeChild(loopText.children[i]);
            console.log(loopText.children);
        }
    })
})
loop.addEventListener('click', function () {
    let pT = document.createElement('p');
    pT.innerHTML = stopwatch.innerHTML;
    loopText.appendChild(pT);
})


let minuteTim = document.querySelector('.minute');
let plusTim = document.querySelector('.plus');
let minusTim = document.querySelector('.minus');
let timer = document.querySelector('.timer');
let startTim = document.querySelector('button[name=start]');
let stopTim = document.querySelector('button[name=stop]');
let resetTim = document.querySelector('button[name=reset]');
let timBull = true;
let intervalTim;
console.log(timer);
let seconds = 59;
let minute = minuteTim.innerHTML - 1;
function timTime(){
    seconds = 59;
    minute = minuteTim.innerHTML - 1;
}

startTim.addEventListener('click', function () {
    if (timBull){

        console.log(minute)
        intervalTim = setInterval(function () {
            let minuteStr = String(minute);
            let secondsStr = String(seconds);
            if (minute < 10 && minuteStr.length == 1) minute = "0" + minute;
            if (seconds < 10 && secondsStr.length == 1) seconds = "0" + seconds;
            timer.innerHTML = `${minute}:${seconds}`;
            seconds--;
            if (seconds==0&&minute==0){
                clearInterval(intervalTim);
                time.innerHTML = '00:00';
                alert('Time is out');
            }
            if (seconds <= 0) {
                seconds = 60;
                minute--;
            }
        }, 1000)
        timBull = false;
    }
    resetTim.addEventListener('click', function () {
        timer.innerHTML = '00:00';
        clearInterval(intervalTim);
        console.log('reset')
        timBull = true;
        timTime();
    })
    stopTim.addEventListener('click', function () {
        clearInterval(intervalTim);
        timBull = true;
    })
})
plusTim.addEventListener('click', function () {
    if (parseInt(minuteTim.innerHTML)<60){
        minuteTim.innerHTML = parseInt(minuteTim.innerHTML) + 1;
    }
    timTime();
})
minusTim.addEventListener('click', function () {
    if (parseInt(minuteTim.innerHTML)>0){
        minuteTim.innerHTML = parseInt(minuteTim.innerHTML) - 1;
    }
    timTime();
})