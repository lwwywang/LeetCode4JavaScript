/**
 * @param {number[][]} grid
 * @return {number}
 */
//state：dp[i][j]表示从（0, 0）到(i, j)的最小路径和
//function: dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
//condition：向下or向右
//solution：dp[m - 1][n - 1]
var minPathSum = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    let m = grid.length;
    let n = grid[0].length;

    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    //初始化
    dp[0][0] = grid[0][0];

    //只向下走
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    //只向右走
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    return dp[m - 1][n - 1];
};