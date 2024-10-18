/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        max |= nums[i];
    }
    return backtrack(nums, max, 0, 0);
};

const backtrack = (arr, max, idx, bit) => {
    // 탈출조건
    if(idx === arr.length) {
        return max === bit ? 1 : 0;
    }
    if(max === bit) {
        return 1 << arr.length - idx;
    }
    const include = backtrack(arr,max, idx+1, bit|arr[idx]);
    const exclude = backtrack(arr,max,idx+1, bit);
    return include+exclude;
}