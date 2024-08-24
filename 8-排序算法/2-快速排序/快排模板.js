function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // 跳过 pivot
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    //concat：将排序后的左侧子数组、基准值和排序后的右侧子数组合并成一个新的数组
    return quickSort(left).concat(pivot, quickSort(right));
}

// 测试代码
let arr = [4, 2, 1, 3];
let sortedArr = quickSort(arr);
console.log(sortedArr); // 输出: [1, 2, 3, 4]