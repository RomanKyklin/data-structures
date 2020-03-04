interface IStack<T> {
    add(item: T): void;// получает элемент и вставляет в начало списка
    get(): T; // выдает первый элемент в списке
}

interface IQueue<T> {
    enqueue(item: T): void; // получает элемент и вставляет в конец списка
    dequeue(): T; // выдает первый элемент в списке
}

interface ILinkedList<T> {
    get(index: number): T;//return element from index
    add(item: T);

    length(): number; // length of list
    addAfter(index: number, item2: T): void; // added item2 after element with "index" index
    reverse(): ILinkedList<any>; //return reverted LinkedList
}

interface INode<T> {
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

class ListNode implements INode<any> {
    constructor(public value: any, public next: ListNode = null) {
    }
}

class LinkedList implements ILinkedList<any> {
    constructor(private head: ListNode = null) {
    }

    add(value: any) {
        if (this.head === null) {
            this.head = new ListNode(value);
        } else {
            let a: ListNode = this.head;
            while (a.next) {
                a = a.next;
            }
            a.next = new ListNode(value);
        }
    }

    addAfter(index: number, value: any): void {
        let currentNode = this.get(index);
        if (this.head !== null && currentNode) {
            const newNode = new ListNode(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    }

    get(index: number): ListNode | null {
        if (this.head === null) {
            return null;
        }
        let counter = 1;
        let a: ListNode = this.head;
        while (counter !== index) {
            counter += 1;
            a = a.next;
        }
        return a;
    }

    remove(index: number): void {
        const removeElem = this.get(index);
        if (index === 1) {
            this.head = removeElem.next;
            return;
        }

        const previousElem = this.get(index - 1);

        if (previousElem) {
            previousElem.next = removeElem.next;
        }
    }

    length(): number {
        if (this.head === null) {
            return 0;
        }
        let counter = 1;
        let a: ListNode = this.head;
        while (a.next) {
            counter += 1;
            a = a.next;
        }
        return counter;
    }

    reverse(): ILinkedList<any> {
        if (this.head === null) {
            return null;
        }
        let current: ListNode = this.head;
        let prev = null;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}


class QElement {
    constructor(public element, public priority) {
    }
}

class PriorityQueue {
    constructor(private items: QElement[] = []) {
    }

    enqueue(element, priority): void {
        let qElement = new QElement(element, priority);
        let contain = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        if (!contain) {
            this.items.push(qElement);
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.items.shift();
        }

        return null;
    }

    front() {
        if (!this.isEmpty()) {
            return this.items[0];
        }

        return null;
    }

    rear() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }

        return null;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    printPQueue() {
        let result = [];
        this.items.forEach(val => result.push(`${val.element}`));
        return result.join(' ');
    }
}


class TreeNode {
    public left: TreeNode;
    public right: TreeNode;
    public value: number;

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    public root: TreeNode;
    public count: number;

    constructor(value) {
        this.root = new TreeNode(value);
        this.count = 0;
    }

    size(): number {
        return this.count;
    }

    insert(value): void {
        this.count++;

        let newNode = new TreeNode(value);

        const searchTree = (node: TreeNode) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right);
                }
            }
        };

        searchTree(this.root);
    }

    min(): number {
        let currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    max(): number {
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    search(value): number | null {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return value;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }
}

const bts = new BinaryTree(5);

bts.insert(2);
bts.insert(10);
bts.insert(3);
console.log(bts.max());
console.log(bts.min());
console.log(bts.size());
console.log(bts.search(5));
console.log(bts.search(55));
