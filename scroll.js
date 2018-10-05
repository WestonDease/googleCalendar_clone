var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const arrMonth = ["","January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
var monthName = arrMonth[mm];

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dayNum = today.getDay();
var dayOfWeek = days[dayNum];

var dayTotal = 31;

if (monthName == "February") {
    if (yyyy % 4 == 0) {
        dayTotal = 29;
    }
    else {
        dayTotal = 28;
    }
}
if (monthName == "April") {
    dayTotal = 30;
}
if (monthName == "June") {
    dayTotal = 30;
}
if (monthName == "September") {
    dayTotal = 30;
}
if (monthName == "November") {
    dayTotal = 30;
}

var arrDaysOfMonth = [];
for (let i = 1; i <= dayTotal; i++) {
    arrDaysOfMonth[i] = i;
}
arrDaysOfMonth[dd] = dayofWeek;
var dayWeekCount = dayNum;
for (let i = dd + 1; i <= dayTotal; i++) {
    if (dayWeekCount != 6) {
        dayWeekCount += 1;
    }
    else {
        dayWeekCount = 0;
    }
    arrDaysOfMonth[i] = days[dayWeekCount];
}

var dayWeekCount = dayNum;
for (let i = dd - 1; i >= 0; i--) {
    if (dayWeekCount != 6) {
        dayWeekCount -= 1;
    }
    else {
        dayWeekCount = 6;
    }
    arrDaysOfMonth[i] = days[dayWeekCount];
}