let a = parseInt(prompt("Enter value of a:"));
let b = parseInt(prompt("Enter value of b:"));

let gcd = findGCD(a, b);

alert(`GCD of ${a} and ${b} = ${gcd}`);

function findGCD(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
