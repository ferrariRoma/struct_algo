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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sum = root ? root.val : null;
    let flag = false;
    const recursive = (node, sum) => {
        if(!node?.left && !node?.right && targetSum===sum) {
            return flag = true;
        };
        if(node?.left) {
            recursive(node.left, sum + node.left.val);
        };
        if(node?.right) {
            recursive(node.right, sum + node.right.val);
        }
    }
    recursive(root, sum);
    return flag;
};