$(function () {


let dayOfWeek;
let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; //array of the days of the week

//function to get the day of the week based on the date Ex: getNumberDayOfWeek('03', '12', '2013')

const getNumberDayOfWeek = function(month, day, year) {
    var day = new Date(`${month}/${day}/${year}`);
    let dayNum = day.getDay();
    return dayNum+1;
};

//today's date and all the parameters of the date and time
let today = new Date(); 
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
let todayNumberDayOfWeek = getNumberDayOfWeek(mm, dd, yyyy);

//array of the names of the months and monthName is assigned to current month
const arrMonth = ["","January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
let monthName = arrMonth[mm];
const arrDayTotal = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//fills in empty html objects
$('.month').html(`${monthName}`);
$('.year').html(`${yyyy}`);
$(`.date${todayNumberDayOfWeek}`).html(`${dd}`);
let ddToday = dd;


//loop to fill in the rest of the first week
const arr17 = [1, 2, 3, 4, 5, 6, 7];
const arrLoopUp = arr17.filter(e => e > todayNumberDayOfWeek); //gets days of the week to the right of today

let z = 0;
arrLoopUp.forEach(function(element) {
    let diff = element - todayNumberDayOfWeek;
    if (dd+diff < arrDayTotal[mm]) {
        $(`.date${diff+todayNumberDayOfWeek}`).html(`${dd+diff}`);
    }
    else {//new month has started
        z = z + 1;
        $(`.date${diff+todayNumberDayOfWeek}`).html(`${z}`);
    }
});

const arrLoopDown = arr17.filter(e => e < todayNumberDayOfWeek); //gets days of the week to the left of today

z = arrDayTotal[mm-1] + 1;
arrLoopDown.forEach(function(element) {
    let diff = todayNumberDayOfWeek - element;
    if (dd+diff > 0) {
        $(`.date${element}`).html(`${dd-diff}`);
    }
    else {//previous month
        z = z - 1;
        $(`.date${diff+todayNumberDayOfWeek}`).html(`${z}`);
    }
});

$(`.date${todayNumberDayOfWeek}`)[0].style.color = "blue"; //today's date is blue

 //function to run when right arrow is clicked
$('#arrowright').on('click', function (event) {
    event.preventDefault();

    dd = dd + 7; //next week
    if (dd > arrDayTotal[mm]) {//handles month and year crossovers
        dd = dd - arrDayTotal[mm];
        mm = mm + 1;
        if (mm == 13) {
            yyyy = yyyy + 1;
            $('.year').html(`${yyyy}`);
            mm = 1;
            monthName = arrMonth[mm];
            $('.month').html(`${monthName}`);
        }
        else {
            monthName = arrMonth[mm];
            $('.month').html(`${monthName}`);
        }
    }
    $(`.date${todayNumberDayOfWeek}`).html(`${dd}`);

    z = 0;
    arrLoopUp.forEach(function(element) {
        let diff = element - todayNumberDayOfWeek;
        if ((dd+diff) <= arrDayTotal[mm]) {
            $(`.date${element}`).html(`${dd+diff}`);
        }
        else {
            z = z + 1;
            $(`.date${element}`).html(`${z}`);
        }
    });
        
    z = 0;
    arrLoopDown.forEach(function(element) {
        let diff = todayNumberDayOfWeek - element;
        if (dd-diff <= arrDayTotal[mm]) {
            $(`.date${element}`).html(`${dd-diff}`);
        }
        else {
            z = z + 1;
            $(`.date${element}`).html(`${z}`);
        }
    });
        
    arr17.forEach(function(element) {
        if ($(`.date${element}`).html()<=0) {
            let x = $(`.date${element}`).html();
            $(`.date${element}`).html(parseFloat(x)+parseFloat(arrDayTotal[1]));
            
        }
        if (parseFloat($(`.date${todayNumberDayOfWeek}`).html())==(ddToday)) {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "blue";
        }
        else {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "black";
        }
    });
});
//function to run when left arrow is clicked
$('#arrowleft').on('click', function (event) {
    event.preventDefault();

    dd = dd - 7;//next week
    if (dd <= 0) {//handles month and year crossovers
        mm = mm - 1;
        dd = arrDayTotal[mm] + dd;
        if (mm == 0) {
            yyyy = yyyy - 1;
            $('.year').html(`${yyyy}`);
            mm = 12;
            dd = arrDayTotal[mm] + dd;
        }
            monthName = arrMonth[mm];
            $('.month').html(`${monthName}`);
    }

    $(`.date${todayNumberDayOfWeek}`).html(`${dd}`);
    z = 0;
    arrLoopUp.forEach(function(element) {
        let diff = element - todayNumberDayOfWeek;
        if (dd+diff <= arrDayTotal[mm]) {
            $(`.date${element}`).html(`${dd+diff}`);
        }
        else {
            z = z + 1;
            $(`.date${element}`).html(`${z}`);
        }
    });

    z = arrDayTotal[mm-1] + 1;
    arrLoopDown.forEach(function(element) {
        let diff = todayNumberDayOfWeek - element;
        if (dd-diff > 0) {
            $(`.date${element}`).html(`${dd-diff}`);
        }
        else {
            z = z - 1;
            $(`.date${element}`).html(`${z}`);
        }
    });

    arr17.forEach(function(element) {
        if ($(`.date${element}`).html()<=0) {
            let x = $(`.date${element}`).html();
            $(`.date${element}`).html(parseFloat(x)+parseFloat(arrDayTotal[1]));
        }
        if (parseFloat($(`.date${todayNumberDayOfWeek}`).html())==(ddToday)) {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "blue";
        }
        else {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "black";
        }
    });

});


});