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
let ddToday = dd;


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
$(`.date${todayNumberDayOfWeek}`)[0].style.color = "blue"; //today's date is blue
 //function to run when right arrow is clicked
$('#arrowright').on('click', function (event) {
    event.preventDefault();
    dd = dd + 7;
    if (dd > arrDayTotal[mm]) {
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
    for (let i = todayNumberDayOfWeek+1; i <= 7; i++) {
        let diff = i - todayNumberDayOfWeek;
        if ((dd+diff) <= arrDayTotal[mm]) {
            $(`.date${i}`).html(`${dd+diff}`);
        }
        else {
            z = z + 1;
            $(`.date${i}`).html(`${z}`);
        }
    }
    z = 0;
    for (let i = 1; i <= todayNumberDayOfWeek; i++) {
        let diff = todayNumberDayOfWeek - i;
        if (dd-diff <= arrDayTotal[mm]) {
            $(`.date${i}`).html(`${dd-diff}`);
        }
        else {
            z = z + 1;
            $(`.date${i}`).html(`${z}`);
        }
    }
    for (let i = 1; i <= 7; i++) {
        if ($(`.date${i}`).html()<=0) {
            let x = $(`.date${i}`).html();
            $(`.date${i}`).html(parseFloat(x)+parseFloat(arrDayTotal[1]));
            
        }
        if (parseFloat($(`.date5`).html())==(ddToday)) {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "blue"; //colors today blue
        }
        else {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "gray";
        }
    }
});
//function to run when left arrow is clicked
$('#arrowleft').on('click', function (event) {
    event.preventDefault();
    dd = dd - 7;
    if (dd <= 0) {
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
    for (let i = todayNumberDayOfWeek+1; i <= 7; i++) {
        let diff = i - todayNumberDayOfWeek;
        if (dd+diff <= arrDayTotal[mm]) {
            $(`.date${i}`).html(`${dd+diff}`);
        }
        else {
            z = z + 1;
            $(`.date${i}`).html(`${z}`);
        }
    }
    z = arrDayTotal[mm-1] + 1;
    for (let i = 1; i <= todayNumberDayOfWeek; i++) {
        let diff = todayNumberDayOfWeek - i;
        if (dd-diff > 0) {
            $(`.date${i}`).html(`${dd-diff}`);
        }
        else {
            z = z - 1;
            $(`.date${i}`).html(`${z}`);
        }
    }
    for (let i = 1; i <= 7; i++) {
        if ($(`.date${i}`).html()<=0) {
            let x = $(`.date${i}`).html();
            $(`.date${i}`).html(parseFloat(x)+parseFloat(arrDayTotal[1]));
        }
        if (parseFloat($(`.date5`).html())==(ddToday)) {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "blue";
        }
        else {
            $(`.date${todayNumberDayOfWeek}`)[0].style.color = "gray"; 
        }
    }

});


});