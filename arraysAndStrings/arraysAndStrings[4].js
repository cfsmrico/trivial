// Write a method to replace all spaces in a string with ‘%20’.
function specialReplace(s) {
    var returnString = "";

    for (i = 0; i < s.length; ++i) {
        if (s[i] != ' ') {
            returnString += s[i];
        } else {
            returnString += "%20";
        }
    }

    return returnString;
 }