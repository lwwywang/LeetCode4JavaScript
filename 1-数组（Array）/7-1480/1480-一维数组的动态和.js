/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums == null || nums.length == 0){
        return null
    }

    var prefixSum = new Array(nums.length).fill(0);
    prefixSum[0] = nums[0];

    for(let i = 1; i < nums.length; i++){

        prefixSum[i] = prefixSum[i-1] + nums [i];
        
    }

    return prefixSum
};

const nums = [1,2,3,4];
console.log(runningSum(nums));