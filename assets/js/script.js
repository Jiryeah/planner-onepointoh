//- WHEN I open the planner
$(function() {});
//- THEN the current day is displayed at the top of the calendar
const today = dayjs().format("MMMM D, YYYY h:mm A");
console.log(today);
$("#currentDay").text(today);

//- WHEN I scroll down
//- THEN I am presented with time blocks for standard business hours
let dayOfEvent = [
  {hour: "0900 hours", event: ""},
  {hour: "1000 hours", event: ""},
  {hour: "1100 hours", event: ""},
  {hour: "1200 hours", event: ""},
  {hour: "1300 hours", event: ""},
  {hour: "1400 hours", event: ""},
  {hour: "1500 hours", event: ""},
  {hour: "1600 hours", event: ""},
  {hour: "1700 hours", event: ""}
];
console.log(dayOfEvent);
//- WHEN I view the time blocks for that day
//- THEN each time block is color-coded to indicate whether it is in  the past, present, or future

//- WHEN I click into a time block
//- THEN I can enter an event
//- WHEN I click the save button for that time block
//- THEN the text for that event is saved in local storage

//- WHEN I refresh the page
//- THEN the saved events persist
