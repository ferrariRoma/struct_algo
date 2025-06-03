/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const t = new Map();
    for(let i = 0; i < magazine.length; i++) {
        t.set(magazine[i], (t.get(magazine[i]) ?? 0) + 1);
    }
    for(let i = 0; i < ransomNote.length; i++) {
        if(!t.has(ransomNote[i])) return false;
        t.set(ransomNote[i], t.get(ransomNote[i])-1);
        if(t.get(ransomNote[i]) === 0) t.delete(ransomNote[i]);
    }
    return true;
};