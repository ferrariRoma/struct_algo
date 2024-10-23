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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    root.val = 0;
    if(root?.left?.val) root.left.val = 0;
    if(root?.right?.val) root.right.val = 0;

    const bfs = (stack) => {
        const s = [];
        while(stack.length !== 0) {
            const node = stack.pop();
            s.push(node);
        };
        const oldSum = s.map(el => (el?.left?.val ?? 0) + (el?.right?.val ?? 0));
        const sum = oldSum.reduce((acc, curr)=>acc+curr);
        const newSum = oldSum.map(el => sum-el);
        const nextS = [];
        let idx = newSum.length-1;
        while(s.length !== 0) {
            const node = s.pop();
            if(node?.left?.val) {
               node.left.val = newSum[idx]
               nextS.push(node.left);
            };
            if(node?.right?.val) {
               node.right.val = newSum[idx];
               nextS.push(node.right);
            }
            idx--;
        }
        if(nextS.length) bfs(nextS);
    }
    bfs([root.left, root.right]);
    return root;
};