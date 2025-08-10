/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const table = new Map();
    let ans = 0;
    let idx1 = 0;
    for(let idx2 = 0; idx2 < s.length; idx2++) {
        const c2 = s[idx2];
        table.set(c2, (table.get(c2) ?? 0) + 1);
        if(ans < table.size) {
            ans = table.size;
        }
        while(table.get(c2) > 1) {
            const c1 = s[idx1];
            table.set(c1, table.get(c1) - 1);
            if(table.get(c1) === 0) table.delete(c1);
            idx1++;
        }
    }
    return ans;
};