/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

bool isPalindrome(struct ListNode* head) {
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while(fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    if(fast != NULL) {
        slow = slow->next;
    }

    struct ListNode* reverseList(struct ListNode* curr) {
        struct ListNode* prev = NULL;
        struct ListNode* next;

        while(curr) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    struct ListNode* second = reverseList(slow);
    struct ListNode* first = head;

    while(second) {
        if((*first).val != (*second).val) {
            return false;
        }
        first = first->next;
        second = second->next;
    }
    return true;
}