var Stack = function() {
    var stack = [];
    var size = 0;

    this.isEmpty = function() {
        return size == 0;
    };

    this.top = function() {
        if (this.isEmpty()) {
            return null;
        } else {
            return stack[size - 1];            
        }
    };

    this.pop = function() {
        if (this.isEmpty()) {
            return null;
        } else {
            return stack[--size];    
        }
    };

    this.push = function(data) {
        stack[size++] = data;
    };

    this.size = function() {
        return size;
    };

    return this;
};