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
    const ans = new ListNode();
    const dummy = ans;

    const recur = (l1, l2, newList) => {
        if(l1 === null && l2 ===null) {
            return;
        } else if(l1 === null) {
            return newList.next = l2;
        } else if(l2 === null) {
            return newList.next = l1;
        }

        if(l1.val < l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
            newList.next = l2;
            l2 = l2.next;
        }
        recur(l1, l2, newList.next);
    }

    recur(list1, list2, dummy);

    return ans.next;
};