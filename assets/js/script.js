// current date being pulled from the moment.js source repository and placed in the HTML at the id section of id="currentDay" in the header
var todayDate = moment().format("MMMM Do YYYY");
$("#currentDay").html(todayDate);

// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. So essentially this function runs directly when the page loads allowing for the data to be pulled for the functions below.
$(document).ready(function () {

// The saveBtn function is called when the button is clicked. It takes the description text that was inputted in the input field and saves it to localStorage. It also saves for the specific hour which is saved in the var time field.
  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })

// This pulls the data from localStorage for each hour is there is any to be recalled.
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));


// The function hourUpdate gets the current hour and adds/removes attributes to each hour time-block.
  function hourUpdate() {
    // This var gets the current time from the Moment.js library.
      var currentHour = moment().hour(); 

      // The each function() allows for this to run for each variance of the .time-block.
      $(".time-block").each(function () { 
          var blockHour = parseInt($(this).attr("id").split("hour")[1]); 
          // The parseInt() function parses a string argument and returns an integer of the specified radix. / $(this) will hold the element that was originally requested. It will attach all the jQuery prototype methods again, but will not have to search the DOM again. / jQuery attr. gets the attribute requested, in this case the id. / The split() method splits a string into an array of substrings. / The [1] grabs the second number in the string.

          // If the blockHour pulled is less than the currentHour then all the classes are removed and only the past class is added. 
          if (blockHour < currentHour) { 
              $(this).removeClass("present");
              $(this).removeClass("future");
              $(this).addClass("past");
          }

          // If the blockHour pulled is the same as the currentHour then all the classes are removed and only the present class is added. 
          else if (blockHour === currentHour) { 
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }

          // If the blockHour pulled is neither the same as the currentHour or less than the currentHour then all the classes are removed and only the future class is added. 
          else { 
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
          }
      })
  }
  // Runs the hourUpdate function
  hourUpdate(); 
})