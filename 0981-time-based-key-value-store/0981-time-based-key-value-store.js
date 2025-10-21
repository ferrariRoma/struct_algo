
var TimeMap = function() {
    this.timeMap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.timeMap.has(key)) {
        this.timeMap.set(key, []);
    }
    const values = this.timeMap.get(key);
    values[timestamp] = value;
    this.timeMap.set(key, values);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.timeMap.get(key);
    let res = "";
    if(!values) return res;
    const limit = Math.min(timestamp, values.length)
    for(let time = limit; time >= 0; time--) {
        if(values[time]) {
            res = values[time];
            break;
        }
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */