/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function (word1, word2) {
    let n = word1.length; 
    let m = word2.length;

    let dp = Array.from({length: n + 1}, () => Array.from({length: m + 1}, () => 0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i; // delete i char
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j; // insert all j
    }

    // dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {                    // delete,  insert,     replace
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
            }
        }
    }

    return dp[n][m];

}

// var minDistance = function(word1, word2) {
//     let n = word1.length;
//     let m = word2.length;
//     let dp = new Array(n).fill().map(() => new Array(m).fill(-1));

//     return distance(word1, n - 1, word2, m - 1, dp);
// };
// var distance = function (A, i, B, j, dp) {

//     if ((i < 0 && j >= 0) || (j < 0 && i >= 0)) return Math.abs(i - j);
//     if (i < 0 || j < 0) return 0;

//     if (dp[i][j] === -1) {
//         if (A[i] === B[j]) {
//             dp[i][j] = distance(A, i - 1, B, j - 1, dp);
//         } else {
//             dp[i][j] = 1 + Math.min(
//                 distance(A, i - 1, B, j - 1, dp), // replaced
//                 distance(A, i - 1, B, j, dp), // delete
//                 distance(A, i, B, j - 1, dp) // insert (i+1 & j char will match so reduce both by 1)
//             );
//         }
//     }

//     return dp[i][j];
// };

// var minDistance = function(word1, word2) {
//     const m = word1.length;
//     const n = word2.length;
//     const dp = new Array(m+1).fill(null).map(() => new Array(n+1).fill(null));
    
//     for (let i = 0; i <= m; i++) {
//         dp[i][0] = i;
//     }
    
//     for (let j = 0; j <= n; j++) {
//         dp[0][j] = j;
//     }
    
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (word1[i-1] === word2[j-1]) {
//                 dp[i][j] = dp[i-1][j-1];
//             } else {
//                 dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
//             }
//         }
//     }
    
//     return dp[m][n];
// };