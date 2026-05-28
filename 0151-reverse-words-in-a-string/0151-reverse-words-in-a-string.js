/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().replace(/\s+/g, " ");
    const answer = s.split(" ");
    for(let i = 0; i < answer.length/2; i++) {
        [answer[i], answer[answer.length-1-i]] = [answer[answer.length-1-i], answer[i]]
    }
    return answer.join(" ");
};