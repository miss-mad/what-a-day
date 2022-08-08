// When the document loads in the browser, the loadEventDetails() function is ready to be executed
$(document).ready(loadEventDetails); 

// Creates the variable today to retrieve the current day of the week, month, day of the month, and year using moment.js, then displays that info using jQuery by matching it to the same HTML ID
var today = moment();
// Use the today variable to display the full date and time when the page is loaded
$("#currentDay").text("Today is: " + today.format("dddd, MMMM Do, YYYY"));
$("#currentTime").text(
  "The time upon page load is: " + today.format("hh:mm:ss A")
);

// Creates the variable now to be used later in the if/else/if statement to determine which is the current hour and color code the textareas holding the event details accordingly.
var now = moment().hour();

// Creates the variable button which is set equal to the jQuery selector which selects the HTML element with the matching class, which is the save button.
var button = $(".btn");

// These variables retrieve the text value from the textareas which have class="form-control". The subsequent variables are set up for the local storage functions below
var eventDetails = $(".form-control").val();
var eventDetails = "";
eventDetails = $(".row");
var eventsArray = [];

// Function to save the text in any textarea element into an eventsArray. Each time new text is inputted, it's appended to the existing array
function saveEventDetails() {
  var hour = $(this).attr("id").split("hour").pop();
  console.log("hour: ", hour);

  var inputValue = $("#" + hour).val();
  console.log("inputValue: ", inputValue);

  var localStorageEvents = localStorage.getItem("eventsArray");
  console.log("parse: ", JSON.parse(localStorageEvents));

  localStorageEvents =
    localStorageEvents === null ? [] : JSON.parse(localStorageEvents);
  console.log("event details: ", localStorageEvents);

  if (
    typeof localStorageEvents === "object" &&
    localStorageEvents.length >= 1
  ) {
    eventsArray = [...localStorageEvents];
  }

  // String interpolation to force values to be string formats
  eventsArray.push({
    details: `${inputValue}`,
    time: `${hour}`,
  });

  localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
}

// Function to load the saved event text from local storage upon page refresh
function loadEventDetails() {
  console.log("ready");

  var localStorageEvents = JSON.parse(localStorage.getItem("eventsArray"));
  console.log("EVENTS: ", localStorageEvents);

  // jQuery version of a for each loop to iterate over each element that has class="form-control" (which is the textarea element). This element also has a unique ID that reflects the scheduled hour, which is then compared in an if/else/if statement to appropriately add or remove css styles depending on the current hour determined by the now variable above
  $(".form-control").each(function () {
    var scheduledHour = $(this).attr("id");
    console.log(scheduledHour);

    localStorageEvents.forEach(event => {

      // This if statement addresses a problem that arose when building it, but isn't a problem in the finished app: if there were multiple text inputs for the same event hour, then retrieve all of the event details from that hour
      if (scheduledHour === event.time) {
        $(this).val(`${event.details}`) 
      }
      
    });

    // This adds or removes classes depending on the current time
    if (scheduledHour < now) {
      // console.log("This is in the past");
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (scheduledHour == now) {
      // console.log("This is the current hour");
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      // console.log("This is in the future");
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}

// Listen for when the user clicks "SAVE" and then executes the saveEventDetails() function
button.on("click", saveEventDetails);