/**
 * @param {number []} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target){
    if(nums.length === 0 || nums === null){
        return -1;
    }
    let start = 0;
    let end = nums.length - 1;
    while (start + 1 < end){//防止溢出
        let mid = Math.floor((start + end) / 2);
        if (target < nums[mid]){
            end = mid;
        } else if (target > nums[mid]){
            start = mid;
        } else {//处理target = mid的情况
            end = mid;
        }
    }
    if (nums[start] === target){
        return start;
    }
    if (nums[end] === target){
        return end;
    }
    return -1;
}

const nums = [-1,0,3,5,9,12];
const target = 9;
console.log(search(nums, target));//4