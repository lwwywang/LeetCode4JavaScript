/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle === null || triangle.length === 0 || triangle[0].length === 0 ) {
        return 0;
    }

    let n = triangle.length;
    //dp 数组的列数比实际需要的多一列
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
    dp[0][0] = triangle[0][0];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
            }
        }
    }

    return Math.min(...dp[n - 1]);
};

let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle)); // 11