/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((acc, curr)=> acc+curr);
    if(sum%2 === 1) return false;
    const target = sum/2;
    const dp = Array(target+1).fill(false);
    dp[0] = true;
    for(const num of nums) {
        for(let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
            if(dp[target]) break;
        }
    }
    return dp[target];
};