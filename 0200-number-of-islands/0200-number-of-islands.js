/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dir = [[1,0], [0,1], [-1,0], [0,-1]];
    const rows = grid.length, cols = grid[0].length;
    const lands = Array.from({length: rows}, () => Array(cols).fill(0));
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] == 1) lands[i][j] = -1;
        }
    }
    const flipLand = (r, c) => {
        // BFS로 탐색하면서 주변 땅 싹 찾아보기
        let queue = [[r, c]];
        while(queue.length) {
            const [curR, curC] = queue.shift();
            if(lands[curR][curC] == -1) {
                lands[curR][curC] = 1;
                for(const [dirR, dirC] of dir) {
                    const nextR = dirR + curR;
                    const nextC = dirC + curC;
                    if(0 <= nextR && nextR < rows && 0 <= nextC && nextC < cols && lands[nextR][nextC] == -1) {
                        queue.push([nextR, nextC]);
                    }
                }
            }
        }
    }

    let ans = 0;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(lands[i][j] == -1) {
                flipLand(i, j)
                ans++;
            };
        }
    }
    return ans;
};