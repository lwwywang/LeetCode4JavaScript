/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if(temperatures.length === 0 || temperatures == null) return [];
    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result); // [1, 1, 4, 2, 1, 1, 0, 0]