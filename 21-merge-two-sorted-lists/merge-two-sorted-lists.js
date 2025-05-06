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
    if (!list1) return list2;
    if (!list2) return list1;

    let head3 = new ListNode();

    let cur = head3;
    let h1 = list1;
    let h2 = list2;

    while (h1 && h2) {
        if (h1.val < h2.val) {
            cur.next = h1;
            h1 = h1.next;
        } else {
            cur.next = h2;
            h2 = h2.next;
        }

        cur = cur.next;
    }

    cur.next = h1 || h2;

    return head3.next;
};