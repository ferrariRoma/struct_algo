/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
    ;
}
class PQ {
    constructor() {
        this.values = [];
    }
    ;enqueue(value, priority) {
        const newNode = new Node(value,priority);
        this.values.push(newNode);
        this.bubbleup(this.values.length - 1);
        return this.values;
    };
    exchange(idx1, idx2) {
        return [this.values[idx1],this.values[idx2]] = [this.values[idx2], this.values[idx1]];
    };
    getLeftChildIdx(idx) {
        return (idx * 2) + 1
    };
    getParentIdx(idx) {
        return Math.floor((idx - 1) / 2)
    };
    bubbleup(idx) {
        const parentIdx = this.getParentIdx(idx);
        if (this.values[idx]?.priority < this.values[parentIdx]?.priority) {
            this.exchange(idx, parentIdx);
            if (parentIdx !== 0)
                return this.bubbleup(parentIdx);
        }
    };
    dequeue() {
        this.exchange(this.values.length - 1, 0);
        const popNode = this.values.pop();
        this.sinkdown(0);
        return popNode;
    };
    sinkdown(idx) {
        const lChildIdx = this.getLeftChildIdx(idx);
        if (this.values[idx]?.priority > this.values[lChildIdx]?.priority
           || this.values[idx]?.priority > this.values[lChildIdx+1]?.priority) {
            const biggest = this.values[lChildIdx]?.priority > this.values[lChildIdx+1]?.priority
            ? lChildIdx+1
                : lChildIdx;
            this.exchange(idx, biggest);
            if (biggest < this.values.length)
                return this.sinkdown(biggest);
        }
    };
}

var smallestChair = function(times, targetFriend) {
    const arrive = [...times].sort( (a, b) => a[0] - b[0]);
    const emptyChairs = new PQ();
    const leavePriority = new PQ();
    for (let i = 0; i < times.length; i++) {
        emptyChairs.enqueue(i, i);
    }
    let aTime, lTime, chair, idx = 0;
    while (idx!==times.length) {
        if (arrive.length === 0)
            break;
        [aTime,lTime] = arrive[idx]
        if (aTime === times[targetFriend][0] && lTime === times[targetFriend][1]) {
            while (leavePriority.values[0]?.priority <= aTime) {
                const {value: leftChair} = leavePriority.dequeue();
                emptyChairs.enqueue(leftChair, leftChair);
            }
            break;
        }
        if (leavePriority.values.length === 0) {
            chair = emptyChairs.dequeue();
            leavePriority.enqueue(chair.value, lTime);
        } else {
            while (leavePriority.values[0]?.priority <= aTime) {
                const {value: leftChair} = leavePriority.dequeue();
                emptyChairs.enqueue(leftChair, leftChair);
            }
            chair = emptyChairs.dequeue();
            leavePriority.enqueue(chair.value, lTime);
        }
        idx++;
    }
    return emptyChairs.dequeue().value;
};