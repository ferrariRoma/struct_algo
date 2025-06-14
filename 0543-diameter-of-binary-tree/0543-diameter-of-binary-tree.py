# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def recursiveHelper(node:Optional[TreeNode]) -> Tuple[int, int]:
            if node is None:
                return -1, 0
            leftDepth, leftDiameter = recursiveHelper(node.left)
            rightDepth, rightDiameter = recursiveHelper(node.right)
            currDepth = max(leftDepth, rightDepth) + 1
            currDiameter = max(leftDiameter, rightDiameter, leftDepth+rightDepth+2)
            return currDepth, currDiameter
        _, ans = recursiveHelper(root)
        return ans
