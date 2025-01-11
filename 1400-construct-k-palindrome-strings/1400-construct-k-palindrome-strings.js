/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(s.length < k) return false;
    const n = s.length, dictionary = new Map(), countOdd = {};
    for(let i=0; i<n; i++) {
        dictionary.set(s[i], (dictionary.get(s[i]) ?? 0) + 1);
    }

    let oddArray = [], totalOddNums = 0, isNotChanged=0;
    for(const [key, value] of dictionary) {
        if(value%2!==0) {
            oddArray.push([key, value]);
            totalOddNums++;
        };
    } 

    for(let i=0; i<k; i++) {
        countOdd[i] = 0;
    }
    
    while(true) {
        if(totalOddNums===0) return true;
        if(totalOddNums===isNotChanged) return false;
        isNotChanged = totalOddNums;
        let idx=0;
        oddArray = oddArray.map(([key,value])=>{
            if(value%2===0) return [key,value];
            idx = idx%k;
            if(countOdd[idx]===0) {
                countOdd[idx]++;
                totalOddNums--;
                value--;
            }
            idx++;
            return [key,value];
        })
    }
};