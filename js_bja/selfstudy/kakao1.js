/**
 *
 * 1. 현재 날짜에서 Z,D의 보관개월 수에 따른 만료일을 계산한다.
 *  1-1. 1<= DD <=28 이다.
 * 2. 계산된 날짜를 바탕으로 priv에서 몇 번 인덱스가 만료가 됐는지 파악하자.
 *  2-1. 마지막은 결과를 오름차순으로 정렬해야 한다.
 *
 * @param {String} today 오늘 날짜를 알려준다. 형태 "YYYY.MM.DD"
 * @param {String[]} terms 약관의 유효기간을 담은 1차원 문자열 배열. 형태 "약관종류 유효기간" 약관종류는 중복되지 않는다. 유효기간은 보관할 수 있는 달의 수
 * @param {String[]} privacies 수집된 개인정보를 담은 1차원 문자열 배열. 형태 "날짜 약관종류". 날짜는 today이전 날짜만 주어진다. 언제 수집했는지에 대한 날짜
 * @returns 파기해야 할 개인 정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return
 */
// function solution(today, terms, privacies) {
//   const getTerms = terms.map((el) => el.split(" ")); // 인덱스 및 보관기간 가공
//   const getPriv = privacies.map((el) => el.split(" ")); // 각 인덱스 별 가공

//   const calcDeadline = getPriv.map((el) => {
//     // 각 인덱스 별 수집일 가공
//     const getDate = el[0].split(".");
//     // 인덱스 조회
//     const result = getTerms.map((element) => {
//       // 같은 인덱스가 나오면
//       if (element[0] === el[1]) {
//         // 해당 인덱스의 유효기간을 수집일에 더해서 만료일을 구해준다.
//         const calcDate = [0, 0, 0];
//         calcDate[1] = Number(getDate[1]) + Number(element[1]);
//         // 그 안에서 12달이 넘으면 년도에 1을 더해준다.
//         if (calcDate[1] > 12) {
//           calcDate[0] = Number(getDate[0]) + 1;
//           calcDate[1] -= 12;
//           calcDate[2] = Number(getDate[2]);
//         } else {
//           calcDate[0] = Number(getDate[0]);
//           calcDate[2] = Number(getDate[2]);
//         }
//         return calcDate;
//       }
//     });
//     return result;
//   });

//   const removeUndefined = calcDeadline
//     .map((el) => el.filter((element) => element !== undefined))
//     .flat();
//   /*     let resultIndex = removeUndefined.map((el, i) => {
//       if (el[0] < Number(getToday[0])) {
//         return i + 1;
//       } else if (el[0] === Number(getToday[0])) {
//         if (el[1] < Number(getToday[1])) {
//           return i + 1;
//         } else if (el[1] === Number(getToday[1])) {
//           if (el[2] <= Number(getToday[2])) {
//             return i + 1;
//           }
//         }
//       }
//       return null;
//     }); */
//   let resultIndex = removeUndefined.map((el, i) => {
//     if (new Date(el.join("-")) <= new Date(today)) return i + 1;
//   });

//   resultIndex = resultIndex.filter((el) => el !== undefined);
//   return resultIndex;
// }

// solution(
//   "2020.01.01",
//   ["Z 3", "D 5"],
//   [
//     "2019.01.01 D",
//     "2019.11.15 Z",
//     "2019.08.02 D",
//     "2019.07.01 D",
//     "2018.12.28 Z",
//   ]
// );

/* 

"2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

[1, 3]

"2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]

[1, 4, 5]
*/

// 수영님 풀이
// function solution(today, terms, privacies) {
//   let answer = [];
//   const YEAR = 12 * 28;
//   const MONTH = 28;
//   //  반복되는 작업이 있다면 함수를 만들자!
//   const calcDay = (arr) => {
//     return console.log(arr[0].slice(-2) * YEAR + +arr[1] * MONTH + +arr[2]);
//   };
//   const TODAY = calcDay(today.split("."));

//   let m = new Map();
//   terms.forEach((v) => {
//     let term = v.split(" ");
//     m.set(term[0], term[1]);
//   });

//   privacies.forEach((v, i) => {
//     let privacy = v.split(" ");
//     let d = calcDay(privacy[0].split("."));
//     if (TODAY >= +d + m.get(privacy[1]) * MONTH) {
//       answer.push(i + 1);
//     }
//   });
//   return answer;
// }

// 복습
// 문제유형 :: 이거 해시 테이블 아닐까? key, value 문제로 풀면 할 수 있을 거 같다. 목표는 n^2없이 풀어보기
function solution(today, terms, privacies) {
  const getTerms = terms.map((el) => el.split(" "));
  const getPrivacies = privacies.map((el) => el.split(" "));

  const termsMap = new Map([]);
  const privaciesMap = new Map([]);

  getTerms.map((el) => termsMap.set(el[0], el[1]));
  getPrivacies.map((el) => privaciesMap.set(el[0], el[1]));

  let getEachTerm;
  let getEachStart;
  let getDeadline = [];
  for (let eachPrivs of privaciesMap) {
    getEachTerm = termsMap.get(eachPrivs[1]);
    getEachStart = eachPrivs[0].split(".");
    getEachStart[1] = Number(getEachStart[1]) + Number(getEachTerm);
    if (getEachStart[1] > 12) {
      getEachStart[0] = Number(getEachStart[0]) + 1;
      getEachStart[1] -= 12;
    }
    getDeadline.push(getEachStart);
  }

  getDeadline = getDeadline.map((el) => el.join("-"));

  const result = [];
  getDeadline.map((el, i) => {
    if (new Date(el) <= new Date(today)) {
      result.push(i + 1);
    }
  });

  return result;
}

solution(
  "2022.05.19",
  ["A 6", "B 12", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);
solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);
