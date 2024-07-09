/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] > 0) break; // 由于已排序，当前元素大于0，则后面不可能有三个数加和等于0
        
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复元素

        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // 跳过重复元素
                while (left < right && nums[right] === nums[right - 1]) right--; // 跳过重复元素
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // [[-1, -1, 2], [-1, 0, 1]]