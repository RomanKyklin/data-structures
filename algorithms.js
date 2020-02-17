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

const evenAngleTriangle = h => {
    let str = '';
    let result = '';
    for (let i = 0; i <= h; i++) {
        str += '*';
        result += `${str}\n`;
    }

    return result;
};

const isoscelesTriangle = h => {
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

console.log(printRectangle(3, 7));
console.log(evenAngleTriangle(6));
console.log(isoscelesTriangle(6));
