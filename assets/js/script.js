// current date being pulled from the moment.js source repository and placed in the HTML at the id section of id="currentDay" in the header
$(document).ready(function() {
  $('#currentDay').text(moment().format("MMMM Do, YYYY"));
})