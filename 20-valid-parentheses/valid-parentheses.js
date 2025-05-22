/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(': ')',
        '{': '}',
        '[': ']' 
    };
    let stack = [];

    for (let ch of s) {
        let top = stack[stack.length - 1];
        if (map[top] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.length === 0;
};