/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let time = 0;
    let ans = 0;
    const pq = new MaxPriorityQueue();
    for(let i = 0; i < nums.length; i++) {
        pq.enqueue(i, nums[i]);
    }
    while(time!==k) {
        const {priority:maxValue, element:maxIdx} = pq.dequeue();
        ans += maxValue;
        pq.enqueue(maxIdx, Math.ceil(maxValue/3));
        time++;
    }
    return ans; 
};