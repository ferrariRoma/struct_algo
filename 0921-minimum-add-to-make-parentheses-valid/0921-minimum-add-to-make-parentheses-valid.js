/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const arred = [...s];
    let f = 0;
    let sum = 0;
    arred.forEach((el, idx, arr) => {
        // if(o[p] === undefined) o[p] = 0;
        // if(c[p] === undefined) c[p] = 0;
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