// 다트게임
/**
 *
 * @param {*} dartResult
 * @returns
 *
 * 3번의 기회, 각 기회마다 0~10점
 * 조건-1 : S는 점수를 1제곱, D는 2제곱, T는 3제곱
 * 조건-2 : *는 해당 점수와 바로 전에 얻은 점수를 2배로, 점수를 2배, #는 해당 점수를 마이너스함
 * 조건-3 : *는 중첩 가능. 중첩된 경우는 *가 4배가 된다.
 * 조건-4 : *는 #과 중첩 가능. 이 경우 점수는 -2배가 된다.
 * 조건-5 : Single, Double, Triple은 점수마다 하나씩 존재한다.
 * 조건-6 : *와 #은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수 있다.
 *
 * 1S2D*3T,	37,	11 * 2 + 22 * 2 + 33
 * 1S*, 2D*, 3T
 * 1x1(x2), 2x2(x2), 3x3x3
 *
 * 1D#2S*3S, 5, 12 * (-1) * 2 + 21 * 2 + 31
 * 1D#* 2S* 3S
 * 1x1(x-1)(x2),2(x2) ,3
 *
 * 시나리오
 * 1. dartResult를 배열로 분해.
 * 1S2D*3T => 1 S ,2 D * ,3 T
 * 숫자 앞에서 나눠주면 딱! split()에서 정규표현식을 쓰면 해결 가능!
 * 해결 안됨! split을 쓰니까 숫자를 기준으로 나눠주기 때문에 숫자가 나눠진 배열에서 다 사라짐
 *
 * 그럼 그냥 Spread연산자 써서 다 나눠준 다음에 시작을 하자.
 *
 * 2. 숫자에다가 S면 땡, D면 한 번, T면 두 번 더 곱해준다.
 * isNaN()을 사용해서 숫자면 오케이,
 * =>아니라면 S,D,T문자인지를 확인!(*,#은 걸러냄)
 * =>SDT이면 각 문자열에 따라 앞 숫자 요소를 몇 번 더 반복해주는지 결정
 * =>*#이면 해당 숫자와 그 앞에 숫자에 대한 x2 or x-1을 해준다.
 *
 *
 *
 */

/* function solution(dartResult) {
  let dart = dartResult;
  dart = [...dart];

  for (let i = 0; i < dart.length; i++) {
    // 계산이 완료된 요소에 관해서는 complete라는 문자열을 넣었음
    if (dart[i] === "complete") continue;

    if (!isNaN(dart[i])) {
      // isNaN()을 사용해서 숫자면 정수로 파싱
      dart[i] = Number(dart[i]);
    } else if (dart[i] === "S" || dart[i] === "D" || dart[i] === "T") {
      // SDT문자 걸러내기 및 각 문자열에 대한 연산진행.
      // 문자열에 맞는 점수를 앞 수를 가져오기
      if (dart[i] === "S") {
        dart[i] = dart[i - 1];
        dart[i - 1] = "complete";
      } else if (dart[i] === "D") {
        dart[i] = dart[i - 1] * dart[i - 1];
        dart[i - 1] = "complete";
      } else if (dart[i] === "T") {
        dart[i] = dart[i - 1] * dart[i - 1] * dart[i - 1];
        dart[i - 1] = "complete";
      }
    }
  }
  dart = dart.join("").split("complete");
  console.log(dart);

  dart.reduce(
    (acc, el, i, all) =>
      //   {
      //     if (all[i + 1].includes("#") || all[i + 1].includes("*")) {
      //       if (all[i + 1].includes("#")) {
      //         el *= -1;
      //         all[i + 1] *= -1;
      //       } else if (all[i + 1].includes("*")) {
      //         el *= 2;
      //         all[i + 1] *= 2;
      //       }
      //       return acc + el;
      //     }
      //   }
      console.log(all[i].includes("#")),
    0
  );
  console.log(dart);
} */

/**
 *
 * @param {*} dartResult
 *
 * 10이 존재한다는 걸 간과했다. 10이 존재하는 이상 로직이 여기서 더 복잡해지기 때문에 다 나눌 수는 없음!..ㅜㅜ
 * 정규표현식을 어떻게 해서든지 쓰자.
 *
 * 찾아보니 match라는 메소드가 있다.
 * 배열을 반환해줌. /g플래그를 사용하니까 해당되는 걸 배열로 반환해줌!
 *
 * 첫 번째는 테스트 케이스 실패!
 * 13, 14, 16, 17, 19, 20, 21, 23, 25, 27, 31
 */

function solution(dartResult) {
  let dartString = dartResult;
  dartString = dartString.match(/\d+\w(\*|\#)?/g);
  console.log(dartString);

  const tools = {
    S: 1,
    D: 2,
    T: 3,
    "#": -1,
    "*": 2,
    undefined: 1,
  };

  const result = [];
  for (let i = 0; i < dartString.length; i++) {
    const dartPoint = dartString[i].match(/(\d{1,2})(S|D|T)(\*|\#)?/);
    console.log(dartPoint);
    result.push(
      Math.pow(dartPoint[1], tools[dartPoint[2]]) * tools[dartPoint[3]]
    );

    if (dartPoint[3] !== undefined) {
      if (dartPoint[3] === "*")
        result[i - 1] = result[i - 1] * tools[dartPoint[3]];
    }
  }
  console.log(result);
  return result.reduce((acc, el, i, all) => acc + el, 0);
}

// solution("1S2D*3T");
console.log(solution("1D2S#10S"));
// solution("1D2S0T");
// solution("1T2D3D#");
