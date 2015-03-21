// Implement a MyQueue class which implements a queue using two stacks.
var MyQueue = function() {
    var s1 = new Stack();
    var s2 = new Stack();

    this.isEmpty = function() {
        return s1.isEmpty();
    };

    this.dequeue = function() {
        while (!s1.isEmpty()) {
            s2.push(s1.pop());
        }

        var returnValue = s2.pop();

        while (!s2.isEmpty()) {
            s1.push(s2.pop());
        }

        return returnValue;
    };

    this.enqueue = function(data) {
        s1.push(data);
    };

    return this;  
};