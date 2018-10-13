$(function () {


let dayOfWeek;
let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; //array of the days of the week

//function to get the day of the week based on the date Ex: getNumberDayOfWeek('03', '12', '2013')

const getNumberDayOfWeek = function(month, day, year) {
    var day = new Date(`${month}/${day}/${year}`);
    let dayNum = day.getDay();
    return dayNum+1;
};

//render function using ajax
// const render = function() {
//     $('.box').empty();
//     $.ajax({ url: '/api/calendar', method: 'GET' })
//           .then(function (data) {
//               let htmlstr = '';
//               data.forEach(element => {
//                 htmlstr += `<h5 class="card-title">${element.content}</h5>`;
//                 htmlstr += `<i id="xButton" class="fas fa-times"></i>`;
//                 htmlstr += `</div>`;
//               });
//               $('#holder').html(htmlstr);
//           })
//           .catch(function (err) {
//               console.log(err);
//           });
// }

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

//loop to fill in the rest of the week
let z = 0; //counter variable that holds the value of a date
for (let i = todayNumberDayOfWeek+1; i <= 7; i++) {
    let diff = i - todayNumberDayOfWeek;
    if (dd+diff < arrDayTotal[mm]) {
        $(`.date${diff+todayNumberDayOfWeek}`).html(`${dd+diff}`);
    }
    else {
        z = z + 1;
        $(`.date${diff+todayNumberDayOfWeek}`).html(`${z}`);
    }
}

z = arrDayTotal[mm-1] + 1;
for (let i = todayNumberDayOfWeek-1; i >= 1; i--) {
    let diff = todayNumberDayOfWeek - i;
    if (dd+diff > 0) {
        $(`.date${todayNumberDayOfWeek-diff}`).html(`${dd-diff}`);
    }
    else {
        z = z - 1;
        $(`.date${diff+todayNumberDayOfWeek}`).html(`${z}`);
    }
}


 //function to run when right arrow is clicked
$('#arrowright').on('click', function (event) {
    event.preventDefault();
    dd = dd + 7;
    $(`.date${todayNumberDayOfWeek}`).html(`${dd}`);
    z = 0;
    for (let i = todayNumberDayOfWeek+1; i <= 7; i++) {
        let diff = i - todayNumberDayOfWeek;
        if ((dd+diff) < arrDayTotal[mm]) {
            $(`.date${diff+todayNumberDayOfWeek}`).html(`${dd+diff}`);
        }
        else {
            z = z + 1;
            $(`.date${diff+todayNumberDayOfWeek}`).html(`${z}`);
        }
    }
    z = 0;
    for (let i = 1; i <= todayNumberDayOfWeek; i++) {
        let diff = todayNumberDayOfWeek - i;
        if (dd-diff <= arrDayTotal[mm]) {
            $(`.date${todayNumberDayOfWeek-diff}`).html(`${dd-diff}`);
        }
        else {
            z = z + 1;
            $(`.date${todayNumberDayOfWeek-diff}`).html(`${z}`);
            mm = mm + 1;
        }
    }

});

//function to run when left arrow is clicked
$('#arrowleft').on('click', function (event) {
    event.preventDefault();
    dd = dd - 7;
    $(`.date${todayNumberDayOfWeek}`).html(`${dd}`);
    for (let i = todayNumberDayOfWeek+1; i <= 7; i++) {
        let diff = i - todayNumberDayOfWeek;
        if (dd+diff < arrDayTotal[mm]) {
            $(`.date${diff+todayNumberDayOfWeek}`).html(`${dd+diff}`);
        }
        else {
            z = z + 1;
            $(`.date${diff+todayNumberDayOfWeek}`).html(`${z}`);
        }
    }
    z = arrDayTotal[mm-1] + 1;
    for (let i = 1; i <= todayNumberDayOfWeek; i++) {
        let diff = todayNumberDayOfWeek - i;
        if (dd-diff > 0) {
            $(`.date${todayNumberDayOfWeek-diff}`).html(`${dd-diff}`);
        }
        else {
            z = z - 1;
            $(`.date${todayNumberDayOfWeek-diff}`).html(`${z}`);
        }
    }
});

// get the day of week of the first day of the month
let day1MonthDOW = getNumberDayOfWeek(mm ,'01', yyyy);

});