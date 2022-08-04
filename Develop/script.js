// Creates the variable today to retrieve the current day of the week, month, day of the month, and year using moment.js, then displays that info using jQuery by matching it to the same HTML ID
var today = moment();
$("#currentDay").text("Today is: " + today.format("dddd, MMMM Do, YYYY"));
$("#currentTime").text(
  "The time upon page load is: " + today.format("hh:mm:ss A")
);

// Creates the variable now to be used later in the if/else/if statement to determine which is the current hour and color code the textareas holding the event details accordingly.
var now = moment().hour();
// console.log(now);

// var now = 5;

// var eventDetails = $(".row");
// console.log(eventDetails);

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

// returns array of divs with form control class
// console.log("eventBackgroundColor: ", eventBackgroundColor);

// for loop instead to iterate over the textareas (array indexing [])
// i -> so that if else statement can reference i for background color

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

// var eventBackgroundColor = $("textarea");

// jQuery version of a for each loop to iterate over each element that has class="form-control" (which is the textarea element). This element also has a unique ID that reflects the scheduled hour, which is then compared in an if/else/if statement to appropriately add or remove css styles depending on the current hour determined by the now variable above
$(".form-control").each(function () {
  var scheduledHour = $(this).attr("id");
  console.log(scheduledHour);

  // Don't even need for loop??
  // for (var i = 0; i < eventDetails.length; i++) {
    // console.log("this works 11 times");
    if (scheduledHour < now) {
      console.log("This is in the past");
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (scheduledHour == now) {
      console.log("This is the current hour");
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      console.log("This is in the future");
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  // }
});

// var button = $(".btn")
// button.on("click", function);
