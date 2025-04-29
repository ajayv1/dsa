/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    let map = new Map();

    function dfs(curr) {
        if (map.has(curr)) {
            return map.get(curr);
        }

        console.log(node);

        const copy = new Node(curr.val);
        map.set(curr, copy);

        for (const neighbor of curr.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy;
    }

    return dfs(node);
};