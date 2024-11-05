/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    const stack = [s[0]];
    let ans = 0;
    for(let i = 1; i < s.length; i++) {
        const lastIdx = stack.length - 1;
        if(stack[lastIdx] == s[i]) {
            stack.push(s[i]);
        } else {
            if(stack.length%2 == 0) {
                stack.push(s[i]);
            } else {
                stack.push(s[lastIdx]);
                ans++;
            }
        }
    }
    return ans;
};