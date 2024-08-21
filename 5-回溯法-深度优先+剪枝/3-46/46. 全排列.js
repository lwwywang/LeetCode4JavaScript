/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 */

var subsets = function(nums) {
    let res = [];

    if (nums === null || nums.length === 0) {
        return null
    }

    let list = [];
    let used = new Array(nums.length).fill(false);

    helper(res, list, nums, used);

    return res;
}

function helper(res, list, nums, used){
    //1. 递归何时退出 && list何时加入res
    if (list.length === nums.length) {
        res.push([...list]);
        return;
    }

    //2. 递归分解成子问题
    for(let i = 0; i < nums.length; i++){
        // 1) 跳过已经使用过的数字
        if (used[i]) {
            continue;
        }
        // 2) 标记当前数字已经使用
        used[i] = true;

        list.push(nums[i]);
        helper(res, list, nums, used);
        list.pop();

        used[i] = false;
    }
}

console.log(subsets([1, 2, 3]));