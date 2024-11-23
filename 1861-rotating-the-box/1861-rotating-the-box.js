/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const m = box[0].length;
    const n = box.length;

    for(let i = 0; i < n; i++) {
      let idx = -1;
      for(let j = 0; j < m; j ++) {
        const curr = box[i][j];
        if(curr === '#' && idx === -1) {
            idx = j;
        } else if(curr === '.' && idx !== -1){
            [box[i][idx], box[i][j]] = [curr, box[i][idx]];
            idx++;
        } else if(curr === '*') {
            idx = -1;
        }
      }
    }

    const ans = Array.from({length: m}, ()=>Array(n));
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        ans[i][j] = box[n-1-j][i];
      }
    }
  return ans;
};