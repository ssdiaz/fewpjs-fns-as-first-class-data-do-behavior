/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
  // Examples:
  // timeMorning = "09:00"
  // timeAfternoon = "12:00"
  // timeEvening = "18:00"

function greet(timeString){
  const hour = parseInt(timeString, 10);

  if (hour < 12) return `Good Morning`
  if (hour > 17) return `Good Evening`
  return `Good Afternoon`
}

/* Write your implementation of displayMessage() */
function displayMessage(timeString){
  let element = document.querySelector("#greeting")
  element.innerHTML = timeString
  // document.getElementById("greeting").textContent = timeString
}