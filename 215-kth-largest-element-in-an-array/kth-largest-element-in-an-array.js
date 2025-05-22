

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractMax() {
        let n = this.heap.length;
        if (n === 0) return null;
        if (n === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.heapify(0);
        return root;
    }

    heapifyUp() {
        let n = this.heap.length - 1;

        // keep fixing up till smallest ele is not lower than its children
        while (n > 0) {
            let parentIndex = getParentIndex(n);
            
            if (this.heap[parentIndex] < this.heap[n]) {
                this.swap(parentIndex, n);
                n = parentIndex;
            } else {
                break;
            }
        }
    }

    buildMaxHeap(arr) {
        // this takes array and insert each one and then do Bottom-up heapify
        this.heap = arr.slice();

        let len = this.heap.length;

        for (let i = Math.floor((len/2-1)); i >= 0; i--) {
            this.heapify(i);
        }
    }

    heapify(i) {
        let max = i;
        let n = this.heap.length;
        let l = this.getLeftChildIndex(i);
        let r = this.getRightChildIndex(i);
        
        // compare with children and find max index
        if (l < n && this.heap[l] > this.heap[max]) {
            max = l;
        }

        if (r < n && this.heap[r] > this.heap[max]) {
            max = r;
        }

        if (i !== max) {
            // swap with max
            this.swap(i, max);
            this.heapify(max);
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let maxHeap = new MaxHeap();
    maxHeap.buildMaxHeap(nums);

    let ans;

    for (let i = 0; i < k; i++) {
        ans = maxHeap.extractMax();
    }

    return ans;
};