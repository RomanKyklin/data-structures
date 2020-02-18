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
        } else if (symmetricalIndex === currentIndex) {
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
