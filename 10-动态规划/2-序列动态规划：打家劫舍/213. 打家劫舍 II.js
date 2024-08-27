/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let dp1 = new Array(nums.length + 1).fill(0);
    let dp2 = new Array(nums.length + 1).fill(0);
    dp1[0] = 0;
    dp1[1] = nums[0];

    for (let i = 2; i <= nums.length; i++) {
        if (i === nums.length) {
            dp1[i] = dp1[i - 1];
            continue;
        }
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i - 1]);
    }
     
    dp2[0] = 0;
    dp2[1] = 0;
    for (let i = 2; i <= nums.length; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i - 1]);
    }

    return Math.max(dp1[nums.length], dp2[nums.length]);
};

let nums = [2, 3, 2];
console.log(rob(nums)); // 3