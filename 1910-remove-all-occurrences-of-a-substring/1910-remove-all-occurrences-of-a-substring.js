/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let repeat = true;
    while(repeat) {
        repeat = false;
        const removed = s.replace(part, '');
        if(removed !== s) {
            repeat = true;
            s = removed;
        };
    }
    return s;
};