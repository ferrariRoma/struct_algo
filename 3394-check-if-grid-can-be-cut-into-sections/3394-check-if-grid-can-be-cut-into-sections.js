/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    const checkCuts = (rectangles, dim) => {
        if(rectangles.length === 0) return false;
        const sorted = rectangles.sort((a,b) => a[dim] - b[dim]);
        let ans = 0, furthestEnd = sorted[0][dim+2];

        for(let i = 1; i < sorted.length; i++) {
            const currentStart = sorted[i][dim];
            if(currentStart >= furthestEnd) {
                ans++;
            }

            furthestEnd = Math.max(furthestEnd, sorted[i][dim+2]);
        }
        return ans >= 2;
    }
    return checkCuts(rectangles, 0) || checkCuts(rectangles, 1);
};