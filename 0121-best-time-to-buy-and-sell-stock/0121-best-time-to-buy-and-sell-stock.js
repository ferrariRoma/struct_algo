/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cheap = Number.MAX_SAFE_INTEGER, profit = Number.MIN_SAFE_INTEGER;
    for(const price of prices) {
        cheap = Math.min(price, cheap);
        profit = Math.max(profit, price - cheap);
    }
    return profit;
};