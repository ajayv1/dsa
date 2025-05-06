/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    function generate(str, open, close) {
        // If the current string has reached the length of 2 * n, it's a valid combination
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }

        if (open < n) {
            generate(str + '(', open + 1, close);
        }

        if (close < open) {
            generate(str + ')', open, close + 1);
        }
    }

    generate("", 0, 0);

    return res;
};