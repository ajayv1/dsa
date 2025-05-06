/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if (nums.length <= 1) return 0;
    return countInv(nums, 0, nums.length - 1);
};

var countInv = function (arr, l, r) {
    let res = 0;

    if (l < r) {
        let mid = Math.floor((l+r)/2);

        res+= countInv(arr, l, mid);
        res+= countInv(arr, mid+1, r);

        res+= countAndMerge(arr, l, mid, r);
    }

    return res;
}

var countAndMerge = function (arr, l, m, r) {
    // we have arr[l..m] arr[m+1..r]
    let n1 = m - l + 1, n2 = r - m;
    let i = 0, j = 0, k = l;

    let left = arr.slice(l, m + 1);
    let right = arr.slice(m + 1, r + 1);

    let count = 0;

    // count inversion
    while ( i < n1 && j < n2) {
        if (left[i] <= 2 * right[j]) {
            i++;
        } else {
            j++;
            count += (n1 - i);
        }
    }


    // Merge the two sorted subarrays back into the array
    i = 0;
    j = 0;
    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    while (i < n1) {
        arr[k++] = left[i++];
    }

    while (j < n2) {
        arr[k++] = right[j++];
    }

    return count;
}