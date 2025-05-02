var mergeTwoLists = function(list1, list2) {
    let ans = new ListNode();
    
    function helper(l1, l2, current) {
        if (!l1 && !l2) return;
        
        if (!l1) {
            return current.next = l2;
            // return;
        }
        if (!l2) {
            return current.next = l1;
            // return;
        }
        
        if (l1.val < l2.val) {
            current.next = l1;
            helper(l1.next, l2, current.next);
        } else {
            current.next = l2;
            helper(l1, l2.next, current.next);
        }
    }
    
    helper(list1, list2, ans);
    return ans.next;
}
