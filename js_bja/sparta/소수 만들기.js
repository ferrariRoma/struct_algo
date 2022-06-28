// 소수 만들기

/* const checked = (sumedNum) => {
  // 어차피 소수인지 아닌지만 판별하려면 그냥 제곱근 씌워서 훨씬 더 적은 수만
  // 탐지해도 알 수 있다.
  for (let n = 2; n <= Math.sqrt(sumedNum); n++) {
    if (sumedNum % n === 0) return false;
  }
  return true;
};

function solution(nums) {
  const length = nums.length;
  let one,
    two,
    sum,
    answer = 0;
  // 3중 for문을 통해 중복된 부분을 제외하고 nums 길이만큼 반복문을 돈다.
  // 각각 중복되지 않게 더해주고,
  // checked함수를 통해서 소수인지 검증 후,
  // 소수이면 answer을 더해준다.
  for (let i = 0; i < length - 2; i++) {
    one = nums[i];
    for (let j = i + 1; j < length - 1; j++) {
      two = nums[j];
      for (let m = j + 1; m < length; m++) {
        sum = one + two + nums[m];
        if (checked(sum)) answer++;
      }
    }
  }
  return answer;
} */

// solution([1, 2, 3, 4]);

// 복습하기!
function solution(nums) {}
solution([1, 2, 7, 6, 4]);
