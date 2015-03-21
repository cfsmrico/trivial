// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 
// using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
function isSubstring (subString, superString) {
    return superString.indexOf(subString) != -1;
}

function isRotationOf(s1, s2) {
    var s1a = s1.split('');
    return isSubstring(s1a.reverse().join(''), s2);
}