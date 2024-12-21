let nums = JSON.parse(prompt("Enter an array "));

let uniqueNums = [];
for (let i = 0; i < nums.length; i++) {
    if (!uniqueNums.includes(nums[i])) {
        uniqueNums.push(nums[i]);
    }
}

uniqueNums.sort((a, b) => b - a);

if (uniqueNums.length >= 3) {
    alert(uniqueNums[2]);
} else {
    alert(uniqueNums[0]);
}
