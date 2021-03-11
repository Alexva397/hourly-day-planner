var timeDisplayEl = $("#currentDay");
var saveButton = $(".saveBtn");

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
    if (parseInt(hourDivEl) === currentHour) {
        $(this).children("textarea").addClass("present");
    } else if (parseInt(hourDivEl) > currentHour) {
        $(this).children("textarea").addClass("future");
    }
    console.log(hourDivEl);
});

// function to save user input within textarea
saveButton.on("click", function() {
    var userTextInput = $(this).siblings("textarea").val();
    console.log(userTextInput);
    var timeSlot = $(this).parent().attr("id");
    console.log(timeSlot);
    // var savedToDo = {
    //     text: userTextInput,
    //     time: timeSlot
    // }
    localStorage.setItem(timeSlot, userTextInput);

});

// // function to pull from local storage
// function generateSaved () {
//     for (i = 09; i <= 17; i++) {
//         $("#" + i).children("textarea").text(localStorage.getItem(i));
//     }
// }

$(".time-block").each(function() {
    
    if (parseInt($(this).attr("id")) === localStorage.getItem("key")) {
        $(this).children("textarea").text(localStorage.getItem(value));
    }
});

// generateSaved();

var testButton = $(".saveBtn1");

testButton.on("click", function() {
    console.log(Object.entries(localStorage));
});



// set time interval for current date/time display to increment each second
setInterval(displayDateAndTime, 1000);