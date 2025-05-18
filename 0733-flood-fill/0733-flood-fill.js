/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const stack = [];
    const h = image.length, w = image[0].length;
    const target = image[sr][sc];
    if(image[sr][sc] != color) stack.push([sr,sc]);
    while(stack.length) {
        const [cx, cy] = stack.pop();
        if(image[cx][cy] == target && image[cx][cy] != color) {
            image[cx][cy] = color;
        }
        for(const [dx, dy] of dirs) {
            const nx = cx + dx, ny = cy + dy;
            if(nx >= 0 && ny >= 0 && nx < h && ny < w && image[nx][ny] == target && image[nx][ny] != color) {
                stack.push([nx, ny]);
            }
        }
    }
    return image;
};