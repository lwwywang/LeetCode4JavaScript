/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0 || nums === null) {
        return 0;
    }

    let dp = new Array(nums.length + 1).fill(0);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }


    return dp[nums.length];
};

let nums = [1, 2, 3, 1];
console.log(rob(nums)); // 4