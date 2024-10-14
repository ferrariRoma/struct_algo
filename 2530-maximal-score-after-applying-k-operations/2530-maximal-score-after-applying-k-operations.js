/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let ans = 0;
    const pq = new MaxPriorityQueue();
    for(let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i]);
    }
    while(k--) {
        const {priority:maxValue} = pq.dequeue();
        ans += maxValue;
        pq.enqueue(Math.ceil(maxValue/3));
    }
    return ans; 
};