/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
    const parents = Array(n).fill(-1);
    const depth = Array(n).fill(0);
    const componentCost = Array(n).fill(-1);

    const find = (vertex) => {
        if(parents[vertex] === -1) return vertex;
        return parents[vertex] = find(parents[vertex]);
    }

    const union = (u, v) => {
        const root1 = find(u);
        const root2 = find(v);
        if(root1 === root2) return;

        if(depth[root1] > depth[root2]) {
            parents[root2] = root1;
        } else if (depth[root1] < depth[root2]) {
            parents[root1] = root2;
        } else {
            parents[root1] = root2;
            depth[root2]++;
        }
    }

    for(const [u, v] of edges) {
        union(u, v);
    }

    for(const [u, v, w] of edges) {
        const root = find(u);
        componentCost[root] &= w;
    }

    const answer = [];
    for(const [u, v] of query) {
        if(find(u) !== find(v)) {
            answer.push(-1);
        } else {
            const root = find(u);
            answer.push(componentCost[root]);
        }
    }
    return answer;
};