/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSum = new Array(nums.length + 1).fill(0);
    for(var i = 0; i<nums.length; i++){
        this.prefixSum[i+1] = this.prefixSum[i] + nums[i];
    }

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(0, 2);
var param_2 = obj.sumRange(2, 5);
var param_3 = obj.sumRange(0, 5);
console.log(param_1, param_2, param_3); // 1, -1, -3
