/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let ans = -1;
    const t = new Map();
    for(let i = 0; i < nums.length; i++) {
        const sum = Number([...`${nums[i]}`].reduce((acc, curr)=>(+acc)+(+curr)));
        if(t.has(sum)) 
            t.set(sum, [...t.get(sum), nums[i]])
        else 
            t.set(sum, [nums[i]]);
    }

    for(const [_, num] of t) {
        if(num.length < 2) continue;
        else if(indices.length === 2) {
            ans = ans < indices[0] + indices[1] ? indices[0] + indices[1] : ans;
        } else {
            const maxNum = Math.max(...num);
            num[num.indexOf(maxNum)] = -1;
            const secondMaxNum = Math.max(...num);
            ans = ans < maxNum + secondMaxNum ? maxNum + secondMaxNum : ans;
        }
    }
    return ans;
};