/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const n = s.length, ans = {length:0}, chars={};
    for(let i=0;i<n;i++) {
        if(s[i] in chars) {
            chars[s[i]].push(i);
        } else {
            chars[s[i]]=[i];
            ans[s[i]]={};
        }
    }

    for(const c in chars) {
        if(chars[c].length<2) continue;

        const i=chars[c][0],j=chars[c][chars[c].length-1];
        for(let k=i+1;k<j;k++) {
            if(!(s[k] in ans[c])) {
                ans[c][s[k]] = 1;
                ans.length++;
            }
        }
    }

    return ans.length;
};