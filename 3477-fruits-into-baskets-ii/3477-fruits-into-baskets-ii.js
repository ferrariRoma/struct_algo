/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = baskets.length;
    const placed = Array(n).fill(false);
    let ans = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(placed[j] === false && baskets[j] >= fruits[i]) {
                placed[j] = true;
                break;
            }
             if(j === n-1) {
                ans++;
            } 
        }
    }
    return ans;
};