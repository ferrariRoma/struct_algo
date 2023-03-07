/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null;

    const reverseFunc = (prevNode: ListNode | null, nextNode: ListNode | null): ListNode | null => {
        if(!nextNode) return prevNode;

        const originalNext = nextNode?.next;
        nextNode ? nextNode.next = prevNode : null;
        
        return reverseFunc(nextNode,originalNext);
    }

    return reverseFunc(null, head);
};