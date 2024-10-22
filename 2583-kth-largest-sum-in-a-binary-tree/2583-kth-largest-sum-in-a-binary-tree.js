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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const ans = [];

    const bfs = (curr) => {
        const next = [];
        let sum = 0;
        while(curr.length !== 0) {
            const node = curr.pop();
            sum+=node.val;
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);
        }
        ans.push(sum);
        if(next.length) bfs(next);
    }
    bfs([root]);
    ans.sort((a,b)=>b-a);
    return ans[k-1] ? ans[k-1] : -1;
};