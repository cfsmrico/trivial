// Write a method to decide if two strings are anagrams or not.
function areAnagrams(s1, s2) {
    var s1a = [];
    var s2a = [];

    if (typeof(s1) == "string") {
        s1a = s1.split('');
    } else {
        s1a = s1;
    }

    if (typeof(s2) == "string") {
        s2a = s2.split('');
    } else {
        s2a = s2;
    }

    return s1a.sort().toString() == s2a.sort().toString();
}