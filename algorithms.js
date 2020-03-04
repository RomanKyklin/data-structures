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
            console.log(pair);
            if (!pairs.includes(pair)) {
                return false;
            }
        }
    }
    return str.length === 0;
};

/**
 * Checks the left diagonal
 * @param matrixArr
 * @returns {boolean}
 */
const isMatrixPalindrome = matrixArr => {
    let firstElement = matrixArr[0][0];
    for (let i = 0; i < matrixArr.length; i++) {
        if (!(firstElement === matrixArr[i][i])) {
            return false;
        }
    }
    return true;
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
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result.length; j++) {
            let temp = result[j];
            let current = result[j];
            let next = result[j + 1];
            if(next !== undefined && current > next) {
                result[j] = next;
                result[j + 1] = temp;
            }
        }
    }
    return result;
};

const heapSort = arr => {

};

module.exports = {quickSort, mergeSort, bubbleSort, heapSort, merge};


console.log(mergeSort([13, 3, 1, 67, 34, 43]));
