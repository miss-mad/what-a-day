// Creates the variable today to retrieve the current day of the week, month, day of the month, and year using moment.js, then displays that info using jQuery by matching it to the same HTML ID
var today = moment();
$("#currentDay").text("Today is: " + today.format("dddd, MMMM Do, YYYY"));

var now = moment().hour();
console.log(now);

var eventDetails = $(".form-control");
console.log(eventDetails);

// var scheduledHourMorning = document.getElementsByClassName("hour-morn");
// scheduledHourMorning.split("AM");

// var scheduledHourAfternoon = document.getElementsByClassName("hour-aft");
// scheduledHourAfternoon.split("PM");

// var both = scheduledHourMorning + scheduledHourAfternoon;
// console.log(both);

// don't need morn and aft - retrieve with hour id in parent div in html
// var scheduledHour = $("#time8").attr("id").split("time").pop();
// var scheduledHourString = scheduledHour.toString();
// var scheduledHourStringSplit = scheduledHourString.split(",")
// var scheduledHourNumber = scheduledHourString.split("time");
// console.log(scheduledHour);
// console.log(scheduledHourString);
// console.log(scheduledHourStringSplit);
// console.log(scheduledHourNumber);

var eventBackgroundColor = $("textarea");

$(".row").each(function () {
  var scheduledHour = $(this).attr("id").split("time").pop();
  console.log(scheduledHour);

  if (scheduledHour < now) {
    console.log("This is in the past");
    eventBackgroundColor.addClass("past");
  } else if (scheduledHour === now) {
    console.log("This is the current hour");
    eventBackgroundColor.addClass("present");
  } else {
    console.log("This is in the future");
    eventBackgroundColor.addClass("future");
  }
});

// returns array of divs with form control class
// console.log("eventBackgroundColor: ", eventBackgroundColor);

// for loop instead to iterate over the textareas (array indexing [])
// i -> so that if else statement can reference i for background color

// for (var i = 0; i < eventDetails.length; i++) {
//   console.log("this works 11 times");

//   if (scheduledHour < now) {
//     console.log("This is in the past");
//     // eventBackgroundColor[i].addClass("past");
//   } else if (scheduledHour === now) {
//     console.log("This is the current hour");
//     // eventBackgroundColor[i].addClass("present");
//   } else {
//     console.log("This is in the future");
//     // eventBackgroundColor[i].addClass("future");
//   }
// }

// var button = $(".btn")
// button.on("click", function);
