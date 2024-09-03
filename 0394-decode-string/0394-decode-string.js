/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let chars = '';
    
    [...s].forEach((ch, idx, arr)=>{
        if(isNaN(ch)) {
            // 숫자가 아닐 때
            if(ch === '[') {
                stack.push(chars);
                stack.push('[');
                chars = '';
                // 섹터 시작
            } else if(ch===']') {
                // 섹터 종료
                if(chars.length !== 0) {
                    stack.push(chars);
                    chars = '';
                }
                stack.push(']');
            } else {
                // 문자일 때
                chars += ch;
                if(arr.length -1 === idx) {
                    stack.push(chars);
                    chars = '';
                }
            }
        } else {
            // 숫자일 때
            if(chars.length !== 0) {
                if(isNaN(chars)) {
                    stack.push(chars);
                    chars = '';
                }
            }
            chars+=ch; // 두 자리 숫자일 수 있음
        }
    });
    
    let temp = '', tempStack = [], result = '', bracket = 0;
    while(stack.length !== 0) {
        const popElement = stack.pop();
        if(isNaN(popElement)) {
            if(popElement === '[') {
                bracket -= 1;
            } else if(popElement === ']') {
                bracket += 1;
                tempStack.push(temp);
                temp = '';
            } else {
                // 브라켓이 아닌 일반 문자
                temp = popElement + temp;
                if(bracket === 0) {
                    result = temp + result;
                    temp = '';
                }
            }
        } else {
            // 반복될 횟수를 나타내는 숫자라면
            temp = temp.repeat(popElement);
            if(tempStack.length !== 0) {
                temp = temp + tempStack.pop();
            }
            if(bracket === 0) {
                result = temp + result;
                temp = '';
            }
        }
    }
    
    return result;
};