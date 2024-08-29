/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices === null || prices.length === 0){
        return 0;
    }

    let dp = new Array(prices.length).fill(0).map(()=>new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));

    //初始化k
    for(let i = 0; i <= k; i++){
        dp[0][i][0] = 0;
        dp[0][i][1] = -prices[0];
    } 

    //初始化第i天的可能性
    for(let i = 1; i < prices.length; i++){
        //未卖出股票，手上无股票
        dp[i][0][0] = 0;
        //未卖出股票，手上有股票,1前一天买一股，2今天刚买入
        dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][0][0] - prices[i]);
    } 

    //第i天，在最多j次交易的情况下，手上无股票的最大收益
    for (let i = 1; i < prices.length; i++) {
        for(let j = 1; j <= k; j++){
        //手上无股票，第i天在j次操作的情况下，最大收益，1.第i-1天手上无股票，第i天不操作 2.第i-1天手上有股票，第i天卖出
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j - 1][1] + prices[i]);
        //手上有股票，第i天在j次操作的情况下，最大收益，1.第i-1天手上有股票，第i天不操作 2.第i-1天手上无股票，第i天买入
        dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - prices[i]);
        }
    }

    return dp[prices.length - 1][k][0];
};