/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let i = 0;
    while(true) {
        if(k < chalk[i]) return i;
        k -= chalk[i];
        i++;
        if(chalk.length === i) {
            i = 0;
        }
    }
};