/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const ans = [], tables = Array.from({length:numCourses}, ()=>new Map());
    for(let i = 0; i < prerequisites.length; i++) {
        const [a,b] = prerequisites[i];
        if(!tables[b].has(a)) tables[b].set(a);
    }
    const checkReq = (u, v) => {
        if(tables[v].has(u)) return true;
        else {
            const queue = [...tables[v].keys()];
            while(queue.length) {
                const temp = queue.pop();
                return checkReq(u, temp);
            }
            return false;
        }
    }
    for(let i = 0; i < queries.length; i++) {
        const [u, v] = queries[i];
        const res = checkReq(u, v);
        ans.push(res);
    }
    return ans;
};