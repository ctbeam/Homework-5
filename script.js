// get from Momentjs the data to display current day on page - added YYYY to template
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));


// Momentjs 

function getTime() {
  var present = moment().hours();
  $(".row").each(function() {
    var timeRow = parseInt($(this).attr("id").split("-")[1]);
      if (timeRow < present) {
        $(this).addClass("past");
      } 
      else if (timeRow === present) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
  });
}


// takes the input and makes it a value to store
$("#hour-9 .calendarEvent").val(localStorage.getItem("hour-9"));
$("#hour-10 .calendarEvent").val(localStorage.getItem("hour-10"));
$("#hour-11 .calendarEvent").val(localStorage.getItem("hour-11"));
$("#hour-12 .calendarEvent").val(localStorage.getItem("hour-12"));
$("#hour-13 .calendarEvent").val(localStorage.getItem("hour-13"));
$("#hour-14 .calendarEvent").val(localStorage.getItem("hour-14"));
$("#hour-15 .calendarEvent").val(localStorage.getItem("hour-15"));
$("#hour-16 .calendarEvent").val(localStorage.getItem("hour-16"));
$("#hour-17 .calendarEvent").val(localStorage.getItem("hour-17"));
$("#hour-18 .calendarEvent").val(localStorage.getItem("hour-18"));
$("#hour-19 .calendarEvent").val(localStorage.getItem("hour-19"));


//Saves inputs as one item in storage and updates every minute to the time to detect the time.

$(document).ready(function() {
$(".storeEvent").on("click", function() {
  var value = $(this).siblings(".calendarEvent").val();
  var present = $(this).parent().attr("id");
  localStorage.setItem(present, value);
});

getTime();
  var interval = setInterval(getTime, 60000);

});


