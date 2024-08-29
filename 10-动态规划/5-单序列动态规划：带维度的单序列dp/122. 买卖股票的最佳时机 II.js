/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0){
        return 0;
    }

    let dp = new Array(prices.length).fill(0).map(()=>new Array(2).fill(0));

    //初始化，0表示手中无股票，1表示手中有股票
    dp[0][0] = 0;
    dp[0][1] = -prices[0]; 

    for (let i = 1; i < prices.length; i++){
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]); //第i天手中无股票，1.第i-1天手中无股票，第i天不操作 2.第i-1天手中有股票，第i天卖出
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); //第i天手中有股票，1.第i-1天手中有股票，第i天不操作 2.第i-1天手中无股票，第i天买入 
    }

    //最后一天手中无股票的收益一定大于手中有股票的收益，所以是n-1
    return dp[prices.length - 1][0];
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // 7