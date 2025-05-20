/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const helper = (node) => {
        if(!node) return null;
        if(node.val > p.val && node.val > q.val) {
            return helper(node.left);
        } else if(node.val < p.val && node.val < q.val) {
            return helper(node.right);
        }
        return node;
    }
    return helper(root);
};