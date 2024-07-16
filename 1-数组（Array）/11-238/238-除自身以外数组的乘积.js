/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums == null || nums.length == 0) {
        return null;
    }

    let answer = new Array(nums.length);
    let left = new Array(nums.length);
    let right = new Array(nums.length);

    left[0] = 1;
    for (let i = 1 ; i < nums.length; i++) {
        left[i] = nums[i-1] * left[i-1];
    }

    right[nums.length - 1] = 1;
    for (let i = nums.length - 2 ; i >= 0; i--) {
        right[i] = nums[i+1] * right [i+1];
    }
     
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};

const num = [1,2,3,4];
console.log(productExceptSelf(num)); // [24,12,8,6]