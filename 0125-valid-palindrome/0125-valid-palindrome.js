/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const ans = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
    for(let i = 0; i <= Math.floor(ans.length); i++) {
        if(ans[i] !== ans[ans.length-1-i]) return false;
    }
    return true;
};