/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    const map = new Map();
    let suspectorLength, othersLength;

    nums.forEach((el,idx)=>{
        if(map.has(el)) {
            const gotten = map.get(el);
            map.set(el, gotten+1);
        } else {
            map.set(el, 1);
        }
    });
    
    let index = nums.length-1;
    const valuesArr = Array.from(map.values());
    const counts = new Map(); // map의 values의 ocurrences를 정리
    valuesArr.forEach(el=>{
        if(counts.has(el)) {
            const count = counts.get(el);
            counts.set(el, count+1);
        }
        else {
            counts.set(el, 1);
        };
    });

    while(index>=0) {
        if(counts.size===1) {
            const [keys] = counts.keys();
            if(keys === 1 || map.size === 1) return index+1;
        };
        if(counts.size===2) {
            if(counts.has(1)) {
                const isOne = counts.get(1);
                if(isOne===1) return index+1;
            }
            const [key1, key2] = counts.keys();
            if(Math.abs(key1-key2)===1) {
                let biggerKey;
                if(key1>key2) biggerKey = key1;
                else biggerKey = key2;
                const biggerValue = counts.get(biggerKey);
                if(biggerValue === 1) return index+1;
            }
        }
        
        let value = map.get(nums[index]);
        let count = counts.get(value);
        value--;
        count--;
        
        if(value===0) map.delete(nums[index])
        else map.set(nums[index], value);
        if(count===0) counts.delete(value+1)
        else {
            counts.set(value+1, count)
        };
        if(counts.has(value)) {
            const count2 = counts.get(value);
            counts.set(value, count2+1);
        } else if(value!==0) {
            counts.set(value, 1);
        }
        
        index--;
    }
};