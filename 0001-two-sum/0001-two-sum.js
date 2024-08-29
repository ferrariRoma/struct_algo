/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// I tried to use hash table things.
// var twoSum = function(nums, target) {
//     if(nums.length === 0) return [];
//     const ht = Object.fromEntries(nums.map((el, idx) => [el, idx]));
//     let result;
//     for(let i = 0; i < nums.length; i++) {
//         if(ht[target - nums[i]] && ht[target - nums[i]] !== i) return result = [i, ht[target - nums[i]]]
//     }
//     result;
// };

var twoSum = function(nums, target) {
    let idx1, idx2;
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(i === j) continue;
            if(nums[i] + nums[j] === target) {
                idx1 = i, idx2 = j;
                break;
            }
        }    
    }
    return [idx1, idx2];
};