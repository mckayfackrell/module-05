// current date being pulled from the moment.js source repository and placed in the HTML at the id section of id="currentDay" in the header
$(document).ready(function() {
  $("#currentDay").text(moment().format("MMMM Do, YYYY"));

  $(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time =  $(this).parent().attr("id");

    localStorage.setItem(time, text); 
  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  function hourTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour);

        if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");
        }
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
      })
    }
    hourTracker();
})