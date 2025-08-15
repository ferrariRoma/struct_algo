/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const traversal = () => {
        const res = [];
        let currq = [root];
        while(currq.length) {
            const nextq = [], levels = [];
            const length = currq.length;
            for(let i = 0; i < length; i++) {
                const node = currq[i]
                if(node) {
                    if(typeof node.val === 'number') levels.push(node.val);
                    if(node.left) nextq.push(node.left);
                    if(node.right) nextq.push(node.right);
                }
            }
            levels.length > 0 && res.push(levels);
            currq = nextq;
        }
        return res;
    }
    return traversal();
};