/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    const LDS = new Array(nums.length).fill(1);
    const LIS = new Array(nums.length).fill(1);
    const ldsT = [];
    const lisT = [];
    
    for(let i = 0; i < nums.length; i++) {
        const pos = lowerBound(lisT, nums[i]);
        if(pos === lisT.length) lisT.push(nums[i])
        else lisT[pos] = nums[i];
        LIS[i] = pos+1;
    }
    
    for(let i = nums.length-1; i >= 0; i--) {
        const pos = lowerBound(ldsT, nums[i]);
        if(pos === ldsT.length) ldsT.push(nums[i]);
        else ldsT[pos] = nums[i];
        LDS[i] = pos+1;
    }

    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        if(LDS[i] > 1 && LIS[i] > 1) {
            ans = Math.max(ans, LDS[i] + LIS[i] - 1);
        }
    }
    return nums.length - ans;
};

const lowerBound = (arr, num) => {
    let left = 0, right = arr.length, middle;
    while(left < right) {
        middle = Math.floor((left+right)/2);
        if(arr[middle] < num) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
}