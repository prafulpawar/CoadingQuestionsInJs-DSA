let s = prompt("Enter a string with alternating letters and digits ");

function shift(c, x) {
    return String.fromCharCode(c.charCodeAt(0) + x); 
}

let result = '';
for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) { // If it's a digit
        let prevChar = s[i - 1];
        let digit = parseInt(s[i]);
        result += shift(prevChar, digit); 
    } else {
        result += s[i]; // Add the letter
    }
}

alert("Replaced String: " + result);
