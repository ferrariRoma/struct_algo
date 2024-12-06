/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    banned.sort((a,b)=>a-b);
    const nonDuple = [...new Set(banned)];
    
    let ans = 0, banIdx = 0, sum = 0;
    for(let i=1; i<=n; i++) {
        if(nonDuple[banIdx]===i) {
            banIdx++;
            continue;
        }
        if(sum+i > maxSum) break;
        sum+=i;
        ans++;
    }

    return ans;
};