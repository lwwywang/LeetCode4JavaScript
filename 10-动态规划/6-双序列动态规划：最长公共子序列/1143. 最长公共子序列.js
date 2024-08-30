/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1 === null || text2 === null || text1.length === 0 || text2.length === 0) {
        return 0;
    }

    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m + 1).fill(0).map(()=> new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1 ; j <= n; j++) {
            //判断当前字符是否相等
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                //相等的话，当前的最长公共子序列就是前一个的最长公共子序列+1    
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            } else {
                //不相等的话，当前的最长公共子序列就是前一个的最长公共子序列
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};