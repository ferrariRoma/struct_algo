/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const t = new Map();
    let res = 0;

    const combination = (n, sum = 1) => {
        if(n===0) return sum;
        return combination(n-1, sum*n);
    }
    
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {   
            t.set(nums[i]*nums[j], (t.get(nums[i]*nums[j]) ?? 0) + 1);
        }
    }

    for(const [num, count] of t) {
        if(count>=2) res += combination(count)/(combination(count-2)*2);
    }

    return res*8;
};