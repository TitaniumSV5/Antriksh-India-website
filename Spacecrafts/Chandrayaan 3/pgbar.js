// Set the start and end dates
var startDate = new Date('2023-07-14');
var endDate = new Date('2023-08-23');

// Calculate the progress percentage based on the current date
var currentDate = new Date();
var progress = (currentDate - startDate) / (endDate - startDate) * 100;
progress = Math.min(Math.max(progress, 0), 100); // Clamp progress between 0 and 100

// Update the progress bar width and background color
var progressBar = document.querySelector('.progress-bar');
progressBar.style.width = progress + '%';
progressBar.style.backgroundColor = '#a8a8a8'; // Change to desired background color

// Add animation class to enable animation
progressBar.classList.add('progress-animated');
