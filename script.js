
// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// 
count = 0

function increment() {
  count = count + 1
  countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    count = 0
    countEl.innerText = count
}




// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function myLogger() {
  
}

// Create a function that logs out the sum of all the lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}
