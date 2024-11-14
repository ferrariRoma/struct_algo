/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    const isPossible = (x) => {
        let sum = 0;
        for(let quantity of quantities) {
            sum += Math.ceil(quantity/x);
        }
        return sum > n;
    }
    let left=0, right=Math.max(...quantities);
    while(left<right) {
        const mid = Math.floor((left+right)/2);
        if(isPossible(mid)) {
           left = mid+1;
        } else {
           right = mid;
        }
    }
    return left;
};