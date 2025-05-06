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
 * @return {number[]}
 */

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let queue = [root], ans = [];
    let count = 0;

    while (count < queue.length) {
        let size = queue.length - count;
        let curLevel = [];

        for (let i = 0; i < size; i++) {
            let cur = queue[count++];
            curLevel.push(cur.val);

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }

        ans.push(curLevel);
    }

    return ans;
};

var rightSideView = function(root) {
    let levels = levelOrder(root);
    let ans = [];

    for (const level of levels) {
        ans.push(level[level.length - 1]);
    }

    return ans;
};