/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]; 
    if(nums.length === 0 || nums === null){
        return result;
    }
    let start = 0;
    let end = nums.length - 1;

    //找左边界
    while(start + 1 < end){
        let mid = Math.floor((start + end) / 2);
        if(target > nums[mid]){
            start = mid;
        }else if(target < nums[mid]){
            end = mid;
        }else{
            end = mid;
        }
    };

    if(nums[start] === target){
        result[0] = start;
    } else if(nums[end] === target){
        result[0] = end;
    };


    //找右边界
    start = 0;
    end = nums.length - 1;
    while(start + 1 < end){
        let mid = Math.floor((start + end) / 2);
        if(target > nums[mid]){
            start = mid;
        }else if(target < nums[mid]){
            end = mid;
        }else{
            start = mid;
        }
    };
    if(nums[end] === target){
        result[1] = end;
    } else if(nums[start] === target){
        result[1] = start;
    };

    return result;
}

const nums = [5,7,7,8,8,10];
const target = 8;
console.log(searchRange(nums, target));//[3, 4]