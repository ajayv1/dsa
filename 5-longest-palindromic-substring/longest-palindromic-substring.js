/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let start = 0, maxLen = -1;
    
    function expand(l, r) {
        while (l >= 0 && r < n && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                start = l;
            }

            l--;
            r++;
        }
    }

    for (let i = 0; i < n; i++) {
        expand(i, i);
        expand(i, i+1);
    }

    return s.slice(start, start+maxLen);
};