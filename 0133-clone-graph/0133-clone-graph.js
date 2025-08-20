/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    const map = new Map();
    const q = [node];
    map.set(node, new _Node(node.val));
    while(q.length) {
        const cur = q.shift();
        for(const nei of cur.neighbors) {
            if(!map.has(nei)) {
                map.set(nei, new _Node(nei.val));
                q.push(nei);
            }
            map.get(cur).neighbors.push(map.get(nei));
        } 
    }
    return map.get(node);
};