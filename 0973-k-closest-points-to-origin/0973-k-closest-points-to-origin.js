const MaxHeap = class {
    queue = [];
    enqueue(coord, dist) {
        this.queue.push([coord, dist]);
        this.bubbleup(this.queue.length-1);
    }
    bubbleup(idx) {
        if(idx <= 0) return;
        const parentIdx = Math.floor((idx-1)/2);
        if(this.queue[parentIdx][1] < this.queue[idx][1]) {
            [this.queue[parentIdx], this.queue[idx]] = [this.queue[idx], this.queue[parentIdx]];
            this.bubbleup(parentIdx);
        }
    }
    dequeue() {
        if(this.queue.length === 0) return;
        if(this.queue.length === 1) return this.queue.pop();
        [this.queue[this.queue.length-1], this.queue[0]] = [this.queue[0], this.queue[this.queue.length-1]];
        const ans = this.queue.pop()
        this.sinkdown(0);
        return ans;
    }
    sinkdown(idx) {
        const leftChildIdx = idx*2 + 1;
        const rightChildIdx = leftChildIdx + 1;
        if(this.queue.length-1 < rightChildIdx) return;
        if(this.queue[leftChildIdx][1] > this.queue[idx][1] || this.queue[rightChildIdx][1] > this.queue[idx][1]) {
            const biggerIdx = this.queue[leftChildIdx][1] < this.queue[rightChildIdx][1] ? rightChildIdx : leftChildIdx;
            [this.queue[idx], this.queue[biggerIdx]] = [this.queue[biggerIdx], this.queue[idx]];
            this.sinkdown(biggerIdx);
        }
    }
    getResult() {
        return this.queue.map(coord => coord[0])
    }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const h = new MaxHeap();
    for(const [x, y] of points) {
        const dist = x**2 + y**2;   
        h.enqueue([x, y], dist);
    }

    while(h.queue.length !== k) {
        h.dequeue();
    }
    return h.getResult();
};