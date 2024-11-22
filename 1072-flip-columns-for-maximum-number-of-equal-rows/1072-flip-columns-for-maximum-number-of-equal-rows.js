/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    const patFreq = new Map();
    for(const arr of matrix) {
        let str;
        if(arr[0]===0) {
            str = arr.join('');
        } else {
            str = arr.map(bit=>bit^1).join('');
        }
        patFreq.set(str, (patFreq.get(str) ?? 0) + 1);
    }
    
    return Math.max(...patFreq.values());
};