/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const s = [];
    for(let i=0; i<prices.length; i++) {
        while(s.length>0 && prices[s[s.length-1]] >=prices[i]) {
            const j = s.pop();
            prices[j] -= prices[i];
        }
        s.push(i);
    }
    return prices;
};