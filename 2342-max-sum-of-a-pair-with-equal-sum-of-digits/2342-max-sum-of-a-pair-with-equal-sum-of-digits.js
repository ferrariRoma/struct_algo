/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let ans = -1;
    const t = new Map();
    for(let i = 0; i < nums.length; i++) {
        const sum = Number([...`${nums[i]}`].reduce((acc, curr)=>(+acc)+(+curr)));
        if(t.has(sum)) {
            ans = Math.max(ans, nums[i] + t.get(sum));
            t.set(sum, Math.max(t.get(sum),nums[i]));
        }
        else {
            t.set(sum, nums[i]);
        }
    }
    
    return ans;
};