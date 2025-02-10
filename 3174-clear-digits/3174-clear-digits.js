/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const nonDigitQ = [], deleteIndices = new Map();
    for(let i = 0; i < s.length; i++) {
        if(Number.isNaN(Number(s[i]))) {
            nonDigitQ.push(i);
        } else {
            if(nonDigitQ.length !== 0) {
                const nonDigit = nonDigitQ.pop();
                deleteIndices.set(i, s[i]);
                deleteIndices.set(nonDigit, s[nonDigit]);
            }
        }
    }
    let ans = '';
    for(let i = 0; i < s.length; i++) {
        if(!deleteIndices.has(i)) ans+=s[i];
    }
    return ans;
};