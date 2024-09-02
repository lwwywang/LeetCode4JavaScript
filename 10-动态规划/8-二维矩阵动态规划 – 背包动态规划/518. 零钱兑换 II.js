/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // 初始化硬币种类数
    let m = coins.length;
    // n 表示金额的范围，从 0 到 amount。dp 数组的长度为 amount + 1，因为我们需要包括金额 0 的情况。
    let n = amount+1;

    // 初始化 dp 数组，dp[i][j] 表示使用前 i 种硬币凑成金额 j 的组合数
    let dp = new Array(m + 1).fill(0).map(() => new Array(n).fill(0));

    // 初始化 dp[0][0] 为 1，表示金额为 0 时只有一种组合方式
    dp[0][0] = 1;

    // 遍历每个硬币
    for (let i = 1; i <= m; i++) {
        // 遍历每个金额
        for (let j = 0; j < n; j++) {
            // 不使用第 i 个硬币的情况
            dp[i][j] = dp[i - 1][j];
            // 使用第 i 个硬币的情况
            if (j >= coins[i - 1]) {
                dp[i][j] += dp[i][j - coins[i - 1]];
            }
        }
    }

    return dp[m][amount];
};