/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {};
    let n = nums.length;
    let freq = Array.from({length: n + 1}, () => []);

    // store count in freq
    // [[], [3], [2], [1], [], [], []]
    // this means 1 is coming at index 3 - i.e it coming 3 times
    // 2 is coming at index 2 as it coming twice
    // 3 is coming at index 1 as it come only once

    // fill the map first
    for (let el of nums) {
        count[el] = (count[el] || 0) + 1;
    }

    // fill the freq array
    // {1: 3, 2: 2, 3: 1}
    for (const [n, c] of Object.entries(count)) {
        freq[c].push(n);
    }

    // look in reverse order till k element added in result arr
    let result = [];

    // since for input [1] - the freq is going on index 1
    // that why i is starting at freq.length
    for (let i = freq.length; i >= 0; i--) {
        if (!freq[i]) continue; 
        for (let x of freq[i]) {
            result.push(+x);
            if (result.length === k) {
                return result;
            }
        }
    }

    return result;

};