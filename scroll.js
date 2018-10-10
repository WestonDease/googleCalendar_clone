var dayOfWeek;
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; //array of the days of the week

//function to get the day of the week based on the date Ex: getDayOfWeek('03', '12', '2013')
const getDayOfWeek = function(month, day, year) {
    var day = new Date(`${month}/${day}/${year}`);
    var dayNum = day.getDay();
    dayOfWeek = days[dayNum];
    return dayOfWeek
};


//today's date and all the parameters of the date and time
var today = new Date(); 
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var todayDayOfWeek = getDayOfWeek(mm, dd, yyyy);

//array of the names of the months and monthName is assigned to current month
const arrMonth = ["","January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
var monthName = arrMonth[mm];

// get the day of week of the first day of the month
var day1MonthDOW = getDayOfWeek(mm ,'01', yyyy);


// var dayTotal = 31;
// if (monthName == "February") { //Assigns month name to variable monthName
//     if (yyyy % 4 == 0) {
//         dayTotal = 29;
//     }
//     else {
//         dayTotal = 28;
//     }
// }
// if (monthName == "April") {
//     dayTotal = 30;
// }
// if (monthName == "June") { 
//     dayTotal = 30;
// }
// if (monthName == "September") {
//     dayTotal = 30;
// }
// if (monthName == "November") {
//     dayTotal = 30;
// }

// var arrDaysOfMonth = [];
// for (let i = 1; i <= dayTotal; i++) {//fill each position in the array with the number of the date
//     arrDaysOfMonth[i] = i;
// }