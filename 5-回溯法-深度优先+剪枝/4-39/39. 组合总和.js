/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    if (candidates === null || candidates.length === 0) {
        return null;
    }

    let list = [];

    candidates.sort((a, b) => a - b);

    helper(res, list, candidates, target, 0);

    return res;
};

function helper(res, list, candidates, target, position){
    
    // 递归何时退出 && 何时把list加入res
    if (target === 0){
        res.push([...list]);
        return;
    }

    // 剪枝
    if (target < 0){
        return;
    }

    // 递归子集
    for(let i = position; i < candidates.length; i++){
        list.push(candidates[i]);
        helper(res, list, candidates, target - candidates[i], i);
        list.pop();
    }
}

console.log(combinationSum([2, 3, 6, 7], 7)); // 输出: [[2, 2, 3], [7]]