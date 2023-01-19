/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let isStrict;
    let numsLength = nums.length;
    let copyNums;

    // 요건 충족하는지 확인하는 배열
    const checkIncrease = (numbers) => {
        let answer, prev;

        // 반복문을 통해서 increasing인지 확인 => 다른 방법으로는 정렬 메소드 이후에 기존 배열과 같은지 확인 하는 방법도 있겠는 걸?
        for(let number of numbers) {
            if(!prev) {
                prev = number;
                // 첫 번째 요소는 비교할 게 없으니까 할당하고 넘어가자.
                continue;
            }
            // 조건을 충족하지 않으면 false
            if(prev>=number) {
                return answer = false;
            }
            // 조건을 충족하면 계속 
            prev = number;
        }
        answer = true;
        return answer;
    }

    for(let i = 0; i < numsLength; i++) {
        copyNums = [...nums];
        // 배열의 한 요소가 빠진 새로운 배열을 변수에 저장한다.
        copyNums.splice(i, 1);
        // 새로운 배열이 Strictly Increasing 요건을 충족하는지 확인한다.
        isStrict = checkIncrease(copyNums);
        // 만약 한 번이라도 그 요건을 충족하면 true 반환
        if(isStrict) return true;
        // 아니면 다음 요소가 빠진 새로운 배열을 변수에 저장한다. => 반복문으로 구현
    }
    // 배열의 끝까지 와서도 요건을 충족한 적이 단 한 번도 없다면 false
    return false;
};