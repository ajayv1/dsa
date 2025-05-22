/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '[' 
    };
    let stack = [];

    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            // here stack top would be '(' and ch should be ')'
            if (map[ch] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};