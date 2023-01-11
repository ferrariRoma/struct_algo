/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 몇 개의 쿠키(s)를 나눠줄 수 있냐.
 */
var findContentChildren = function(g, s) {
    const children = [...g].sort((a,b)=>b-a);
    const cookies = [...s].sort((a,b)=>b-a);
    let count = 0;
    let j = 0;

    for(let i=0; i<children.length; i++) {
        if(children[i]<=cookies[j]) {
            count++;
            j++;

            if(j>cookies.length){
                return;
            }
        }
    }

    return count;
};