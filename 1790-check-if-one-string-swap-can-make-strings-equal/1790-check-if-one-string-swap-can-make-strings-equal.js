/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    else if(s1 !== s2 && s1.length <= 2) return false;
    
    let howManyDiff = 0;
    const char = new Map();
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) howManyDiff++;
        char.set(s1[i], (char.get(s1[i]) ?? 0)+1);
        char.set(s2[i], (char.get(s2[i]) ?? 0)+1);
    }
    console.log(char, howManyDiff);
    if(howManyDiff > 2 || [...char.values()].findIndex(el => el%2 === 1)!==-1) return false;
    return true;
};