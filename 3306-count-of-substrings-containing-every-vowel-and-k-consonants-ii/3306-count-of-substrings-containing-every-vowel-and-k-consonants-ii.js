/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    const isVowel = (c) => {
        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') return true;
        else return false;
    }

    const nextConsonantPos = Array(word.length);
    let nextConsonantPosIndex = word.length;
    for(let i = word.length-1; i >= 0; i--) {
        if(isVowel(word[i])) nextConsonantPos[i] = nextConsonantPosIndex;
        else {
            nextConsonantPos[i] = nextConsonantPosIndex;
            nextConsonantPosIndex = i;
        }
    }
    
    let start = 0, end = 0, countConsonant = 0, ans = 0;
    const vowelMap = new Map();
    while(end < word.length) {
        const newChar = word[end];

        if(isVowel(newChar)) {
            vowelMap.set(newChar, (vowelMap.get(newChar) ?? 0) + 1);
        } else {
            countConsonant++;
        }

        while(countConsonant > k) {
            const startChar = word[start];
            if(isVowel(startChar)) {
                vowelMap.set(startChar, vowelMap.get(startChar) - 1);
                if(vowelMap.get(startChar) === 0) vowelMap.delete(startChar);
            } else {
                countConsonant--;
            }
            start++;
        }

        while(start < word.length && vowelMap.size === 5 && countConsonant === k) {
            ans += nextConsonantPos[end] - end;
            const startChar = word[start];
            if(isVowel(startChar)) {
                vowelMap.set(startChar, vowelMap.get(startChar) - 1);
                if(vowelMap.get(startChar) === 0) vowelMap.delete(startChar);
            } else {
                countConsonant--;
            }
            start++;
        }

        end++;
    }
    return ans;
};