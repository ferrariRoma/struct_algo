/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const s = [];
    for(let i = 0; i < nums.length; i++) {
        if(s.length===0 || nums[s.at(-1)] > nums[i]) s.push(i)
    }
    
    let ramp = 0;
    for(let i = nums.length-1; i>0; i--) {
        while(s.length > 0 && nums[s.at(-1)] <= nums[i]) {
            const idx = s.pop();
            ramp = Math.max(ramp, i - idx);
        }
    }
    
    return ramp;
};