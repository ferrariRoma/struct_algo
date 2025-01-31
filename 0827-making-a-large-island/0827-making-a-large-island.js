/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    const exploreIsland = (islandId, row, col) => {
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 1) {
            return 0;
        } else {
            grid[row][col] = islandId;
            return dir.reduce((acc, curr) => 
            acc + exploreIsland(islandId, row + curr[0], col + curr[1]), 1);
        }
    };

    let islandId = 2;
    const islandSize = new Map();
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                islandSize.set(islandId, exploreIsland(islandId, i, j));
                islandId++;
            }
        }
    }
    
    if(islandSize.size == 0 ) return 1;
    else if(islandSize.size == 1) 
        return islandSize.values().next().value == grid.length*grid[0].length ?
            grid.length*grid[0].length :
            islandSize.values().next().value + 1;

    let maxSize = 1;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 0) {
                let sum = 1;
                const adjacentIsland = new Set();
                dir.forEach(([row, col])=> {
                    const nextRow = i + row;
                    const nextCol = j + col;
                    if(nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] > 1)
                        adjacentIsland.add(grid[nextRow][nextCol]);
                })
                for(let id of adjacentIsland) {
                    sum += islandSize.get(id);
                }
                maxSize = Math.max(maxSize, sum);
            }
        }
    }
    return maxSize;
};