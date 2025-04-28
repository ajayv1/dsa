/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals?.length === 0) return [];
    let sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
    let result = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        let [curS, curE] = sorted[i];
        let last = result[result.length - 1];

        if (curS <= last[1]) {
            last[1] = Math.max(curE, last[1]);
        } else {
            result.push(sorted[i]);
        }
    }

    return result;
};