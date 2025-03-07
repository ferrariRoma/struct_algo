/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const ans = [-1, -1];
    const isPrimeNum = (num) => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return true;
    }

    const candiNum = [];
    for(let i = left; i <= right; i++) {
        if(isPrimeNum(i)) candiNum.push(i);
    }

    if(candiNum.length < 2) return ans;

    console.log(candiNum);
    let minimum = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < candiNum.length-1; i++) {
        if(candiNum[i] !== 1 && candiNum[i+1] - candiNum[i] < minimum) {
            console.log(candiNum[i], candiNum[i+1]);
            ans[0] = candiNum[i];
            ans[1] = candiNum[i+1];
            minimum = candiNum[i+1] - candiNum[i];
        }
    }

    return ans;
};