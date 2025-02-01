/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    const totalRow = grid.length, totalCol = grid[0].length;
    // disjoint
    const parents = Array(totalRow*totalCol).fill(0).map((_,index)=>index);
    const landSize = Array(totalRow*totalCol).fill(1);

    const findParent = (idx) => {
        if(parents[idx] == idx) return idx;
        return parents[idx] = findParent(parents[idx]);
    }

    // find parents, compare their land size and union to bigger land
    const unionLands = (idx1, idx2) => {
        const landA = findParent(idx1);
        const landB = findParent(idx2);
        if(landA !== landB) {
            if(landSize[landA] < landSize[landB]) {
                parents[landA] = landB;
                landSize[landB] += landSize[landA];
            } else {
                parents[landB] = landA;
                landSize[landA] += landSize[landB];
            }
        }
    }

    let hasZero = false;
    for(let i = 0; i < totalRow; i++) {
        for(let j = 0; j < totalCol; j++) {
            if(grid[i][j] == 0 && !hasZero) hasZero = true;
            else if(grid[i][j] == 1) {
                const currIndex = i * totalCol + j;
                for(const [dirRow, dirCol] of dir) {
                    const nextRow = i + dirRow;
                    const nextCol = j + dirCol;
                    if(nextRow >= 0 && nextRow < totalRow && 
                    nextCol >= 0 && nextCol < totalCol &&
                    grid[nextRow][nextCol] == 1) {
                        // call union funtion
                        const neighborIndex = nextRow * totalCol + nextCol;
                        unionLands(currIndex, neighborIndex);
                    }
                }
            }
        }   
    }

    if(hasZero == false) return totalRow * totalCol;
    
    let maxSize = 0;
    // check out converting 0 land to 1 land
    for(let i = 0; i < totalRow; i++) {
        for(let j = 0; j < totalCol; j++) {
            if(grid[i][j] == 0) {
                let sumLand = 1;
                const currIndex = i * totalCol + j;
                const neighborLand = new Set();
                for(const [dirRow, dirCol] of dir) {
                    const nextRow = i + dirRow;
                    const nextCol = j + dirCol;
                    if(nextRow >= 0 && nextRow < totalRow && 
                    nextCol >= 0 && nextCol < totalCol &&
                    grid[nextRow][nextCol] == 1) {
                        const neighborIndex = nextRow * totalCol + nextCol;
                        neighborLand.add(findParent(neighborIndex));
                    }
                }
                for(const parent of neighborLand) {
                    sumLand += landSize[parent];
                }
                maxSize = Math.max(sumLand, maxSize);
            }
        }
    }

    return maxSize;
};