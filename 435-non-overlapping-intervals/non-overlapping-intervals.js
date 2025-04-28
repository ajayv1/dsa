/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (!intervals?.length) return 0;
    let count = 0;

    let sorted = intervals.slice().sort((a, b)=> a[0] === b[0] ? a[1]-b[1] : a[0]-b[0]);

    let prev = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        const [curS, curE] = sorted[i];
        if (curS < prev[1]) {
            count++;
            if (curE < prev[1]) {
                prev = sorted[i];
            }
        } else {
            prev = sorted[i];
        }
    }

    return count;
};