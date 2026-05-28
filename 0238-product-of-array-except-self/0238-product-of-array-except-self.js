/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let theNumberOfZero = 0;
    let productOfAllExceptZero = 1;
    nums.forEach(curr => {
        if(curr == 0) theNumberOfZero++;
        else {
            productOfAllExceptZero *= curr;
        }
    });
    return nums.map(curr => {
        if(curr == 0) {
            if(theNumberOfZero > 1) return 0;
            else return productOfAllExceptZero;
        } else {
            if(theNumberOfZero > 0) return 0;
            else return productOfAllExceptZero/curr;
        }
    });
};