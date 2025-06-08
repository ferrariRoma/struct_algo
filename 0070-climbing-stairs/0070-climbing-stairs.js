/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 1,2단계는 단계만큼의 방법이 존재
    if(n<=2) return n;

    let stair2 = 1, stair1 = 2; // stair2는 2스텝 전, stair1은 1스텝 전
    for(let i = 3; i <= n; i++) {
        const curr = stair1+stair2; // 그 스텝에 오는 경우의 수를 모두 합친 것이 curr에 도착하기 위한 경우의 수
        stair2 = stair1; // step2는 한 스텝 전인 stair1의 위치로
        stair1 = curr; // stair1은 현재 스텝인 curr의 위치로
    }
    return stair1;
};