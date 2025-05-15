/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals?.length === 0) return [];

    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    let ans = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        let [s, e] = sorted[i];
        let last = ans[ans.length - 1];

        if (s <= last[1]) {
            last[1] = Math.max(e, last[1]);
        } else {
            ans.push(sorted[i]);
        }
    }

    return ans;
};