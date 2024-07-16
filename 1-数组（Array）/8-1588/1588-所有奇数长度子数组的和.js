/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    if(arr == null || arr.length == 0){
        return 0;
    };

    let result = 0;
    const prefixSum = new Array(arr.length + 1).fill(0);

    for(let i = 0; i < arr.length; i++){
        prefixSum[i+1] = prefixSum[i] + arr[i]
    }

    for(let i = 0; i < arr.length; i++){
        for(let length = 1; i + length <= arr.length; length+=2){
            result = result + (prefixSum[i+length] - prefixSum[i]);
        }
    };

    return result

};

const arr = [1,4,2,5,3];
console.log(sumOddLengthSubarrays(arr)); // 58