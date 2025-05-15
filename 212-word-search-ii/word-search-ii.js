/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

function buildTrie(words) {
    const root = new TrieNode();

    for (let word of words) {
        let node = root;

        for (let char of word) {
            if (!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }

        node.word = word;
    }

    return root;
}

var findWords = function(board, words) {
    let root = buildTrie(words);
    let n = board.length;
    let m = board[0].length;
    let result = new Set();
    let dir = [
        [0, 1], [0, -1], [-1, 0], [1, 0]
    ];

    function dfs(i, j, node) {
        let char = board[i][j];
        let child = node.children[char];

        if (!child) return;

        if (child.word) {
            result.add(child.word);
            child.word = null;
        }

        board[i][j] = "#";

        for (let [dx, dy] of dir) {
            const nx = i + dx;
            const ny = j + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] !== "#") {
                dfs(nx, ny, child);
            }
        }

        board[i][j] = char;
    }

    for(let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            dfs(i, j, root);
        }
    }

    return Array.from(result);
};