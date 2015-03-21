// Write code to remove duplicates from an unsorted linked list.
function removeDuplicates(linkedList) {
    var map = [];
    var currentData;

    for (i = 0; i < linkedList.size(); ++i) {
        currentData = linkedList.contentsAtIndex(i);

        if (map[currentData] == null) {
            map[currentData] = 1;
        } else {
            linkedList.removeAtIndex(i);
            --i;
        }
    }

    return linkedList;
}