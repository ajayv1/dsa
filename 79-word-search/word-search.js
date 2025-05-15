/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

const dfs = (board, i, j, n, m, word, index) => {
    if (index === word.length) {
        return true;
    }

    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== word[index]) {
        return false;
    }

    let temp = board[i][j];
    board[i][j] = "#";

    for (let [dx, dy] of dir) {
        let nx = i + dx;
        let ny = j + dy;

        if (dfs(board, nx, ny, n, m, word, index + 1)) return true;
    }

    board[i][j] = temp;
    return false;
}

var exist = function(board, word) {
    let n = board.length;
    let m = board[0].length;

    let found = false;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(board, i, j, n, m, word, 0)) return true;
            }
        }
    }

    return found;
};