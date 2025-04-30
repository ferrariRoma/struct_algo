// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {    
//     for(let i = 0; i < nums.length - 1; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) return [i, j]
//         }
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
    const table = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(table.has(target - nums[i])) {
            return [i, table.get(target - nums[i])]
        }
        table.set(nums[i], i);
    }
};