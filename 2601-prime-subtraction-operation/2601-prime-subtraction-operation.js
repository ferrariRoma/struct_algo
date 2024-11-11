/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    /*
    니가 원하는 만큼, 연산을 해라.
    idx i를 집어. 이전에 집지 않은 거여야 해.
    그리고 소수 p를 집어. nums[i] 보다 확실히 적은.
    그리고 nums[i]을 p로 빼.
    만약에 너가 오름차순을 배열 nums를 만들 수 있다면? true
    없다면 false
    
    예시 1번을 보면,, 소수 3을 집어들고 인덱스 0부터 시작
    4 - 3 = 1 perfectò
    and second operation we picked prime number 7 and index is 1.
    subtract seven from nine and result is 2.
    [1,2,6,10]
    
    예시 2번을 보면 [6,8,11,12] 이미 오름차순이죠?
    
    예시 3번을 보면 [5,8,3]
    5을 3으로 [2,8,3]
    
    어떻게 풀면 좋을까?
    배열의 뒤에서 부터 하면 좋을까?
    [8,11,6,12] 라고 가정해보자. true임
    12에서 6을 보면 나보다 작음. 그럼 통과.
    6에서 11을 보면 나보다 큼! 안되는데?...ㅠㅠ
    그럼 11을 낮춰보자. 11-3 = 8. 안 돼!
    11 - 5 = 6 안 돼!!!
    11 - 7 = 4 돼. 굳
    4에서 8을 보면 나보다 큼!! 안 돼!!!
    8-3 = 5 안 돼!!
    8-5 = 3 돼!!!!
    그럼 최종적으로 [3,4,6,12]가 되면서 오름차순을 만들 수 있다.
    
    [5,8,3]
    3보다 8이 작게 될려면 8-7 = 1인데, 
    */
    if(nums.length === 1) return true;
    
    const isPrime = (num) => {
        if(num<=1) return false;
        if(num===2) return true;
        if(num%2===0) return false;
        
        for(let i=3; i<=Math.sqrt(num); i+=2) {
            if(num%i===0) return false;
        }
        return true;
    }
    
    const subtractHelper = (idx) => {
        // 가장 낮은 소수부터 체크하면서 다음 인덱스와 오름차순이 되는지만 체크하자.
        if(nums[idx] - 2 < nums[idx+1]) return nums[idx]-=2;
        for(let i = 3; i <= nums[idx]; i+=2) {
            if(isPrime(i) && nums[idx] - i < nums[idx+1])
                return nums[idx]-=i;
        }
        return nums[idx] = -1;
    }
    
    for(let i=nums.length-2; i>=0; i--) {
        if(nums[i] >= nums[i+1]) {
            subtractHelper(i);
            if(nums[i] < 1) return false;
        }
    }
    return true;
};