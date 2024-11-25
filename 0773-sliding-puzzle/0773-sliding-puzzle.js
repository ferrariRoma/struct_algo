/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const dir = [[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]];
    const target = '123450';
    const q = [];
    const vis = new Set();
    let init = '';
    
    for(const row of board) {
        for(const col of row) {
            init+=col;
        }
    }
    q.push(init);
    vis.add(init);
    
    let ans = 0;
    while(q.length > 0) {
        const leng = q.length;
        for(let i=0; i<leng; i++) {
            const curr = q.shift();
            if(curr === target) return ans;
            const zero = curr.indexOf('0');
            for(const pos of dir[zero]) {
                let next = curr.split('');
                [next[pos], next[zero]] = [next[zero], next[pos]];
                next = next.join('');
                if(!vis.has(next)) {
                    vis.add(next);
                    q.push(next);
                }
            }
        }
        ans++;
    }
    return -1;
};