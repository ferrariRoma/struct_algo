/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    return words.reduce((acc,curr)=>curr.startsWith(pref) ? acc+1 : acc, 0);
};