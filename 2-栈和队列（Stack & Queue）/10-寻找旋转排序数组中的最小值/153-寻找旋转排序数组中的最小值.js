/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums === null || nums.length === 0) {
        return -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while(start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if(nums[start] < nums[end]) {
            //没旋转
            return nums[start];
        } 
        if(nums[start] < nums[mid]) {
            //说明旋转后的小的数组在后半段
            start = mid;
        }else{
            //nums[start] > nums[mid]
            //说明旋转后的小的数组在前半段
            end = mid;
        }
    }
    return Math.min(nums[start], nums[end]);

};

const nums = [3,4,5,1,2];
console.log(findMin(nums)); //1