/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candi, target) {
    const res = [];
    const recur = (idx, arr, sum) => {
        if(sum == target) return res.push([...arr]);
        if(sum > target || idx >= candi.length) {
            return;
        }
        arr.push(candi[idx]);
        sum+=candi[idx]
        recur(idx, arr, sum);
        arr.pop();
        sum-=candi[idx]
        recur(idx+1, arr, sum);
    }
    recur(0, [], 0)
    return res;
};