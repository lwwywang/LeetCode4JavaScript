/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function swap(nums, first, second) {
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}


var reverseString = function(s) {
    let start = 0;
    let end = s.length -1;
    while (start < end){
        swap(s, start++, end--)
    }
};

const s = ["h","e","l","l","o"];
reverseString(s);
console.log(s); // ["o", "l", "l", "e", "h"]