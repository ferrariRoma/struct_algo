# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def recursive(node: Optional[TreeNode]) -> int:
            if node is None:
                return 0;
            leftNode = recursive(node.left)
            rightNode = recursive(node.right)
            return max(leftNode, rightNode) + 1
        return recursive(root)