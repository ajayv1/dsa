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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    if (root === null) return -1;

    let prev = null;
    let min = Number.MAX_SAFE_INTEGER;

    function inOrder(node) {
        if (!node) return null;

        inOrder(node.left);
        if (prev !== null && node.val !== null) {
            min = Math.min(min, Math.abs(node.val - prev));
        }
        if (node.val !== null) {
            prev = node.val;
        }
        inOrder(node.right);
    }

    inOrder(root);

    return min;

};