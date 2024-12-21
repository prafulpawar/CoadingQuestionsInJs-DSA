let nums = JSON.parse(prompt("Enter an array "));

let half = nums.length / 2;

let leftSum = 0;
let rightSum = 0;

//  sum of the left half and the right half
for (let i = 0; i < half; i++) {
    leftSum += nums[i];
}

for (let i = half; i < nums.length; i++) {
    rightSum += nums[i];
}

let difference = Math.abs(leftSum - rightSum);

alert(difference);
