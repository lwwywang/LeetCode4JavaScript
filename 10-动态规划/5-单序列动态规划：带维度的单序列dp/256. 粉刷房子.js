/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (costs === null || costs.length === 0 || costs[0].length === 0) {
        return 0;
    }

    let n = costs.length; 

    //state: dp[i][k]表示前i个房子涂第k种颜色的最小花费 
    let dp = new Array(costs.length + 1).fill(0).map(() => new Array(3).fill(Infinity));

    //初始化dp[0][k]
    for (let i = 0; i < 3; i++) {
        dp[0][i] = costs[0][i];
    }

    //function: dp[i][k] = min(dp[i - 1][j] + costs[i][k]) j != k
    for (let i = 1; i < n; i++){
        for (let k = 0; k < 3; k++) {
            for (let j = 0; j < 3; j++) {
                if (j !== k){
                    dp[i][k] = Math.min(dp[i][k], dp[i - 1][j] + costs[i][k]);
                }
            }
        }
    }
    
    //answer: min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2])
    return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
}; 

let costs = [[17,2,17],[16,16,5],[14,3,19]];
console.log(minCost(costs)); // 10