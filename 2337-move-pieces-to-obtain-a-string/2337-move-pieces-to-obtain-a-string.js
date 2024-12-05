/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    const leng = start.length;
    const s = [];
    const t = [];
    for(let i=0; i<leng; i++) {
        if('_' !== start[i]) {
            s.push([start[i], i]);
        }
    }
    for(let i=0; i<leng; i++) {
        if('_' !== target[i]) {
            t.push([target[i], i]);
        }
    }
    if(s.length!==t.length) return false;
    for(let i=0; i<s.length; i++) {
        const [origin,idx1] = s[i];
        const [modified,idx2] = t[i];
        if(origin!==modified) return false;
        if(origin==='L' && idx1 < idx2) return false;
        if(origin==='R' && idx1 > idx2) return false;
    }
    return true;
};