/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
    const horizontal = [], vertical = [];
    for(let i = 0; i < rectangles.length; i++) {
        const [x1, y1, x2, y2] = rectangles[i];
        horizontal.push([i, y1, 1]);
        horizontal.push([i, y2, 2]);
        vertical.push([i, x1, 1]);
        vertical.push([i, x2, 2]);
    }

    horizontal.sort((a,b) => a[1] - b[1] || b[2] - a[2]);
    vertical.sort((a,b) => a[1] - b[1] || b[2] - a[2]);

    console.log(horizontal);
    console.log(vertical);
    const horizontalTable = new Map();
    const startHorizontal = horizontal[0][1], endHorizontal = horizontal[horizontal.length-1][1];
    let cuts = 0;

    // check horizontal
    for(const [index, y] of horizontal) {
        if(horizontalTable.has(index)) {
            horizontalTable.delete(index);
            if(horizontalTable.size === 0 && startHorizontal !== y && endHorizontal !== y) cuts++;
        } else {
            horizontalTable.set(index, y);
        }
    }

    if(cuts >= 2) return true;

    const verticalTable = new Map();
    const startVertical = vertical[0][1], endVertical = vertical[vertical.length-1][1];
    cuts = 0;
    // check vertical
    for(const [index, x] of vertical) {
        if(verticalTable.has(index)) {
            verticalTable.delete(index);
            if(verticalTable.size === 0 && x !== startVertical && x !== endVertical) cuts++;
        } else {
            verticalTable.set(index, x);
        }
    }

    if(cuts >= 2) return true;

    return false;
};