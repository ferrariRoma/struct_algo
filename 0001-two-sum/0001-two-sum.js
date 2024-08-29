/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// I tried to use hash table things.
var twoSum = function(nums, target) {
    if(nums.length === 0) return [];
    const ht = Object.fromEntries(nums.map((el, idx) => [el, idx]));
    let result;
    for(let i = 0; i < nums.length; i++) {
        if(ht[target - nums[i]] && ht[target - nums[i]] !== i) return result = [i, ht[target - nums[i]]]
    }
    result;
};