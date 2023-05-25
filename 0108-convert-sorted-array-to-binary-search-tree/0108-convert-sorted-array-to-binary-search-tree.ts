/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const setTree = (arr:number[]):TreeNode|null => {
        const leng = arr.length;
        if(leng>2) {
            const mid = new TreeNode(arr[Math.floor(leng/2)]);
            const leftSide = arr.slice(0,Math.floor(leng/2));
            const rightSide = arr.slice(Math.floor(leng/2)+1);
            mid.left = setTree(leftSide);
            mid.right = setTree(rightSide); 
            return mid;
        } else {
            const newNode = new TreeNode(arr[0]);
            arr[1] !== undefined ? newNode.right = new TreeNode(arr[1]) : null; 
            return newNode;
        }
    };
    const answer = setTree(nums);
    return answer;
};