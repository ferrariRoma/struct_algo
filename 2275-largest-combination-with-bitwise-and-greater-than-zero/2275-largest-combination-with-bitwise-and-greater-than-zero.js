/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    const bitCount = Array(24).fill(0);
    
    for(let num of candidates) {
        let bitPosition = 0;
        while(num > 0) {
            if(num & 1) {
                bitCount[bitPosition]++;
            }
            num >>= 1;
            bitPosition++;
        }
    }
    
    return Math.max(...bitCount);
};