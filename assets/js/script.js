var currentDay = moment().format("dddd, MMM Do YYYY");
var currentTime = moment().hour();
$("#currentDay").html(currentDay);

$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
    // get nearby values
        var plans = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    // save in localStorage
        localStorage.setItem(time, plans);
  });

   // loop over time blocks ---> https://api.jquery.com/each/
   //check if we"ve moved past this time.
   // If we have, make the row grey. If it"s future, make it green. if it"s past, make it red.

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockTime, currentTime);

    if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});
