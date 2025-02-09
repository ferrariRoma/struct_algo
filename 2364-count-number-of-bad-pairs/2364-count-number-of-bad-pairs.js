/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let totalPair = 0;
    const t = new Map(), goodPair = [];
    for (let i = 0; i < nums.length; i++) {
        totalPair += nums.length-1 - i;
        goodPair.push(t.get(nums[i]-i) ?? 0);
        t.set(nums[i]-i, (t.get(nums[i]-i) ?? 0) + 1);
    }
    return totalPair - goodPair.reduce((acc, curr)=> acc+curr);
};