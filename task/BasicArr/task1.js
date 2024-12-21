let nums = JSON.parse(prompt("Enter a bin number"));

let maxCount = 0;
let currentCount = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
        currentCount++;
        maxCount = Math.max(maxCount, currentCount);
    } else {
        currentCount = 0;
    }
}

alert("Maximum number of consecutive 1's: " + maxCount);
