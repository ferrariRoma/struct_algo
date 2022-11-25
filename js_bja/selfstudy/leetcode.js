/* 
Input: [1,3,null,null,2]
Output: [3,1,null,null,2]

Input: [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
*/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = (root) => {
  let big, small, pivot;

  const DFS = (node) => {
    if (!node) return;

    if (node.left) DFS(node.left);

    if (pivot && pivot.val > node.val) {
      small = node;
      if (!big) big = pivot;
    }

    pivot = node;
    if (node.right) DFS(node.right);
  };

  DFS(root);
  [big.val, small.val] = [small.val, big.val];
};

// recoverTree([3, 1, 4, null, null, 2]);
// recoverTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
recoverTree([0, 1, 2, 3, 4, 5, 6]);
