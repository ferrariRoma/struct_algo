/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = Array(n+1).fill(0), 
        ans = Array(n+1).fill(0);
    let count = 0;
    for(let i = 1; i < n+1; i++) {
        let carry = false;
        arr[0]++;
        if(arr[0] == 2) {
            carry = true;
            arr[0] = 0;
            count--;
            for(let j = 1; j < n+1; j++) {
                if(carry == false) break;
                arr[j]++;
                carry = false;
                if(arr[j] == 1) {
                    count++;
                } else if(arr[j] == 2) {
                    count--;
                    arr[j] = 0;
                    carry = true;
                }
            }
        } else if(arr[0] == 1) {
            count++;
        }
        ans[i] = count;
    }
    return ans;
};