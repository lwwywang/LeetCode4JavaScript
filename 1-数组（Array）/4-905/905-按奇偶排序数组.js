/**
 * @param {number[]} nums
 * @return {number[]}
 */

function swap(nums, start, end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
};

var sortArrayByParity = function(nums) {
let start = 0;
let end = nums.length - 1;

while(start < end) {
        while(start < end && nums[start] % 2 === 0) {
            start++;
        }
        while(start < end && nums[end] % 2 === 1) {
            end--;
        }
        if(start < end) {
            swap(nums, start, end);
        }}
return nums;
};

const num = [3,1,2,4];
console.log(sortArrayByParity(num)); // [4,2,1,3]