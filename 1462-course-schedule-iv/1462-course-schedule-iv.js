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
    const dfs = (u, v, visited) => {
        if(visited[v]) return;
        else if(tables[v].size == 0) return visited[v] = false;
        else if(tables[v].has(u)) return true;
        else {
            visited[v] = true;
            const requisites = [...tables[v].keys()];
            while(requisites.length) {
                const temp = requisites.pop();
                const res = dfs(u, temp, visited);
                if(res) return true;
            }
            return false;
        }
    }
    for(let i = 0; i < queries.length; i++) {
        const [u, v] = queries[i];
        const visited = Array(numCourses).fill(false);
        const res = dfs(u,v,visited);
        ans.push(res);
    }
    return ans;
};