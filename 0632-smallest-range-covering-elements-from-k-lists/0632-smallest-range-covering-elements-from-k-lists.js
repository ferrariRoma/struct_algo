/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    let pq = [];
    const obj = {};
    let k = nums.length;
    let isNotZero = 0;
    let ans;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            pq.push([i, nums[i][j]]);
        }
        obj[i] = 0;
    }
    pq.sort((a,b)=>a[1]-b[1]);

    let lIdx = 0;
    let rIdx = 0;
    while(true) {
        if(isNotZero !== k) {
            if(rIdx === pq.length) break;
            const [element, priority] = pq[rIdx];
            if(obj[element] === 0)
                isNotZero++;
            obj[element]++;
            rIdx++;
        } else {
            if(ans === undefined) ans = [pq[lIdx][1], pq[rIdx-1][1]];
            else {
                if(ans[1] - ans[0] > pq[rIdx-1][1] - pq[lIdx][1]) {
                    ans = [pq[lIdx][1], pq[rIdx-1][1]];
                } else if(ans[1] - ans[0] === pq[rIdx-1][1] - pq[lIdx][1]) {
                    if(ans[0] > pq[lIdx][1])
                        ans = [pq[lIdx][1], pq[rIdx-1][1]];
                }
            }
            const [element, priority] = pq[lIdx];
            lIdx++;
            obj[element]--;
            if(obj[element] === 0) isNotZero--;
        }
    }
    
    return ans;
};