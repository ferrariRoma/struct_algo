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
var invertTree = function(root) {
    // 내부 helper 함수 정의
    function helper(node) {
        if (node === null) return;
        // 자식 노드들을 재귀적으로 뒤집기
        helper(node.left);
        helper(node.right);
        // 현재 노드의 left, right를 swap
        [node.left, node.right] = [node.right, node.left];
    }
    helper(root);
    return root;
};