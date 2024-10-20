/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const s = [];
    let idx = 0, curr;
    const helper = () => {
        const arr = [];
        let result, p;
        while(true) {
            p = s.pop();
            arr.push(p);
            if(p === '!' || p === '&' || p === '|')
                break;         
        }
        const oper = arr.pop();
        switch(oper) {
            case '!':
                result = !arr.pop();
                break;
            case '&':
                result = arr.reduce((acc, cur) => acc && cur);
                break;
            case '|':
                result = arr.reduce((acc, cur) => acc || cur);
                break;
        }
        s.push(result);
        return result;
    }
    let ans;
    while(idx !== expression.length) {
        curr = expression[idx];
        switch(curr) {
            case '!':
            case '&':
            case '|':
                s.push(curr);
                break;
            case '(':
                break;
            case ')':
                helper();
                break;
            case 't':
                s.push(true);
                break;
            case 'f':
                s.push(false);
                break;
        }
        idx++;
    }
    return s[0];
};