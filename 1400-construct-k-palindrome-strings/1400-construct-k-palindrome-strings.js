/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(s.length < k) return false;
    const n = s.length, dictionary = new Map();
    for(let i=0; i<n; i++) {
        dictionary.set(s[i], (dictionary.get(s[i]) ?? 0) + 1);
    }
    // 여기까지 n

    let ans = 0;
    for(const [key, value] of dictionary) {
        if(value%2!==0) ans++
    }
    // n+oddArray.length

    return ans<=k;
};