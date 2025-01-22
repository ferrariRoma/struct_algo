/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {   
    let point1 = 0, point2 = 0;
    grid.forEach((row, index) => {
        row.forEach((point) => {
            index == 0 ?
                point1+=point :
                point2+=point;
        })
    })

    let opt1 = point1-grid[0][0], opt2 = 0;
    let ans = Math.max(opt1, opt2);

    let index = 1;
    while(index<grid[0].length) {
        opt1 -= grid[0][index];
        opt2 += grid[1][index-1]
        ans = Math.min(Math.max(opt1, opt2), ans);
        index++;
    }
    return ans;
};