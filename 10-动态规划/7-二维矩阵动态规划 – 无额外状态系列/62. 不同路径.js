/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0) {
        return 0;
    }

    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    //初始化
    dp[0][0] = 0;
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 0; i <= n; i++) {
        dp[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

let m = 3, n = 7;
console.log(uniquePaths(m, n)); // 28