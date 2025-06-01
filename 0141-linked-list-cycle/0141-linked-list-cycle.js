/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    while(curr) {
        if(curr.visited) {
            return true;
        } else {
            curr.visited = true;
        }
        curr = curr.next;
    }
    return false
};