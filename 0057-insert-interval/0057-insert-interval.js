/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    let ans = [], newEl = [null, null];
    const [start, end] = newInterval;
    for(let i = 0; i < intervals.length; i++) {
        const [currStart, currEnd] = intervals[i]
        if(currEnd < start) ans.push([currStart,currEnd]);
        else {
            if(newEl[0] === null) {
                if(currStart < start) newEl[0] = currStart;
                else newEl[0] = start;
            } 
            if(newEl[1] === null) {
                if(currStart > end) {
                    newEl[1] = end;
                    ans.push(newEl);
                    ans.push([currStart,currEnd]);
                } else if(currEnd > end) {
                    newEl[1] = currEnd;
                    ans.push(newEl);
                } else {
                    if(intervals[i+1] === undefined) {
                        newEl[1] = end;
                        ans.push(newEl);
                    }
                }
            } else {
                ans.push([currStart, currEnd]);
            }
        }
    }
    return ans;
};