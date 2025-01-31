/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let count = 0;

    let vis = Array.from({length: row}, () => Array.from({length: col}, () => 0));

    let dir = [
        [0, -1], // Left
        [0, 1],  // Right
        [1, 0],  // Down
        [-1, 0]  // Up
    ];

    let area = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1 && !vis[i][j]) {
                const res =  dfs(i, j, grid, vis, dir);
                area = Math.max(area, res);
            }
        }    
    }

    return area;

};

function dfs(i, j, grid, vis, dir, area = 1) {
    let row = grid.length;
    let col = grid[0].length;

    vis[i][j] = 1;

    for (const [x, y] of dir) {
        const nx = i + x;
        const ny = j + y;

        if (nx >= 0 && nx < row && ny >= 0 && ny < col && grid[nx][ny] === 1 && vis[nx][ny] === 0) {
            area += dfs(nx, ny, grid, vis, dir);
        }
    }

    return area;
}