const today = dayjs().format("MMMM D, YYYY h:mm A");
console.log(today);
$("#currentDay").text(today);

$(document).ready(function() {
  $(".saveBtn").click(function(event) {
    event.preventDefault();
    let hour = $(this)
                .parent()
                .attr("id");
    let events = $(this)
                .siblings(".description")
                .val();
    // place it within the LS
    localStorage.setItem(hour, events);
  });


  let timeOfEvent = () => {
    let currentTime = dayjs().format("HH00");
    console.log(currentTime);

    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("hour")[0]);
      // validate time to determine which color will be displayed
      console.log(blockHour);
      if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  $("#9").val(localStorage.getItem("0900-h"));
  $("#10").val(localStorage.getItem("1000-h"));
  $("#11").val(localStorage.getItem("1100-h"));
  $("#12").val(localStorage.getItem("1200-h"));
  $("#13").val(localStorage.getItem("1300-h"));
  $("#14").val(localStorage.getItem("1400-h"));
  $("#15").val(localStorage.getItem("1500-h"));
  $("#16").val(localStorage.getItem("1600-h"));
  $("#17").val(localStorage.getItem("1700-h"));
  
  timeOfEvent();
});
