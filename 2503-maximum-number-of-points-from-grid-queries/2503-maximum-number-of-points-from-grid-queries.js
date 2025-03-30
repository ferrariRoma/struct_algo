/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {
    const h = grid.length, w = grid[0].length;
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    const ans = [];

    for(const target of queries) {
        const visited = Array.from({length: h}, () => Array(w).fill(false));
        let queue = [[0,0]], count = 0;
        while(queue.length) {
            const temp = [];
            
            for(const [x, y] of queue) {
                if(visited[x][y]) continue;
                visited[x][y] = true;
                
                if(target > grid[x][y]) {
                    count++;
                    for(const [dx, dy] of dir) {
                        const nx = x + dx, ny = y + dy;
                        if(nx < h && nx >= 0 && ny < w && ny >= 0) {
                            if(!visited[nx][ny]) temp.push([nx, ny]);
                        }
                    }
                }
            }

            queue = temp;
        }
        ans.push(count);
    }
    return ans;
};