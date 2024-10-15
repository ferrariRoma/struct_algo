/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let ans = 0;
    let count = 0;
    [...s].forEach(el=>{
        if(Number(el)===0) {
            ans+=count;
        } else if (Number(el)===1) {
            count++;
        }
    })
    return ans;
};