let s = prompt("Enter a sentence to reverse the words ");

let words = s.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join(""); 
}

let result = words.join(" ");
alert("Reversed Words: " + result);
