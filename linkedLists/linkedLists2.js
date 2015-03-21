// Implement an algorithm to find the nth to last element of a singly linked list.
function findNthToLastElement(linkedList, n) {
    var indexToFind = linkedList.size() - 1 - n;
    return linkedList.contentsAtIndex(indexToFind);
}