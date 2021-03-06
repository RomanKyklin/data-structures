const printRectangle = (w, h) => {
    let str = '';
    let result = '';

    for (let i = 0; i <= h; i++) {
        str += '*';
    }

    for (let i = 0; i <= w; i++) {
        result += `${str}\n`;
    }

    return result;
};

const printEvenAngleTriangle = h => {
    let str = '';
    let result = '';
    for (let i = 0; i <= h; i++) {
        str += '*';
        result += `${str}\n`;
    }

    return result;
};

const printIsoscelesTriangle = h => {
    let str = '';
    let strArr = [];
    let space = ' ';

    for (let i = 0; i <= h; i++) {
        str += i === 0 ? '*' : `**`;
        strArr.push(`${str}`);
    }

    for (let i = strArr.length - 1; i >= 0; i--) {
        strArr[i] = space + strArr[i];
        space += ' ';
    }
    return strArr.join('\n');
};

const isStrPalindrome = str => {
    for (let i = 0; i < str.length; i++) {
        let currentIndex = i;
        let symmetricalIndex = str.length - 1 - i;
        if (str[currentIndex] !== str[symmetricalIndex]) {
            return false;
        } else if (symmetricalIndex <= currentIndex) {
            return true;
        }
    }
    return true;
};

const isBracketsPlacedCorrectly = (str) => {
    const pairs = ['<>', '{}', '()'];
    let openSymbols = ['<', '{', '('];
    let closedSymbols = ['>', '}', ')'];
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (openSymbols.includes(str[i])) {
            stack.push(str[i]);
        }
        if (closedSymbols.includes(str[i])) {
            let lastStackElement = stack.pop();
            let pair = `${lastStackElement}${str[i]}`;
            if (!pairs.includes(pair)) {
                return false;
            }
        }
    }
    return str.length === 0;
};

const numberOfIslands = (matrix) => {
    if (matrix === null || matrix.length === 0) {
        return 0
    }

    let numOfIslands = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                numOfIslands += dfs(matrix, i, j);
            }
        }
    }

    return numOfIslands;
};

const dfs = (matrix, i, j) => {
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] === 0) {
        return 0;
    }

    matrix[i][j] = 0;
    dfs(matrix, i + 1, j);
    dfs(matrix, i - 1, j);
    dfs(matrix, i, j + 1);
    dfs(matrix, i, j - 1);
    return 1;
};

const quickSort = (items) => {
    const pivot = items[0];
    const lessPivotElements = [];
    const greaterPivotElements = [];

    if (items.length < 2) {
        return items;
    }

    items.forEach((val, index) => {
        if (val < pivot || val === pivot && index !== 0) {
            lessPivotElements.push(val);
        } else if (val > pivot) {
            greaterPivotElements.push(val);
        }
    });

    return [...quickSort(lessPivotElements), pivot, ...quickSort(greaterPivotElements)]
};

const merge = (arrFirst, arrSecond) => {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arrFirst.length && j < arrSecond.length) {
        if (arrFirst[i] < arrSecond[j]) {
            result.push(arrFirst[i]);
            i++;
        } else {
            result.push(arrSecond[j]);
            j++;
        }
    }


    return [
        ...result,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length);


    return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const bubbleSort = arr => {
    let result = [...arr];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            let temp = result[j];
            let current = result[j];
            let next = result[j + 1];
            if (next !== undefined && current > next) {
                result[j] = next;
                result[j + 1] = temp;
            }
        }
    }
    return result;
};

const selectionSort = unsortedArray => {
    let result = [...unsortedArray];
    for (let i = 0; i < result.length; i++) {
        let min = i;
        for (let j = i; j < result.length; j++) {
            if (result[j] < result[min]) {
                min = j;
            }
        }

        if (min !== i) {
            swap(result, i, min);
        }
    }


    return result;
};

const swap = (arr, start, end) => {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
};

const heapSort = array => {
    let length = array.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
        heapify(array, length, i);
        i--;
    }

    while (k >= 0) {
        [array[0], array[k]] = [array[k], array[0]];
        heapify(array, k, 0);
        k--;
    }

    return array;
};

const heapify = (arr, length, i) => {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, length, largest);
    }

    return arr;
};


module.exports = {quickSort, mergeSort, bubbleSort, heapSort, merge, selectionSort, numberOfIslands};

