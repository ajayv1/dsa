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
    let h2 = null;
    let h1 = head;

    while (h1 !== null) {
        let t = h1;
        h1 = h1.next;
        t.next = h2;
        h2 = t;
    }

    return h2;
};