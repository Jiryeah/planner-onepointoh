$(document).ready(function() {
//- WHEN I open the planner
//- THEN the current day is displayed at the top of the calendar
  const today = dayjs().format("MMMM D, YYYY h:mm A");
  console.log(today);
  $("#currentDay").text(today);

//- WHEN I scroll down
//- THEN I am presented with time blocks for standard business hours

  //- WHEN I view the time blocks for that day
  //- THEN each time block is color-coded to indicate whether it is in  the past, present, or future
  
  //- WHEN I click into a time block
  //- THEN I can enter an event
  let timeOfEvent = function() {
    let currentTime = dayjs().format('h:mm')
    console.log(currentTime);

    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("hour")[1]);
      // validate work
      if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  //- WHEN I click the save button for that time block
  //- THEN the text for that event is saved in local storage
  
  timeOfEvent();
  //- WHEN I refresh the page
  //- THEN the saved events persist
  $(".description #0900-h").val(localStorage.getItem("0900-h"));
  $(".description #1000-h").val(localStorage.getItem("1000-h"));
  $(".description #1100-h").val(localStorage.getItem("1100-h"));
  $(".description #1200-h").val(localStorage.getItem("1200-h"));
  $(".description #1300-h").val(localStorage.getItem("1300-h"));
  $(".description #1400-h").val(localStorage.getItem("1400-h"));
  $(".description #1500-h").val(localStorage.getItem("1500-h"));
  $(".description #1600-h").val(localStorage.getItem("1600-h"));
  $(".description #1700-h").val(localStorage.getItem("1700-h"));
})
