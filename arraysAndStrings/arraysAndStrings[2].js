// Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. 
// NOTE: One or two additional variables are fine. An extra copy of the array is not.  
function removeDupes(s) {
    for (i = 0; i < s.length - 1; ++i) {
        for (j = i + 1; j < s.length; ) {
            if (s[i] == s[j]) { // if a match is found
                // shift over the rest of the array's contents
                for (j2 = j, k = j + 1; k < s.length; ++j2, ++k) {
                    s[j2] = s[k];
                }

                s.splice(-1, 1);    // chop off last char
            } else {
                ++j;
            }
        }
    }

    return s;
}

var test1 = ['C','h','a','n','e','y'];
var test2 = ['T','a','m','m','y'];
var test3 = ['z','z','z','z'];
var test4 = ['z','z','a','a','a'];
var test5 = [];
var test6 = ['b','c','d','c','d','c','b'];


if (removeDupes(test1).toString() != test1.toString() ||
    removeDupes(test2).toString() != ['T','a','m','y'].toString() ||
    removeDupes(test3).toString() != ['z'].toString() ||
    removeDupes(test4).toString() != ['z','a'].toString() || 
    removeDupes(test5).toString() != test5.toString() || 
    removeDupes(test6).toString() != ['b','c','d'].toString()) {
    console.warn("FAIL");
} else {
    console.info("PASS");
}