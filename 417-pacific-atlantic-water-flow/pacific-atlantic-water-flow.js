/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length;
    let n = heights[0].length;

    let pacific = Array.from({length: m}, () => Array.from({length: n}), () => false);
    let atlantic = Array.from({length: m}, () => Array.from({length: n}), () => false);

    let direction = [
        [-1, 0], 
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    function dfs(r, c, visited, prevHeight) {
        if (r < 0 || r >= m || c < 0 || c >= n || 
            visited[r][c] || 
            heights[r][c] < prevHeight
        ) return;

        visited[r][c] = true;

        for (let [dx, dy] of direction) {
            dfs(r + dx, c + dy, visited, heights[r][c]);
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific, heights[i][0]); // left
        dfs(i, n - 1, atlantic, heights[i][n - 1]); // right
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific, heights[0][j]); // top
        dfs(m - 1, j, atlantic, heights[m - 1][j]); // bottom
    }

    let result = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j])
            }
        }
    }

    return result;
};