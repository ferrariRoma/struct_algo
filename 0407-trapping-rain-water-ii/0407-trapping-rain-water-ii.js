// MinHeap class to simulate a priority queue (min-heap)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(cell) {
        this.heap.push(cell);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].height >= this.heap[parentIndex].height) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex].height < this.heap[smallest].height) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex].height < this.heap[smallest].height) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// Cell class to store the height and coordinates of a cell in the grid
class Cell {
    constructor(height, row, col) {
        this.height = height;
        this.row = row;
        this.col = col;
    }
}

// Function to check if a cell is valid (within grid bounds)
function isValidCell(row, col, numOfRows, numOfCols) {
    return row >= 0 && col >= 0 && row < numOfRows && col < numOfCols;
}

// Main function to calculate trapped rainwater
function trapRainWater(heightMap) {
    if (heightMap.length === 0 || heightMap[0].length === 0) {
        return 0;
    }

    // Direction arrays: [row offset, col offset]
    const d = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const numOfRows = heightMap.length;
    const numOfCols = heightMap[0].length;

    const visited = Array.from({ length: numOfRows }, () =>
        Array(numOfCols).fill(false)
    );

    // Priority queue (min-heap) to process boundary cells in increasing height order
    const boundary = new MinHeap();

    // Add the first and last column cells to the boundary and mark them as visited
    for (let i = 0; i < numOfRows; i++) {
        boundary.push(new Cell(heightMap[i][0], i, 0));
        boundary.push(new Cell(heightMap[i][numOfCols - 1], i, numOfCols - 1));
        visited[i][0] = true;
        visited[i][numOfCols - 1] = true;
    }

    // Add the first and last row cells to the boundary and mark them as visited
    for (let i = 0; i < numOfCols; i++) {
        boundary.push(new Cell(heightMap[0][i], 0, i));
        boundary.push(new Cell(heightMap[numOfRows - 1][i], numOfRows - 1, i));
        visited[0][i] = true;
        visited[numOfRows - 1][i] = true;
    }

    let totalWaterVolume = 0;

    while (!boundary.isEmpty()) {
        // Pop the cell with the smallest height from the boundary
        const currentCell = boundary.pop();

        const currentRow = currentCell.row;
        const currentCol = currentCell.col;
        const minBoundaryHeight = currentCell.height;

        // Explore all 4 neighboring cells using the updated direction array
        for (const [dr, dc] of d) {
            const neighborRow = currentRow + dr;
            const neighborCol = currentCol + dc;

            // Check if the neighbor is within the grid bounds and not yet visited
            if (isValidCell(neighborRow, neighborCol, numOfRows, numOfCols) && !visited[neighborRow][neighborCol]) {
                const neighborHeight = heightMap[neighborRow][neighborCol];

                // If the neighbor's height is less than the current boundary height, water can be trapped
                if (neighborHeight < minBoundaryHeight) {
                    totalWaterVolume += minBoundaryHeight - neighborHeight;
                }

                // Push the neighbor into the boundary with updated height
                boundary.push(new Cell(Math.max(neighborHeight, minBoundaryHeight), neighborRow, neighborCol));
                visited[neighborRow][neighborCol] = true;
            }
        }
    }

    return totalWaterVolume;
}
