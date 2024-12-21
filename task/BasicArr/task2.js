let nums = JSON.parse(prompt("Enter an array"));

let frequencies = "";

for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (nums[i] !== null) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
                nums[j] = null; // Mark as counted
            }
        }
        frequencies += nums[i] + "-" + count + "\n";
    }
}

alert(frequencies.trim());
