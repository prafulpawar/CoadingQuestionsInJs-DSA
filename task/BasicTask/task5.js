
let n = parseInt(prompt("Enter a value of n:"));


let answer;

if (n % 3 === 0 && n % 5 === 0) {
    answer = "FizzBuzz"; 
} else if (n % 3 === 0) {
    answer = "Fizz";  
} else if (n % 5 === 0) {
    answer = "Buzz"; 
} else {
    answer = String(n);  
}

// Output the answer
alert(answer);
