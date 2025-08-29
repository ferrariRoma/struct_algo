/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operand = []; // stack
    const checkOperator = (str) => {
        switch(str) {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
            default:
                return false;
        }
    }
    const operate = (x,y,z) => {
        switch(z) {
            case '+':
                return x+y;
            case '-':
                return x-y;
            case '*':
                return x*y;
            case '/':
                return x/y;
        }
    }

    for(const str of tokens) {
        if(checkOperator(str)) {
            const num1 = operand.pop();
            const num2 = operand.pop();
            const result = Math.trunc(operate(num2, num1, str));
            operand.push(result);
        } else {
            operand.push(+str);
        }
    }
    return operand[0]
};