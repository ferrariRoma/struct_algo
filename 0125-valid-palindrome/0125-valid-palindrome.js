/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    const reg = new RegExp(/^[a-z0-9]+$/);
    const ans = [];
    for(let i = 0; i < s.length; i++) {
        if(reg.test(s[i])) ans.push(s[i]);
    }
    for(let i = 0; i <= Math.floor(ans.length); i++) {
        if(ans[i] !== ans[ans.length-1-i]) return false;
    }
    return true;
};