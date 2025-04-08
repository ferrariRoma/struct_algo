/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const table = new Map();
    for(const num of nums) {
        table.set(num, (table.get(num) || 0) + 1);
    }

    for(const [key, value] of table) {
        if(value === 1) table.delete(key);
    }

    let ans = 0;
    if(table.size === 0) return ans;
    
    for(let i = 0; i < nums.length; i++) {
        if(i%3 === 0) ans++;

        if(table.has(nums[i])) {
            table.set(nums[i], table.get(nums[i]) - 1);
            if(table.get(nums[i]) === 0) table.delete(nums[i]);
            if(table.size === 0) break;
            let flag = true;
            for(const [key, value] of table) {
                if(value !== 1) {
                    flag = false;
                    break;
                }
            }
            if(flag) break;
        }
    }

    return ans;
};