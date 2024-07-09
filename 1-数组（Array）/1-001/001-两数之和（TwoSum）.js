/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 定义 twoSum 函数
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map[complement] !== undefined) {
          return [map[complement], i];
      }
      map[nums[i]] = i;
  }
}

// 正确定义数组 nums 和目标值 target
const nums = [2, 7, 11, 15];
const target = 9;

// 调用函数并打印结果
console.log(twoSum(nums, target)); // 应该输出 [0, 1]