let sentence = prompt("Enter a sentence to check if it's a pangram ");

let alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');
for (let char of sentence) {
    alphabetSet.delete(char); 
}

let isPangram = alphabetSet.size === 0;
alert("Is the sentence a Pangram? " + isPangram);
