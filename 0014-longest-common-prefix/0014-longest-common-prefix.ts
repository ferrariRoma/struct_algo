function longestCommonPrefix(strs: string[]): string {
    // 1. input에서 가장 짧은 문자열 요소를 찾자. 
    let shortestStrs = strs[0];
    for(let i=1; i<strs.length; i++) {
       if(shortestStrs.length > strs[i].length) {
           shortestStrs = strs[i];
       } 
    }

    // 2. 그 문자열의 문자 하나 하나를 해당 배열의 모든 요소에 들어있는지 확인하자.
    const checkEachElement = (strArr:string[], str:string):boolean => {
        let isExist = true;
        for(let strEl of strArr) {
            if(strEl.startsWith(str)) {
                continue;
            } 
            else {
                isExist = false;
                break;
            };
        }
        return isExist;
    }
    
    // 3. 들어가 있다면 다음 문자도 이어서 모든 문자열에 있는지 확인한다.
    let character = '';
    let answer: string;
    for(let shortestStr of shortestStrs) {
        character += shortestStr;
    // 3.1. 없다면 일단 이때까지 그 문자열을 변수에 저장해두자! 이미 저장된 문자열이 있으면 더 긴 문자열을 저장하자.
    // 3.2. 있다면 계속해서 다음 문자열이 있는지 확인해보자.
        if(checkEachElement(strs,character)) {
            console.log('character ::: ', character);
            answer = character;
        } else {
            break;
        }
    }

    // 4. 마지막엔 문자열을 반환하고 문자열이 없다면 빈 문자열을 반환하자.
    console.log('answer ::: ', answer);
    return answer ? answer : "";
};