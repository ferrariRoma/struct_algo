/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let ans = 1;
    const strings = new Set();
    
    const recur = (str) => {
        for(let i = 1; i <= str.length; i++) {
            const sub = str.substring(0, i);
            if(strings.has(sub)) continue;
            strings.add(sub);
            ans = Math.max(ans, strings.size);
            recur(str.substring(i));
            strings.delete(sub);
        }
    }
    
    recur(s);
    return ans;
};