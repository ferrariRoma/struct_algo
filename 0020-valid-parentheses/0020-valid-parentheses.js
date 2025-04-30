/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            const openBracket = stack.pop();
            if(openBracket === '(' && s[i] === ')') continue;
            else if(openBracket === '{' && s[i] === '}') continue;
            else if(openBracket === '[' && s[i] === ']') continue;
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
};