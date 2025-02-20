/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums[0].length, stack = nums.slice();
    let idx = 0, binary = [...stack.pop()];
    while(stack.length) {
        if(idx === n) {
            idx = 0;
            binary = [...stack.pop()]
        }
        const temp = binary[idx];
        binary[idx] = binary[idx] === '1' ? '0' : '1';
        if(!nums.includes(binary.join(''))) return binary.join('');
        binary[idx] = temp;
        idx++;
    }
};