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

function deepestLeavesSum(root: TreeNode | null): number {

  const checkFn = (root:TreeNode|null, pot:number[],count:number = 0):number[] => {
    if(!root) {
      pot.push(count)
      return pot;
    };

    count+=1;
    checkFn(root.left, pot, count);
    checkFn(root.right, pot, count);
  }

  const sumFn = (root:TreeNode|null, max:number, maxPot:number[], count:number=0):number[] => {
    if(!root) return;

    count++;
    if(max === count) {
      maxPot.push(root.val);
      return maxPot;
    }

    sumFn(root.left, max, maxPot, count);
    sumFn(root.right, max, maxPot, count);
  }

  let pot:number[] = [];
  checkFn(root, pot);

  const MAX = Math.max(...pot);
  let maxPot:number[] = [];
  sumFn(root, MAX, maxPot);

  return maxPot.reduce((acc:number, el:number) => acc+el);;
};