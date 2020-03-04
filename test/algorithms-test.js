const expect = require('chai').expect;
const {quickSort, mergeSort, bubbleSort, heapSort, merge} = require('../algorithms');

describe('#quickSort()', function () {
    it('should return sorted array with quickSort', function () {
        const unSortedArray = [3, 1, 2, 5, 7, 10];
        const expectedSortedArray = [1, 2, 3, 5, 7, 10];
        expect(quickSort(unSortedArray)).to.eql(expectedSortedArray)
    });

    it('should return sorted array with quickSort #2', function () {
        const unSortedArray = [33, 21, 4, 6, 88, 11, 9, 6, 63];
        const expectedSortedArray = [4, 6, 6, 9, 11, 21, 33, 63, 88];
        expect(quickSort(unSortedArray)).to.eql(expectedSortedArray)
    });

    it('should return empty array', function () {
        expect(quickSort([])).to.eql([])
    });
});

describe('#mergeSort()', function () {
    let firstSubArray = [5, 6, 7];
    let secondSubArray = [1, 2, 3];
    let expectedArray = [1, 2, 3, 5, 6, 7];

    it('should return merge sub arrays and return sorted array', function () {
        expect(merge(firstSubArray, secondSubArray)).to.eql(expectedArray);
        expect(merge(firstSubArray, [])).to.eql(firstSubArray);
        expect(merge([], secondSubArray)).to.eql(secondSubArray);
    });

    firstSubArray = [1, 10, 50];
    secondSubArray = [2, 14, 99, 100];
    expectedArray = [1, 2, 10, 14, 50, 99, 100];

    it('should return merge sub arrays and return sorted array #2', function () {
        expect(merge(firstSubArray, secondSubArray)).to.eql(expectedArray);
        expect(merge(firstSubArray, [])).to.eql(firstSubArray);
        expect(merge([], secondSubArray)).to.eql(secondSubArray);
    });

    it('should return empty array', function () {
        expect(merge([], [])).to.eql([]);
    });

    it('should sort array with merge sort', function () {
        const unSortedArray = [33, 11, 1, 12, 33, 55, 67, 0, 100];
        const expectedArray = [0, 1, 11, 12, 33, 33, 55, 67, 100];

        expect(mergeSort(unSortedArray)).to.eql(expectedArray);
    });

    it('should sort array with merge sort #2', function () {
        const unSortedArray = [10, 24, 72, 76, 73, 72, 1, 9];
        const expectedArray = [1, 9, 10, 24, 72, 72, 73, 76];

        expect(mergeSort(unSortedArray)).to.eql(expectedArray);
    });
});

describe('#bubble sort()', function () {
    it('should sort array with bubble sort', function () {
        const unSortedArray = [33, 11, 1, 12, 33, 55, 67, 0, 100];
        const expectedArray = [0, 1, 11, 12, 33, 33, 55, 67, 100];

        expect(bubbleSort(unSortedArray)).to.eql(expectedArray);
    });

    it('should sort array with bubble sort #2', function () {
        const unSortedArray = [10, 24, 72, 76, 73, 72, 1, 9];
        const expectedArray = [1, 9, 10, 24, 72, 72, 73, 76];

        expect(bubbleSort(unSortedArray)).to.eql(expectedArray);
    });
});
