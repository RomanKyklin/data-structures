var Stack = /** @class */ (function () {
    function Stack(stack) {
        if (stack === void 0) { stack = []; }
        this.stack = stack;
    }
    Stack.prototype.add = function (item) {
        this.stack.unshift(item);
        console.log(this.stack);
    };
    Stack.prototype.get = function () {
        if (this.stack.length <= 0) {
            return null;
        }
        return this.stack[0];
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
        return this.queue[0];
    };
    return Queue;
}());
var stack = new Stack();
stack.add('firstElement');
stack.add('secondElement');
