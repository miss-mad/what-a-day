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

var eventDetails = "";
eventDetails = $(".row");
console.log(eventDetails);

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

function saveEventDetails() {
  // var eventDetails = $(".form-control").val();
  var eventDetails = $(".form-control").attr("id");
  console.log("why is this blank: ", eventDetails);

  // if (eventDetails.length > 0) {
  //   console.log("There's something in local storage");
  // } else {
  //   console.log("Local storage is empty");
  //   localStorage.getItem("");
  // }

  var saveDetails = localStorage.getItem("eventDetails");
  console.log("parse: ", JSON.parse(eventDetails));
  eventDetails - eventDetails === null ? [] : JSON.parse(eventDetails);
  console.log("event details: ", eventDetails);

  if (typeof eventDetails === "object" && eventDetails.length >= 1) {
    eventDetails = [...eventDetails];
  }
  // eventDetails.push({eventDetails});
  localStorage.setItem("event details", JSON.stringify(eventDetails));
  console.log(eventDetails);
  
  // if (eventDetails === null) {
  //   console.log("There's something in local storage");
  // } else {
  //   console.log("Local storage is empty");
  //   localStorage.getItem("");
  }
  // var retrieveEventDetails = localStorage.getItem("eventDetails");
  // console.log(retrieveEventDetails);


// saveEventDetails();

function loadEventDetails() {
eventDetails.textContent = "";

var loadDetails = localStorage.getItem("eventDetails");
console.log("parse: ", JSON.parse(loadDetails));
loadDetails = localStorage.getItem(JSON.parse(eventDetails));

eventDetails.forEach((textarea) => {
  var div = document.createElement("div");
  div.append(`Event details: ${textarea.eventDetails}`);
  console.log(eventDetails);
})
  // var eventDetails = $(".form-control").val();
  // eventDetails = localStorage.getItem("eventDetails");
  // console.log("Event details parsed: ", JSON.parse(eventDetails));

  // eventDetails - eventDetails === null ? "" : JSON.parse(eventDetails);
  // console.log("Event details: ", eventDetails);

  // if (eventDetails === null) {
  //   console.log("There's something in local storage");
  // } else {
  //   console.log("Local storage is empty");
  //   localStorage.getItem("");
  // }
}

// loadEventDetails();

// Creates a variable for the button html element so that we can listen for when the user clicks "SAVE" and then save their event details to local storage
var button = $(".btn");
button.on("click", saveEventDetails);
button.on("click", loadEventDetails);

// online example
// function mySave() {
//   var myContent = document.getElementById("myTextarea").value;
//   localStorage.setItem("myContent", myContent);
// }
// function myLoad() {
//   var myContent = localStorage.getItem("myContent");
//   document.getElementById("myTextarea").value = myContent;
// }
