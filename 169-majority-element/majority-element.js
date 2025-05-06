/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, elem = null;
    let n = nums.length;

    // Boyer-Moore Voting Algorithm (first pass)
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            elem = nums[i];
            count = 1;
        } else if (elem === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    // Second pass to verify the candidate
    count = 0;
    for (let num of nums) {
        if (num === elem) count++;
    }

    // Return the majority element if it appears more than n / 2 times
    return count > Math.floor(n / 2) ? elem : -1;
};