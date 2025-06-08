/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const table = new Map();
    for(let i = 0; i < s.length; i++) {
        table.set(s[i], (table.get(s[i]) ?? 0) + 1);
    }
    let ans = 0, justOne = 0, longestOddNum = 0;
    for(const [_, num] of table) {
        if(num%2 === 1) {
            if(num === 1) {
                justOne = 1;
            } else if(longestOddNum < num) {
                if(longestOddNum !== 0) {
                    ans += longestOddNum-1;
                }
                longestOddNum = num;
            } else {
                ans += num-1;
            }
        } else if(num%2 === 0) {
            ans += num;
        }
    }
    if(justOne === 0) {
        ans += longestOddNum;
    } else if(longestOddNum === 0) {
        ans += (justOne);
    } else {
        ans += (justOne + longestOddNum-1);
    }
    return ans;
};