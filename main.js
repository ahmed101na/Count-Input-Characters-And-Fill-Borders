// Select the first div element
let div = document.querySelector("div");

// Select the first input element
let input = document.querySelector("input");

// Select the element with class "count"
let count = document.querySelector(".count");

// Get the maxlength attribute from the input element
let maxLength = input.getAttribute("maxlength");

// Select the element with class "progress"
let progress = document.querySelector(".progress");

// Set the initial innerHTML of count to maxLength
count.innerHTML = maxLength;

// Add an event listener for input events on the input element
input.oninput = function () {
  // Update the count innerHTML to the remaining characters
  count.innerHTML = maxLength - this.value.length;

  // If the remaining characters are zero, add the "zero" class, otherwise remove it
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");

  // Update the width of the progress bar based on the input length
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};
