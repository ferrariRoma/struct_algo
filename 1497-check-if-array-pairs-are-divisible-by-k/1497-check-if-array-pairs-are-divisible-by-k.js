/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const count = new Array(k).fill(0);
    for(let i = 0; i < arr.length; i++) {
        const remainder = ((arr[i] % k) + k) % k;
        count[remainder]++;
    }
    
    if(count[0]%2 !== 0) {
        return false;
    }
    
    for(let i = 1; i < k; i++) {
        if(count[i] !== count[k-i]) return false;
    }
    
    return true;
};