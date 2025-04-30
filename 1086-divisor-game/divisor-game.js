/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let dp = new Array(n+1).fill(false);

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j === 0 && !dp[i-j]) {
                dp[i] = true;
            }
        }
    }

    return dp[n];
};