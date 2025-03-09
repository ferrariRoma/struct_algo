class MinHeap {
    constructor() {
        this.heap = [];
        this.sum = 0;
    }

    enqueue(val) {
        this.heap.push(val);
        this.sum += val;
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        this.sum -= min;

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    bubbleUp(idx) {
        let currentIdx = idx;
        const element = this.heap[currentIdx];

        while (currentIdx > 0) {
            let parentIdx = Math.floor((currentIdx - 1) / 2);
            let parent = this.heap[parentIdx];

            if (element >= parent) break;

            [this.heap[parentIdx], this.heap[currentIdx]] = [element, parent];
            currentIdx = parentIdx;
        }
    }

    sinkDown(idx) {
        const length = this.heap.length;
        const element = this.heap[idx];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftChildIdx < length && this.heap[leftChildIdx] < element) {
                swapIdx = leftChildIdx;
            }

            if (
                rightChildIdx < length &&
                ((swapIdx === null && this.heap[rightChildIdx] < element) ||
                    (swapIdx !== null && this.heap[rightChildIdx] < this.heap[leftChildIdx]))
            ) {
                swapIdx = rightChildIdx;
            }

            if (swapIdx === null) break;

            [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], element];
            idx = swapIdx;
        }
    }

    get size() {
        return this.heap.length;
    }

    get getSum() {
        return this.sum;
    }
}

var findMaxSum = function(nums1, nums2, k) {
    const n = nums1.length, pairs = nums1.map((el, i)=>[el, nums2[i], i]);
    pairs.sort((a,b)=>a[0] - b[0]);
    
    const ans = Array(n).fill(0), pq = new MinHeap();

    let j = 0;
    for(let i = 0; i  < n; i++) {
        const [num1, num2, idx] = pairs[i];
        
        while(j < i && num1 > pairs[j][0]) {
            pq.enqueue(pairs[j][1]);
            j++;
        }

        while(pq.size > k) {
            pq.dequeue();
        }

        ans[idx] = pq.getSum;
    }
    return ans;
};