/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    const ans = Array(n).fill(0);
    if(k == 0) return ans;
        
    let start, end, sum = 0;
    if(k<0) {
       start = n+k;
       end = n-1;
    } else {
       start = 1;
        end = k;
    }
    
    for(let i = start; i <= end; i++) {
        sum+=code[i%n];
    }
    for(let i = 0; i < n; i++) {
        ans[i] = sum;
        
        sum -= code[start%n];
        start++;
        end++;
        sum += code[end%n];
    }
    return ans;
};