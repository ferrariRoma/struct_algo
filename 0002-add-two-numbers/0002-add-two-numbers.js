/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const loopHelper = (linked) => {
        let num = '';
        let tempNode = linked;
        while(tempNode) {
            num = String(tempNode.val)+num;
            tempNode = tempNode.next;
        }
        return num;
    }
    const addResultArray = [...String(BigInt(loopHelper(l1)) + BigInt(loopHelper(l2)))];
    const list = new ListNode(addResultArray.pop());
    let tempList = list;
    while(addResultArray.length!==0) {
        tempList.next = new ListNode(addResultArray.pop());
        tempList = tempList.next;
    }
    return list;
};