/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }

    let ans = 0;
    let minPrice = prices[0];
    for (const p of prices) {
        ans = Math.max(ans, p - minPrice);
        minPrice = Math.min(minPrice, p);
    }
    return ans;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices)); // 5