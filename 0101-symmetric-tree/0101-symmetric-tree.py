# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def recurSwitch(node):
            if node == None:
                return
            node.left, node.right = node.right, node.left
            recurSwitch(node.left)
            recurSwitch(node.right)
        recurSwitch(root.left)
        
        rstack = []
        lstack = []
        def recurStack(node, stack):
            if node == None:
                return stack.append(None)
            stack.append(node.val)
            recurStack(node.left, stack)
            recurStack(node.right, stack)
        recurStack(root.left, lstack)
        recurStack(root.right, rstack)
        return rstack == lstack