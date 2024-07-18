
/**
 * @param {number []} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target){
    if (nums.length === 0 || nums === null) {
        return -1;
    }
    let start = 0;
    let end = nums.length - 1;
    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);
        if (target < nums[mid]) {
            end = mid;
        } else if (target > nums[mid]) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1;
};
