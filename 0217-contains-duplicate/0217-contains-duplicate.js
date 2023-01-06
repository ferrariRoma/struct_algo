/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i of nums){
        if(nums.filter(el=>i===el).length>1) return true;
    }
    return false;
};