/**
 * @param {number[][]} grid
 * @return {number}
 */
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class DQ {
    constructor() {
        this.data = {};
        this.front = 0;
        this.back = 0;
    }
    pushFront(val) {
        const newNode = new Node(val, 0);
        this.front--;
        this.data[this.front] = newNode;
    }
    pushBack(val) {
        const newNode = new Node(val, 1);
        this.data[this.back] = newNode;
        this.back++;
    }
    popFront() {
        if(this.#isEmpty()) return undefined;
        const popNode = this.data[this.front];
        delete this.data[this.front];
        this.front++;
        return popNode.value;
    }
    popBack() {
        if(this.#isEmpty()) return undefined;
        this.back--;
        const popNode = this.data[this.back];
        delete this.data[this.back];
        return popNode.value;
    }
    #isEmpty() {
        return this.front === this.back;
    }
    getSize() {
        return this.back-this.front;
    }
}
var minimumObstacles = function(grid) {
    const w = grid[0].length;
    const h = grid.length;
    const vis = Array.from(Array(h), ()=>Array(w).fill(Number.MAX_SAFE_INTEGER));
    const deque = new DQ();
    const dir = [[1,0],[0,1],[-1,0],[0,-1]];
    deque.pushFront([0,0],0);
    vis[0][0] = 0;
    while(deque.getSize()) {
        const leng = deque.getSize();
        const [x,y] = deque.popFront();
        for(const [dx, dy] of dir) {
            const [nx, ny] = [x+dx, y+dy];
            if(nx>=0 && nx<h && ny>=0 && ny<w) {
                const newDist = vis[x][y] + grid[nx][ny];
                if(newDist < vis[nx][ny]) {
                    vis[nx][ny] = newDist;
                    if(grid[nx][ny]===1) {
                        deque.pushBack([nx,ny]);
                    } else {
                        deque.pushFront([nx,ny]);
                    }
                }
            }
        }
    }
    return vis[h-1][w-1];
};