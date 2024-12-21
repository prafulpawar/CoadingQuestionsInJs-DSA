let arr = JSON.parse(prompt("Enter an array of strings "));
let k = parseInt(prompt("Enter the value of k:"));

let distinctStrings = [];
let seen = new Set();

for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
        distinctStrings.push(arr[i]);
        seen.add(arr[i]);
    }
}

let result = (k <= distinctStrings.length) ? distinctStrings[k - 1] : "";
alert("Kth Distinct String: " + result);
