// Creates the variable today to retrieve the current day of the week, month, day of the month, and year using moment.js, then displays that info using jQuery by matching it to the same HTML ID
var today = moment();
$("#currentDay").text("Today is: " + today.format("dddd, MMMM Do, YYYY"));

var now = moment();

var scheduledHourMorning = document.getElementsByClassName("hour-morn");
// scheduledHourMorning.split("AM");

var scheduledHourAfternoon = document.getElementsByClassName("hour-aft");
// scheduledHourAfternoon.split("PM");

var both = scheduledHourMorning + scheduledHourAfternoon;
console.log(both);

var eventBackgroundColor = $("#form-control");

if (scheduledHourMorning && scheduledHourAfternoon < now) {
  console.log("This is in the past");
  eventBackgroundColor.addClass("past");
} else if (scheduledHourMorning || scheduledHourAfternoon === now) {
  console.log("This is the current hour");
  eventBackgroundColor.addClass("present");
} else {
  console.log("This is in the future");
  eventBackgroundColor.addClass("future");
}

// var button = $(".btn")
// button.on("click", function);