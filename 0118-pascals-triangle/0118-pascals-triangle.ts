function generate(numRows: number): number[][] {
    let triangle = [[1],[1,1]];

    if(numRows===1) {
        return [[1]];
    } else if(numRows===2) {
        return triangle;
    };

    for(let i=2; i<numRows; i++) {
        let nextArr = Array(i+1);
        nextArr[0] = 1;
        nextArr[i] = 1;
        
        for(let j=1; j<i; j++) {
            nextArr[j] = triangle[i-1][j-1] + triangle[i-1][j]
        }

        triangle.push(nextArr);
    }

    return triangle;
};