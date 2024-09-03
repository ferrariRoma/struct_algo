/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const DIFF = 96;
    let times = 0;
    let converted = s = [...s]
            .map(char => char.charCodeAt(0) - DIFF)
            .reduce((acc, curr)=> acc+=curr, '');
    while(k !== times) {
        converted = [...String(converted)].reduce((acc, cur)=>acc+=+cur, 0);
        times++;
    }
    return converted;
};