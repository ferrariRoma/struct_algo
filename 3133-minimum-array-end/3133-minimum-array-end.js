/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let bit = 1n,curr = BigInt(x),remaining = BigInt(n-1);
    while(remaining > 0n) {
        if((BigInt(x)&bit)===0n) {
            curr |= (remaining&1n)*bit;
            remaining>>=1n;
        }
        bit<<=1n;
    }
    return Number(curr);
};