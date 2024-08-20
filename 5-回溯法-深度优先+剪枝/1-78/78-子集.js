/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 */

var subsets = function(nums) {
    //解集
    let res = [];

    //校验
    if (nums === null || nums.length === 0) {
        return null
    }

    //单一解
    let list = [];

    //排序
    nums.sort((a, b) => a - b);

    // 计算解集：把单一解list加入解集res
    helper(res, list, nums, 0);

    return res;
};

function helper(res, list, nums, position) {
    //1. 递归何时退出
    //2. 何时把list加入res
    res.push([...list]);

    //3. 递归分解成子问题
    for(let i = position; i < nums.length; i++) {
        // 1) 把nums[i]加入list
        list.push(nums[i]);
        // 2) 递归计算以nums[i]为起点的子集 
        helper(res, list, nums, i + 1);
        // 3) 回溯，移除nums[i]
        list.pop();
    } 
};


// 示例测试
console.log(subsets([1, 2, 3])); // 输出: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // 输出: [[], [0]]
