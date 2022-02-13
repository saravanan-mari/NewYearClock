const newYears = "1 Jan 2023"
const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minE = document.getElementById('mins');
const secE = document.getElementById('sec');

function countdoun() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    
    daysE.innerHTML = days;
    hoursE.innerHTML = formatTime(hours);
    minE.innerHTML = formatTime(minutes);
    secE.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time ;
}
countdoun();



setInterval(countdoun , 1000);