/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    const n = nums.length;
    let same = 0, right = -1, ans = 0;
    const count = new Map();
    for(let left = 0; left < nums.length; left++) {
        while(same < k && right < n - 1) {
            right++;
            same += count.get(nums[right]) ?? 0;
            count.set(nums[right], (count.get(nums[right]) ?? 0) + 1);
        }
        if(same >= k) {
            ans += n - right;
        }
        count.set(nums[left], count.get(nums[left])-1);
        same -= count.get(nums[left]);
    }
    return ans;
};