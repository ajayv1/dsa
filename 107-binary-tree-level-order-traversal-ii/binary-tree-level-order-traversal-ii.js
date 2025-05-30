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
var levelOrderBottom = function(root) {
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

    return ans.reverse();

};