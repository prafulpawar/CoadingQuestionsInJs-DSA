let a = parseInt(prompt("Enter value of a:"));
let b = parseInt(prompt("Enter value of b:"));

let lcm = (a * b) / gcd(a, b);

alert(`LCM of ${a} and ${b} = ${lcm}`);

function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
