/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let init = '';
    const result = [];
    const stack = [];
    let count = n;
    while(count!==0) {
        init += '('
        count--;
    }
    while(count!==n) {
        init+=')'
        count++;
    }
    result.push(init);
    stack.push(init);
    
    let firstCloserIndex;
    while(stack.length!==0) {
        const popped = stack.pop();
        firstCloserIndex = popped.indexOf(')');
        
        let copied = [...popped]
        for(let i = firstCloserIndex; i > 1; i--) {
            [copied[i-2], copied[i-1], copied[i]] = [copied[i-1], copied[i], copied[i-2]];
            const joined = copied.join('');
            if(!result.includes(joined)) {
                result.push(joined);
                stack.push(joined);
            }
        }
        
        copied = [...popped]
        for(let i = firstCloserIndex; i < n*2-1; i++) {
            [copied[i-1], copied[i], copied[i+1]] = [copied[i+1], copied[i-1], copied[i]];
            const joined = copied.join('');
            if(!result.includes(joined)) {
                result.push(joined);
                stack.push(joined);
            }
        }
    }
    return result;
};
