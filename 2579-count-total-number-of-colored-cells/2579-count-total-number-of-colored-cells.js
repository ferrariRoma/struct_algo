/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let ans = 1, weight = 4;
    for(let i = 0; i < n; i++) {
        ans += weight*i
    }
    return ans;
};