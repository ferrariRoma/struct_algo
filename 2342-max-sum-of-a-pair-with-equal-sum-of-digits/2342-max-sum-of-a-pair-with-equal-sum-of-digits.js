class MaxPQ {
    constructor() {
        this.queue = [];
    }
    #bubbleup(idx) {
        if(idx <= 0) return;
        const parentIdx = Math.floor((idx-1)/2);
        if(this.queue[parentIdx] < this.queue[idx]) {
            [this.queue[parentIdx], this.queue[idx]] = [this.queue[idx], this.queue[parentIdx]];
            this.#bubbleup(parentIdx);
        }
    }
    #sinkdown(idx) {
        if(idx >= this.queue.length) return;
        const leftChildIdx = idx*2+1;
        const rightChildIdx = leftChildIdx + 1;
        if(this.queue[leftChildIdx] > this.queue[idx] || this.queue[rightChildIdx] > this.queue[idx]) {
            const biggerIdx = this.queue[leftChildIdx] < this.queue[rightChildIdx] ? rightChildIdx : leftChildIdx;
            [this.queue[biggerIdx], this.queue[idx]] = [this.queue[idx], this.queue[biggerIdx]];
            this.#sinkdown(biggerIdx);
        }
    }
    enqueue(num) {
        this.queue.push(num);
        this.#bubbleup(this.queue.length-1);
        return this;
    }
    dequeue() {
        [this.queue[this.queue.length-1], this.queue[0]] = [this.queue[0], this.queue[this.queue.length-1]];
        const res = this.queue.pop();
        this.#sinkdown(0);
        return res;
    }
    get getSize() {
        return this.queue.length;
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let ans = -1;
    const t = new Map();
    for(let i = 0; i < nums.length; i++) {
        const sum = Number([...`${nums[i]}`].reduce((acc, curr)=>(+acc)+(+curr)));
        if(t.has(sum)) {
            t.set(sum, t.get(sum).enqueue(nums[i]));
        }
        else {
            t.set(sum, new MaxPQ().enqueue(nums[i]));
        }
    }
    
    for(const [_, pq] of t) {
        if(pq.getSize < 2) continue;
        const sum = pq.dequeue() + pq.dequeue();
        ans = ans < sum ? sum : ans;
    }
    return ans;
};