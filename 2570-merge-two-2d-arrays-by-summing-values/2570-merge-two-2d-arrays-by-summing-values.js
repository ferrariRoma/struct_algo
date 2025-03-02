/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const t = new Map();
    nums1.forEach(([id,val])=>{
        if(t.has(id)) t.get(id).push(val);
        else t.set(id, [val]);
    })
    nums2.forEach(([id,val])=>{
        if(t.has(id)) t.get(id).push(val);
        else t.set(id, [val]);
    })
    const ans = [];
    for(const [id, val] of t) {
        const sum = val.reduce((acc, curr)=>acc+curr);
        ans.push([id, sum]);
    }
    return ans.sort((a,b)=>a[0]-b[0]);
};