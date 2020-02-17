interface IStack<T> {
    add(item: T): void;// получает элемент и вставляет в начало списка
    get(): T; // выдает первый элемент в списке
}

interface IQueue<T> {
    enqueue(item: T): void; // получает элемент и вставляет в конец списка
    dequeue(): T; // выдает первый элемент в списке
}

class Stack implements IStack<any> {
    constructor(private stack = []) {
    }

    add(item: any): void {
        this.stack.push(item);
    }

    get(): any[] {
        if (this.stack.length <= 0) {
            return null;
        }

        return this.stack.pop();
    }
}

class Queue implements IQueue<any> {
    constructor(private queue = []) {
    }

    enqueue(item: any): void {
        this.queue.push(item);
    }

    dequeue(): any {
        if (this.queue.length <= 0) {
            return null;
        }
        return this.queue.shift();
    }
}
