"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack(stack) {
        if (stack === void 0) { stack = []; }
        this.stack = stack;
    }
    Stack.prototype.add = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.get = function () {
        if (this.stack.length <= 0) {
            return null;
        }
        return this.stack.pop();
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue(queue) {
        if (queue === void 0) { queue = []; }
        this.queue = queue;
    }
    Queue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (this.queue.length <= 0) {
            return null;
        }
        return this.queue.shift();
    };
    return Queue;
}());
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
    }
    LinkedList.prototype.add = function (value) {
        if (this.head === null) {
            this.head = new ListNode(value);
        }
        else {
            var a = this.head;
            while (a.next) {
                a = a.next;
            }
            a.next = new ListNode(value);
        }
    };
    LinkedList.prototype.addAfter = function (index, value) {
        var currentNode = this.get(index);
        if (this.head !== null && currentNode) {
            var newNode = new ListNode(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
    };
    LinkedList.prototype.get = function (index) {
        if (this.head === null) {
            return null;
        }
        var counter = 1;
        var a = this.head;
        while (counter !== index) {
            counter += 1;
            a = a.next;
        }
        return a;
    };
    LinkedList.prototype.remove = function (index) {
        var removeElem = this.get(index);
        if (index === 1) {
            this.head = removeElem.next;
            return;
        }
        var previousElem = this.get(index - 1);
        if (previousElem) {
            previousElem.next = removeElem.next;
        }
    };
    LinkedList.prototype.length = function () {
        if (this.head === null) {
            return 0;
        }
        var counter = 1;
        var a = this.head;
        while (a.next) {
            counter += 1;
            a = a.next;
        }
        return counter;
    };
    LinkedList.prototype.reverse = function () {
        if (this.head === null) {
            return null;
        }
        var current = this.head;
        var prev = null;
        var next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    };
    return LinkedList;
}());
var QElement = /** @class */ (function () {
    function QElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    return QElement;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    PriorityQueue.prototype.enqueue = function (element, priority) {
        var qElement = new QElement(element, priority);
        var contain = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            return this.items.shift();
        }
        return null;
    };
    PriorityQueue.prototype.front = function () {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    };
    PriorityQueue.prototype.rear = function () {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    PriorityQueue.prototype.printPQueue = function () {
        var result = [];
        this.items.forEach(function (val) { return result.push("" + val.element); });
        return result.join(' ');
    };
    return PriorityQueue;
}());
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.root = new TreeNode(value);
        this.count = 0;
    }
    BinaryTree.prototype.size = function () {
        return this.count;
    };
    BinaryTree.prototype.insert = function (value) {
        this.count++;
        var newNode = new TreeNode(value);
        var searchTree = function (node) {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    searchTree(node.left);
                }
            }
            else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    };
    BinaryTree.prototype.min = function () {
        var currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    };
    BinaryTree.prototype.max = function () {
        var currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    };
    BinaryTree.prototype.search = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return null;
    };
    BinaryTree.prototype.bfs = function () {
        var result = [];
        var queue = [];
        queue.push(this.root);
        while (queue.length) {
            var currentNode = queue.shift();
            result.push(currentNode);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    };
    BinaryTree.prototype.dfsPreOrder = function () {
        var result = [];
        var traverse = function (node) {
            result.push(node);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    };
    BinaryTree.prototype.dfsInOrder = function () {
        var result = [];
        var traverse = function (node) {
            if (node.left) {
                traverse(node.left);
            }
            result.push(node);
            if (node.right) {
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    };
    BinaryTree.prototype.dfsPostOrder = function () {
        var result = [];
        var traverse = function (node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            result.push(node);
        };
        traverse(this.root);
        return result;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
