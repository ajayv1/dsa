/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    let vis = Array.from({length: n}, () => Array.from({length: m}, () => 0));
    let dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    let count = 0;

    function dfs(i, j, grid, vis) {
        vis[i][j] = 1;

        for (const [dx, dy] of dir) {
            const nx = i + dx;
            const ny = j + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == 1 && vis[nx][ny] == 0) {
                dfs(nx, ny, grid, vis);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1 && vis[i][j] == 0) {
                dfs(i, j, grid, vis);
                count++;
            }
        }
    }

    return count;

};  