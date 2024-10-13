/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let pq = new MinPriorityQueue();
    const obj = {};
    const ans = [];
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            pq.enqueue(i, nums[i][j]);
        }
        obj[i] = 0;
    }
    pq = pq.toArray();

    let lIdx = 0;
    let rIdx = 0;
    while(true) {
        if(Object.values(obj).includes(0)) {
            if(rIdx === pq.length) break;
            const {priority, element} = pq[rIdx];
            obj[element]++;
            rIdx++;
        } else {
            if(ans.length===0) ans.push([pq[lIdx].priority, pq[rIdx-1].priority]);
            else {
                if(ans[ans.length-1][1] - ans[ans.length-1][0] >= pq[rIdx-1].priority - pq[lIdx].priority) {
                    ans.push([pq[lIdx].priority, pq[rIdx-1].priority]);
                }
            }
            const {priority, element} = pq[lIdx];
            lIdx++;
            obj[element]--;
        }
    }
    let idx, prev = Number.MAX_SAFE_INTEGER;
    ans.forEach((el,i,arr)=>{
        if(prev > el[1] - el[0]) {
            prev = el[1] - el[0];
            idx = i;
        } else if(prev === el[1] - el[0]) {
            if(arr[i][0] > el[0])
                idx = i;
        }
    })
    return ans[idx];
};