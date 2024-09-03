/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(m*n!==original.length) return [];
    
    let idx = -1;
    const arr = Array.from(new Array(m), ()=>new Array(n));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            arr[i][j] = original[++idx];
        }
    }
    return arr;
};