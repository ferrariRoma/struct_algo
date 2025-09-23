/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let elapsedTime = 0, remains = 0, queue = [];
    const cols = grid.length, rows = grid[0].length;
    const dir = [[1,0], [0,1], [-1,0], [0,-1]];
    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            if(grid[i][j] == 2) queue.push([i, j]);
            else if(grid[i][j] == 1) remains++;
        }
    }

    if(remains == 0) return 0;

    while(queue.length > 0) {
        elapsedTime++;
        const tempQueue = [];
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const [c, r] = queue.shift();
            for(const [dc, dr] of dir) {
                const nc = c + dc;
                const nr = r + dr;
                if(nc >= 0 && nr >= 0 && nr < rows && nc < cols && grid[nc][nr] == 1) {
                    grid[nc][nr] = 2;
                    remains--;
                    if(remains == 0) return elapsedTime;
                    tempQueue.push([nc, nr]);
                }
            }
        }
        queue = tempQueue;
    }
    return remains > 0 ? -1 : elapsedTime;
};