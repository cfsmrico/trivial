var LinkedList = function() {
    var Node = function(data) {
        this.data = data;
        var next;
    };

    var head;
    var current;
    var size = 0;
    var list = {};

    list.size = function() {
        return size;
    };

    list.isEmpty = function() {
        return head == null;
    };

    list.insert = function(data) {
        var newNode = new Node(data);
        newNode.next = head;        
        head = newNode;
        ++size;
    };

    list.remove = function(data) {
        current = head;

        if (head == null) {
            return null;
        } else if (head.data == data) {
            head = head.next;
            --size;
            return current.data;
        }

        var previous = head;
        current = head.next;

        while (current != null) {
            if (current.data == data) {
                previous.next = current.next;
                --size;
                break;
            }

            previous = current;
            curent = current.next;
        }

        if (current != null) {
            return current.data;
        } else {
            return null;
        }
    };

    list.removeAtIndex = function(index) {
        current = head;

        if (index < 0) {
            return null;
        } else if (head == null) {
            return null;
        } else if (index == 0) {
            head = head.next;
            --size;
            return current.data;
        }

        var previous = head;
        var i;
        current = head.next;

        for (i = 1; i < index; ++i) {
            previous = current;
            current = current.next;
        }

        if (i == index) {
            previous.next = current.next;
            --size;
        }

        if (current != null) {
            return current.data;
        } else {
            return null;
        }
    };

    list.contents = function() {
        current = head;
        var contents = [];

        while (current != null) {
            contents += current.data + " -> ";
            current = current.next;
        }

        return contents;
    };

    list.contentsAtIndex = function(index) {
         current = head;

        if (index < 0) {
            return null;
        } else if (head == null) {
            return null;
        } else if (index == 0) {
            return current.data;
        }

        var i;
        current = head.next;

        for (i = 1; i < index; ++i) {
            current = current.next;
        }

        if (current != null) {
            return current.data;
        } else {
            return null;
        }       
    };

    list.contains = function(data) {
        current = head;
        var found = false;

        while (current != null) {
            if (current.data == data) {
                found = true;
                break;
            }
        }

        return found;
    };

    return list;
};