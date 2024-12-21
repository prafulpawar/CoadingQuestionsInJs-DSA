let n = parseInt(prompt("Enter a value of n:"));

let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

alert(fib.slice(0, n).join(" "));
