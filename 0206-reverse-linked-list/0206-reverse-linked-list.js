/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const helper = (node, newNextNode = null) => {
        if(!node) return newNextNode;
        const newNode = new ListNode(node.val);
        newNode.next = newNextNode;
        return helper(node.next, newNode);
    }
    return helper(head);
};