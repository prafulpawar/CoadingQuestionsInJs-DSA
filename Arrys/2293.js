let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let nums = [];
for (let i = 0; i < size; i++) {
    nums.push(Number(prompt(`Enter element ${i + 1}: `)));
}

var minMaxGame = function (nums) {
    let newArr=[];
    newArr.push(nums.length/2);
};

minMaxGame(nums);

