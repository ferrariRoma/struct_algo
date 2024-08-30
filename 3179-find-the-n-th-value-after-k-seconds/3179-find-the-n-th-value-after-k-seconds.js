/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    let a = new Array(n).fill(1);
    let temp = 0;
    for(let i = 0; i <= k; i++) {
        a = a.map((el) => {
            if(i===0) return el;
            temp+=el 
            return temp % (Math.pow(10,9) + 7);
        })
        temp = 0;
    }
    return a.pop();
};