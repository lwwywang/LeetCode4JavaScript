function longestConsecutive (nums) {
    let map = new Map()
    let max = 0
    for (const num of nums) { // 遍历nums数组
        if (!map.has(num)) { // 重复的数字不考察，跳过
        let preLen = map.get(num - 1) || 0  // 获取左邻居所在序列的长度 
        let nextLen = map.get(num + 1) || 0 // 获取右邻居所在序列的长度 
        let curLen = preLen + 1 + nextLen   // 新序列的长度
        map.set(num, curLen) // 将自己存入 map
        max = Math.max(max, curLen) // 和 max 比较，试图刷新max
        map.set(num - preLen, curLen)  // 更新新序列的左端数字的value
        map.set(num + nextLen, curLen) // 更新新序列的右端数字的value
        }
    }
    return max
}

// 示例用法
let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // 输出: 4