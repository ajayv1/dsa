/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    function inOrder(root) {
        if (root === null || result !== null) return;

        inOrder(root.left);

        count++;
        if (count == k) {
            result = root;
            return;
        }

        inOrder(root.right); 
    }

    inOrder(root);

    if (result !== null) return result?.val;
};