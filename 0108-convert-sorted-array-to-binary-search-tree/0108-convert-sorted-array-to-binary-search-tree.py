# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def makeTree(arr):
            if len(arr) == 0:
                return None
            half = len(arr)//2
            leftSide = makeTree(arr[0:half])
            rightSide = makeTree(arr[half+1:len(arr)])
            return TreeNode(arr[half], leftSide, rightSide)
        return makeTree(nums)