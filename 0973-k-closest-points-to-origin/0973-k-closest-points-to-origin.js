/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const coordinates = [];
    const dists = [];
    for(const [x, y] of points) {
        const res = x**2 + y**2;
        if(coordinates.length === k) {
            const max = Math.max(...dists);
            if(max > res) {
                const idx = dists.findIndex(dist => dist == max);
                coordinates[idx] = [x, y];
                dists[idx] = res;
            }
        } else {
            coordinates.push([x, y]);
            dists.push(res);
        }
    }
    return coordinates;
};