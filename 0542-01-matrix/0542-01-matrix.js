/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    const q = [];
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(mat[i][j] === 0) {
                q.push([i, j]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    while(q.length) {
        const [r, c] = q.shift();
        for(const [dr, dc] of dir) {
            const nr = r + dr;
            const nc = c + dc;
            if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && mat[nr][nc] > mat[r][c] + 1) {
                mat[nr][nc] = mat[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }
    return mat;
};