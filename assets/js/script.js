const today = dayjs().format("MMMM D, YYYY h:mm A");
console.log(today);
$("#currentDay").text(today);

$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    let time = $(this)
                .parent()
                .attr("id");
    let text = $(this)
                .siblings(".description")
                .val()
                .trim();
    console.log(this);
    // place it within the LS
    localStorage.setItem(time, text);
  })
  $(".description #0900-h").val(localStorage.getItem("0900-h"));
  $(".description #1000-h").val(localStorage.getItem("1000-h"));
  $(".description #1100-h").val(localStorage.getItem("1100-h"));
  $(".description #1200-h").val(localStorage.getItem("1200-h"));
  $(".description #1300-h").val(localStorage.getItem("1300-h"));
  $(".description #1400-h").val(localStorage.getItem("1400-h"));
  $(".description #1500-h").val(localStorage.getItem("1500-h"));
  $(".description #1600-h").val(localStorage.getItem("1600-h"));
  $(".description #1700-h").val(localStorage.getItem("1700-h"));

  let timeOfEvent = () => {
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("hour")[1]);
      // validate work
      if (blockHour < today) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockHour === today) {
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
  
  timeOfEvent();
});
