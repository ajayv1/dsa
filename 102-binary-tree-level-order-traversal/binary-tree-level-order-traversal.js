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
    let ans = [];

    let count = 0;
    let queue = [root];
    
    if (!root) return ans;

    while (count < queue.length) {
        let size = queue.length - count;
        let temp = [];

        for (let i = 0; i < size; i++) {
            let cur = queue[count++];
            temp.push(cur.val);

            if (cur.left) {
                queue.push(cur.left);
            }

            if (cur.right) {
                queue.push(cur.right);
            }
        }

        ans.push(temp);
    }

    return ans;
};

// var levelOrder = function(root) {
//     let queue = [];
//     let ans = [];

//     if (!root) return ans;

//     queue.push(root);

//     while (queue.length) {
//         let size = queue.length;
//         let temp = [];

//         for (let i = 0; i < size; i++) {
//             let item = queue.shift();
//             temp.push(item.val);

//             if (item.left) {
//                 queue.push(item.left);
//             }

//             if (item.right) {
//                 queue.push(item.right);
//             }
//         }

//         ans.push(temp);
//     }

//     return ans;
// };