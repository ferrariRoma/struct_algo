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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];
    let stack = [];
    const recursiveHelper = (node) => {
        if(node?.val !== undefined) stack.push(node.val);
        if(!node?.left && !node?.right && stack.length !== 0) {
           const sum = stack.reduce((acc, curr) => acc+=curr);
           return sum === targetSum ? result.push([...stack]) : undefined;
        }

        if(node?.left) {
            recursiveHelper(node.left);
            if(stack.length > 1) stack.pop();
        }
        if(node?.right) {
            recursiveHelper(node.right);
            stack.pop();
        }
    }
    recursiveHelper(root);
    return result;
};