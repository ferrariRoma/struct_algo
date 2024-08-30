/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    const map = [];
    const result = [];
    nums.forEach((el,idx)=>{
        if(el===x) map.push(idx);
    })
    queries.forEach((el)=>{
        map[el-1]!==undefined ? 
            result.push(map[el-1])
            : result.push(-1);
    })
    return result;
};