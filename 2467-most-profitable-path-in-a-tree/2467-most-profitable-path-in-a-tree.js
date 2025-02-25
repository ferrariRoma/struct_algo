/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    const tree = new Map();
    for(const [a,b] of edges) {
        if(!tree.has(a)) tree.set(a, [b]);
        else tree.get(a).push(b);
        if(!tree.has(b)) tree.set(b, [a]);
        else tree.get(b).push(a);
    }

    const bobVisited = Array(amount.length).fill(false);
    const bobDFSHelper = (bobPos, visited, path = new Map(), step = 0) => {
        if(bobPos === 0) {
            path.set(bobPos,step+1);
            return path;
        }
        visited[bobPos] = true;
        path.set(bobPos, step+1);
        const adjacent = tree.get(bobPos);
        let res;
        for(const nextPos of adjacent) {
            if(visited[nextPos]) continue;
            res = bobDFSHelper(nextPos, visited, path, step+1);
            if(res === undefined) path.delete(nextPos);
            else return res;
        }
    }
    const bobPath = bobDFSHelper(bob, bobVisited);

    const aliceVisited = Array(amount.length).fill(false);
    let aliceIncome = new Map(), step = 1, queue = [[tree.get(0), amount[0]]];
    aliceVisited[0] = true;

    let res = Number.MIN_SAFE_INTEGER;
    while(queue.length) {
        const tempQ = [];
        step++;
        for(const [nodes, income] of queue) {
            if(nodes.length === 1 && aliceVisited[nodes[0]]) res = Math.max(res, income);
            for(const nextPos of nodes) {
                if(aliceVisited[nextPos]) continue;
                let alicePaid;
                aliceVisited[nextPos] = true;
                if(bobPath.get(nextPos) < step) alicePaid = 0;
                else if(bobPath.get(nextPos) === step) alicePaid = amount[nextPos]/2
                else alicePaid = amount[nextPos];
                tempQ.push([tree.get(nextPos), income + alicePaid]);
            }
        }
        queue = tempQ;
    }
    return res;
};