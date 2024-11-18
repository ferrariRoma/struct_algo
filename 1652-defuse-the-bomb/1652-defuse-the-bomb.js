/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {  
    const n = code.length;
    const total = code.reduce((acc, cur)=>acc+cur);
    let share, rest;
    for(let i = 0; i < code.length; i++) {
        if(k==0) {
            code[i] = 0;
            continue;
        }
        if(k>0) {
            // positive number
          share = Math.floor(k/n);
             rest = k%n; 
        } else {
            // negative number
             share = Math.ceil(k/n);
         rest = k%n;
        }
    }
    if(k==0) return code;
    
    let i = 0, temp = rest, circle = Math.abs(share*total), sum=0;
    const ans = [];
    while(i<n) {
        if(temp == 0) {
            temp = rest;
            ans[i] = sum+circle;
            i++;
            sum = 0
            continue;
        }        
        if(rest<0) {
            sum += code.at(i+temp);
            temp++;
        } else {
            sum += code[(i+temp)%n];
            temp--;
        }
    }
    return ans;
};