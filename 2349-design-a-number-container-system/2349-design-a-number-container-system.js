var NumberContainers = function() {
    this.indexTable = new Map();
    this.numberTable = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {   
    if(this.indexTable.has(index)) {
        const prevNumAtIndex = this.indexTable.get(index);
        const indices = this.numberTable.get(prevNumAtIndex);
        delete indices[index];
        if(indices.smallestIndex === index) {
            delete indices.smallestIndex;
            let tempSmallest = Number.MAX_SAFE_INTEGER;
            for(let idx in indices) {
                tempSmallest = tempSmallest > indices[idx] ? indices[idx] : tempSmallest;
            }
            indices.smallestIndex = tempSmallest;
        }
    }
    this.indexTable.set(index, number);
    const indices = this.numberTable.get(number) ?? {};
    indices[index] = index;
    if(indices.smallestIndex === undefined || index < indices.smallestIndex) {
        indices.smallestIndex = index;
    }
    this.numberTable.set(number, indices);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    return this.numberTable.has(number) ? this.numberTable.get(number).smallestIndex : -1;
};