/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    const t = new Map(), status = new Map(), res = [];
    for(const [ball, colour] of queries) {
        if(status.has(ball)) {
            const preColour = status.get(ball);
            if(t.get(preColour) - 1 === 0) t.delete(preColour);
            else t.set(preColour, t.get(preColour) - 1);
        }
        status.set(ball, colour);
        t.set(colour, (t.get(colour) ?? 0) + 1);
        res.push(t.size);
    }
    return res;
};