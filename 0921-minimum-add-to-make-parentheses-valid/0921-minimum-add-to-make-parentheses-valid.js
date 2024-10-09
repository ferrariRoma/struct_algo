/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const arred = [...s];
    let f = 0;
    let sum = 0;
    arred.forEach((el, idx, arr) => {
        if(el === '(') {
            f++;
        } else {
            f--;
        }
        if(f < 0 && el === ')' && arr[idx+1] === '(') {
            sum+=Math.abs(f);
            f = 0;
        }
    })
    
    
    return Math.abs(f) + Math.abs(sum);    
};