/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let index = 0, ans = 0;;
    while(index < nums.length-2) {
        if(nums[index] === 0) {
            ans++;
            for(let i = index; i < index+3; i++) {
                nums[i] = nums[i] == 0 ? 1 : 0;
            }
        }
        index++;
    }
    return nums.findLastIndex(el => el === 0) === -1 ? ans : -1;
};