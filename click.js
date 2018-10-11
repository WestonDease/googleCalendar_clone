var view = 'month'; //Global variable that is necessary for this to work
var viewDate = new Date('July 1, 2019 00:00:00'); //2nd global variable i need 
var divId = 0;


/**
 * REMEMBER TO MOVE THE generateDivs() FUNCTION TO EITHER ANOTHER FILE OR SERVER.JS
 *
 */


const testEventStruct {// this data structure represents the event, to be replaced with database structure
  startDate: new Date('July 4, 2019 12:00:00');
}
/**
 * Retrieve the date represented by the click location(based on the current view) and add it to a new event structure
 * @param {String} divID - the div where the click occured. 
 * @param {String} view - Global variable for current view type. 
 * @param {String} viewDate - Global variable representing the date being viewed. 
 */
const clickItemAdd(divID, view, viewDate) {
  if(view == 'month') {
     var daynum = divId + viewDate.getDay(); // offsets the grid based on the first day of the month's day; april 1st = monday, tues, etc.
     testEventStruct.startDate.setDate(daynum);
     testEventStruct.startDate.setHours(prompt("Hours count goes here");
  }
  if(view == 'week') {
    var daynum = viewDate.getDate() + (divId % 7); //remainder after diving by seven; how many columns across the click happened on
    var hournum = divId / 7; //how many rows down the click happened
    testEventStruct.startDate.setDate(daynum);
    testEventStruct.startDate.setHours(hournum);
  }
  if(view == 'daily') {
    testEventStruct.startDate.setHours(divId);//list is only 1 column in daily view; divId will represent the hours in military time. 
  }
}
/**
 * Create and append the necessary amount of divs for calender the view area 
 * @param {String} view - Global variable for current view type.
 */
const generateDivs(view) {
  var limit = 0;
  if(view == "month") {
    limit = 7 * 5;
  } else if (view == "week") {
    limit = 7 * 24;
  } else if (view == "day") {
    limit = 1 * 24;
  }
  for(i=0; i<limit; i++) {
    $('#calender-view').append(`<div class=/"box ${i}/"></div?`);
  }
}
