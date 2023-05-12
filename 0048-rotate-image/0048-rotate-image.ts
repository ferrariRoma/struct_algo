/**
 Do not return anything, modify matrix in-place instead.
 
 -어떤 문제인가?-
 이차원 배열을 90도 방향으로 돌려라.
 
 -문제의 경계조건은 무엇인가?-
 
 
 -수도코드-
 1. 이차원 배열을 깊은 복사를 한다.
 2. 첫 번째 줄을 마지막 세로 줄에 넣는다. arr.length-1
    두 번째 줄을 끝에서 두 번째 줄에 넣는다. arr.length-2
    세 번째 줄을 끝에서 세 번째 줄에 넣는다 arr.length-3
    위는 while문으로 한다. 탈출 조건은 n<0이면 될 것 같다.
 
 -문제풀기 혹은 어려운 부분 떼어내기-
 
 -리팩토링하기-
 복사를 하지 않고 할 수 없을까? 사실 이미 args에 2차원 배열이 있으면 공간 복잡도는 O(n^2)이라 하나 더 해진다고 해도 O(2n^2) 밖에 더 안되겠지만...
 
 */
function rotate(matrix: number[][]): void {
    // const copy = Array.from(matrix,arr=>new Array(...arr));
    // let len = matrix.length-1;
    // for(let i=0;i<=len;i++) {
    //     for(let j=0;j<=len;j++) {
    //     }
    // }
    let len = matrix.length-1;
    const obj = {};
    matrix.forEach((arr,i)=> {
        obj[len-i] = [...arr];
    })
    
    let x=0, y=0;
    while(x<=len) {
        matrix[x][y] = obj[y][x];
        y++;
        if(y>len) {
            x++;
            y=0;
        }
    }
};