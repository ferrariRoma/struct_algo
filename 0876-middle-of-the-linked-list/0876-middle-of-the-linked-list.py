# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        leng = 0
        while node != None:
            node = node.next
            leng+=1
        middle = math.floor(leng/2)
        leng = 0
        node = head
        while leng < middle:
            node = node.next
            leng+=1
        return node