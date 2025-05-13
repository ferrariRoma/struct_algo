/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const table = new Map();
    for(let i = 0; i < s.length; i++) {
        table.set(s[i], (table.get(s[i]) ?? 0) + 1);
        table.set(t[i], (table.get(t[i]) ?? 0) - 1);
        if(table.get(s[i]) === 0) table.delete(s[i]);
        if(table.get(t[i]) === 0) table.delete(t[i]);
    }
    return table.size === 0;
};