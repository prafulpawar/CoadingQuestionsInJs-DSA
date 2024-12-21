
let minutes = parseInt(prompt("Enter the number of minutes:"));


let hours = Math.floor(minutes / 60); //total number of hours
let remainingMinutes = minutes % 60; // remaining minutes

// Output the result in the desired format
alert(`Total hours: ${hours} hours and ${remainingMinutes} minutes.`);
