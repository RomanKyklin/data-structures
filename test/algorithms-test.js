const {selectionSort} = require("../algorithms");
const expect = require('chai').expect;
const {BinaryTree, Graph} = require('../data-structures.js');
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

describe('#selection sort()', function () {
    it('should sort array', function () {
        const unSortedArray = [33, 11, 1, 12, 33, 55, 67, 0, 100];
        const expectedArray = [0, 1, 11, 12, 33, 33, 55, 67, 100];

        expect(selectionSort(unSortedArray)).to.eql(expectedArray);
    });

    it('should sort array#2', function () {
        const unSortedArray = [10, 24, 72, 76, 73, 72, 1, 9];
        const expectedArray = [1, 9, 10, 24, 72, 72, 73, 76];

        expect(selectionSort(unSortedArray)).to.eql(expectedArray);
    });
});

describe('#heap sort()', function () {
    it('should sort array', function () {
        const unSortedArray = [33, 11, 1, 12, 33, 55, 67, 0, 100];
        const expectedArray = [0, 1, 11, 12, 33, 33, 55, 67, 100];

        expect(heapSort(unSortedArray)).to.eql(expectedArray);
    });

    it('should sort array#2', function () {
        const unSortedArray = [10, 24, 72, 76, 73, 72, 1, 9];
        const expectedArray = [1, 9, 10, 24, 72, 72, 73, 76];

        expect(heapSort(unSortedArray)).to.eql(expectedArray);
    });
});

describe('#Binary tree traversal algorithms ', function () {
    it('should BFS', function () {
        const tree = new BinaryTree(10);
        tree.insert(8);
        tree.insert(11);
        tree.insert(19);
        tree.insert(7);
        tree.insert(9);

        const expectedArray = [
            tree.search(10),
            tree.search(8),
            tree.search(11),
            tree.search(7),
            tree.search(9),
            tree.search(19),
        ];

        expect(tree.bfs()).to.eql(expectedArray);
    });

    it('should DFS PreOrder', function () {
        const tree = new BinaryTree(15);
        tree.insert(10);
        tree.insert(9);
        tree.insert(11);
        tree.insert(18);
        tree.insert(19);
        tree.insert(17);

        const expectedArray = [
            tree.search(15),
            tree.search(10),
            tree.search(9),
            tree.search(11),
            tree.search(18),
            tree.search(17),
            tree.search(19),
        ];
        expect(tree.dfsPreOrder()).to.eql(expectedArray);
    });

    it('should DFS InOrder', function () {
        const tree = new BinaryTree(15);
        tree.insert(10);
        tree.insert(9);
        tree.insert(11);
        tree.insert(18);
        tree.insert(19);
        tree.insert(17);

        const expectedArray = [
            tree.search(9),
            tree.search(10),
            tree.search(11),
            tree.search(15),
            tree.search(17),
            tree.search(18),
            tree.search(19),
        ];
        expect(tree.dfsInOrder()).to.eql(expectedArray);
    });

    it('should DFS PostOrder', function () {
        const tree = new BinaryTree(15);
        tree.insert(10);
        tree.insert(9);
        tree.insert(11);
        tree.insert(18);
        tree.insert(19);
        tree.insert(17);

        const expectedArray = [
            tree.search(9),
            tree.search(11),
            tree.search(10),
            tree.search(17),
            tree.search(19),
            tree.search(18),
            tree.search(15),
        ];
        expect(tree.dfsPostOrder()).to.eql(expectedArray);
    });
});

describe('#Undirected graph ', function () {
    it('should add vertex to adj list and not override if vertex already exists', function () {
        const expectedAdjList = {
            test: ['some test edge'],
            test2: [],
        };
        const graph = new Graph();
        graph.addVertex('test');
        graph.addVertex('test2');
        graph.getAdjList().test = ['some test edge'];
        graph.addVertex('test');
        expect(graph.getAdjList()).to.eql(expectedAdjList);
    });

    it('should add edge if it not already exists', function () {
        const graph = new Graph();
        graph.addVertex('test');
        graph.addVertex('test2');
        graph.addVertex('test3');
        graph.addEdge('test', 'test2');
        graph.addEdge('test3', 'test2');
        graph.addEdge('test3', 'test');
        const expectedAdjList = {
            test: ['test2', 'test3'],
            test2: ['test', 'test3'],
            test3: ['test2', 'test']
        };
        expect(graph.getAdjList()).to.eql(expectedAdjList);

        graph.addEdge('test', 'test2');
        expect(graph.getAdjList()).to.eql(expectedAdjList);
    });

    it('should remove an edge', function () {
        const graph = new Graph();
        graph.addVertex('test');
        graph.addVertex('test2');
        graph.addVertex('test3');
        graph.addEdge('test', 'test2');
        graph.addEdge('test3', 'test2');
        graph.addEdge('test3', 'test');
        graph.removeEdge('test', 'test2');
        let expectedAdjList = {
            test: ['test3'],
            test2: ['test3'],
            test3: ['test2', 'test']
        };
        expect(graph.getAdjList()).to.eql(expectedAdjList);

        graph.removeEdge('test3', 'test2');

        expectedAdjList = {
            test: ['test3'],
            test2: [],
            test3: ['test']
        };

        expect(graph.getAdjList()).to.eql(expectedAdjList);
    });

    it('should remove vertex', function () {
        const graph = new Graph();
        graph.addVertex('test');
        graph.addVertex('test2');
        graph.addVertex('test3');
        graph.addEdge('test2', 'test');
        graph.addEdge('test3', 'test');
        graph.removeVertex('test');

        const expectedAdjList = {
            test2: [],
            test3: []
        };

        expect(graph.getAdjList()).to.eql(expectedAdjList);
    });

    it('should traverse graph with DFS and BFS', function () {
        const graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.addEdge('D', 'E');
        graph.addEdge('D', 'F');
        graph.addEdge('E', 'F');

        let expectedArray = [
            'A',
            'B',
            'D',
            'E',
            'C',
            'F',
        ];

        expect(graph.DFS('A')).to.eql(expectedArray);

        expectedArray = [
            'A',
            'C',
            'E',
            'F',
            'D',
            'B'
        ];

        expect(graph.DFSIterative('A')).to.eql(expectedArray);

        expectedArray = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F'
        ];

        expect(graph.BFS('A')).to.eql(expectedArray);
    });
});

