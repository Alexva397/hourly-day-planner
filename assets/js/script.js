// Variable assignment
const timeDisplayEl = $("#currentDay");
const saveButton = $(".saveBtn");


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
const currentHour = getCurrentHour();
console.log(currentHour);

// Function to color code each timeblock element
$(".time-block").each(function() {
    let hourDivEl = $(this).attr("id");
    if (parseInt(hourDivEl) === currentHour) {
        $(this).children("textarea").addClass("present");
    } else if (parseInt(hourDivEl) > currentHour) {
        $(this).children("textarea").addClass("future");
    }
    console.log(hourDivEl);
});

// function to save user input within textarea
saveButton.on("click", function() {
    let userTextInput = $(this).siblings("textarea").val();
    console.log(userTextInput);
    let timeSlot = $(this).parent().attr("id");
    console.log(timeSlot);
    localStorage.setItem(timeSlot, userTextInput);

});

// function to pull from local storage
function generateSaved () {
    for (let i = 9; i <= 17; i++) {
        $("#" + i).children("textarea").text(localStorage.getItem(i));
    }
}

// Call function to generate saved content in local storage
generateSaved();

// set time interval for current date/time display to increment each second
setInterval(displayDateAndTime, 1000);