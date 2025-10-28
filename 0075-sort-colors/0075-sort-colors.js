/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 0 red, 1 white, 2 blue
    nums.sort()
    console.log(nums);
    return nums;
};