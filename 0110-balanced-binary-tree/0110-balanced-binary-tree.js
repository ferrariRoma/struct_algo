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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;

    const helper = (n, d) => {
        if(!n) return d-1;         
        const ld = helper(n.left, d+1);
        const rd = helper(n.right, d+1);
        if(typeof ld === 'boolean' || typeof rd === 'boolean') return false;
        return Math.abs(ld - rd) >= 2 ? false : ld > rd ? ld : rd;
    }
    return typeof helper(root, 0) === 'number';
};