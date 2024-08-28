/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let result = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        result = Math.max(result, dp[i]);
    }

    return result;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // 6