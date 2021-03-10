var timeDisplayEl = $("#currentDay");

// var timeBlockEl = $(".time-block");
// var hourNine = $("#09");
// var hourTen = $("#10");
// var hourEleven = $("#11");
// var hourTwelve = $("#12");
// var hourThirteen = $("#13");
// var hourFourteen = $("#14");
// var hourFifteen = $("#15");
// var hourSixteen = $("#16");
// var hourSeventeen = $("#17");

// Display for current date/time @ header
function displayDateAndTime() {
    const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
    timeDisplayEl.text(currentTime);
}

// Function to pull current hour of the day
function getCurrentHour() {
    return moment().hour();
}
// Assign current hour to a variable
var currentHour = getCurrentHour();

console.log(currentHour);

// Function to color code each timeblock element
$(".time-block").each(function() {
    var hourDivEl = $(this).attr("id");
    console.log(hourDivEl);
    if (currentHour === hourDivEl) {
        hourDivEl.addClass(".present");
    } else if (currentHour < hourDivEl) {
        hourDivEl.addClass(".future");
    }
});

// function setColorCode() {
//     if
// }

// set time interval for current date/time display to increment each second
setInterval(displayDateAndTime, 1000);