let s = prompt("Enter a sentence to truncate");
let k = parseInt(prompt("Enter the number of words to keep:"));

let words = s.split(" ").slice(0, k); 
let result = words.join(" ");
alert("Truncated Sentence: " + result);
