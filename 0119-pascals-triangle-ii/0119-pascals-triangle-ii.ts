function getRow(rowIndex: number): number[] {
    let triangle = [[1],[1,1]];

    if(rowIndex===0) {
        return [1];
    } else if(rowIndex===1) {
        return triangle[rowIndex];
    };

    for(let i=2; i<=rowIndex; i++) {
        let nextArr = Array(i+1);
        nextArr[0] = 1;
        nextArr[i] = 1;
        
        for(let j=1; j<i; j++) {
            nextArr[j] = triangle[i-1][j-1] + triangle[i-1][j]
        }

        triangle.push(nextArr);
    }

    return triangle[rowIndex];
};