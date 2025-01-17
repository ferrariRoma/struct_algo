/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
  const n = derived.length, candidate = Array.from({length:n}, ()=>[]);
  
  for(let i = 0; i < n; i++) {
    if(i != n-1) {
        const binaryData = derived[i]
        // 1일 때
        if(binaryData == 1) {
            if(candidate[i].length == 0) {
                candidate[i][0] = 0;
                candidate[i][1] = 1;
            }
            candidate[i+1][0] = candidate[i][1];
            candidate[i+1][1] = candidate[i][0];
        } else if(binaryData==0) {
            if(candidate[i].length == 0) {
                candidate[i][0] = 0;
                candidate[i][1] = 1;
            }
            candidate[i+1][0] = candidate[i][0];
            candidate[i+1][1] = candidate[i][1];
        }
        // 0일 때
    } else {
        // compare here
        if(derived[i] == 1) {
            return !(candidate[i][0] == candidate[0][0])
        } else {
            return (candidate[i][0] == candidate[0][0])
        }
    }
  }
};