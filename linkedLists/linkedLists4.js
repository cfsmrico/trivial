// You have two numbers represented by a linked list, where each node contains a single digit. 
// The digits are stored in reverse order, such that the 1’s digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8
function addLinkedLists(list1, list2) {
    var returnList = new LinkedList();
    var sum = 0;

    for (i = 0; i < list1.size(); ++i) {
        sum += list1.contentsAtIndex(i) * Math.pow(10, i);
    }

    for (i = 0; i < list2.size(); ++i) {
        sum += list2.contentsAtIndex(i) * Math.pow(10, i);
    }

    var sumAsString = sum.toString();

    for (i = 0; i < sumAsString.length; ++i) {
        returnList.insert(sumAsString[i]);
    }

    return returnList;
}