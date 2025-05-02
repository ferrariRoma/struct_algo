/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let ans = null;

    const recurHelper = (list1, list2, newNode) => {
        console.log(list1, list2, newNode);
        if(list1 === null && list2 === null) return newNode;
        if(list1 !== null && list2 !== null) {
            if(list1.val < list2.val) {
                newNode = new ListNode(list1.val, undefined);
                list1 = list1.next;
            } else {
                newNode = new ListNode(list2.val, undefined);
                list2 = list2.next;
            }
            recurHelper(list1.next, list2.next, newNode.next);
        } else if(list1 !== null) {
            newNode = new ListNode(list1.val, undefined);
            recurHelper(list1.next, list2, newNode.next);
        } else {
            newNode = new ListNode(list2.val, undefined);
            recurHelper(list1, list2.next, newNode.next);
        }
    }

    recurHelper(list1, list2, ans);

    return ans;
};