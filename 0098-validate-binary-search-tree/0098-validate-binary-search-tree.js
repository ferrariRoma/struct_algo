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
var isValidBST = function(root) {
    const recur = (node) => {
        if(!node) return null;
        const l = recur(node.left);
        const r = recur(node.right);
        if(typeof l === 'boolean' || typeof r === 'boolean') {
            return false;
        }
        let max = null, min = null, arr = [];
        if(Array.isArray(l)) {
            max = Math.max(...l);
            arr.push(...l);
        }
        if(Array.isArray(r)) {
            min = Math.min(...r);
            arr.push(...r);
        }
        if(max !== null && max >= node.val) 
            return false;
        if(min !== null && node.val >= min) 
            return false;
        arr.push(node.val)
        return arr
    }
    const result = recur(root);
    if(typeof result === 'boolean')
        return false;
    return true;
};