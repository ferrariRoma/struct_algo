/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const dp = [], h = matrix.length, w = matrix[0].length;
    let ans = 0;
    for(let i = 0; i < h; i++) {
        dp.push([]);
        for(let j = 0; j < w; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = matrix[i][j];
                ans+=matrix[i][j];
            } else {
                dp[i][j] = 0;
            }
        }
    }
    
    for(let i = 1; i < h; i++) {
        for(let j = 1; j < w; j++) {
            if(matrix[i][j] === 1) {
                const min = Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]);
                dp[i][j]+=min+1;
            }
            ans+=dp[i][j];
        }
    }
    return ans;
};