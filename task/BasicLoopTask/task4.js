let n = parseInt(prompt("Enter a value of n:"));

let result = "";

while (n !== 1) {
    result += n + " ";
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
}

result += 1; // Add the last value, which is 1
alert(result);
