/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums === null || nums.length === 0) {
        return false;
    }

    let set = new Set();
    for (let i of nums){
        if (set.has(i)){
            return true;
        } else {
            set.add(i);
        }
    }

    return false;
};

let nums = [1,2,3,1];
console.log(containsDuplicate(nums)); // true