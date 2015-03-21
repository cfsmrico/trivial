// Write code to reverse a C-Style String. 
// (C-String means that “abcd” is represented as five characters, including the null character.)
function reverseCstring(cString) {
    if (cString[0] == '\0') {
        return '\0';
    }

    var length;
    var reversedString = [];

    // if I don't have the length of the C-string, then I must iterate to discover the length
    for (length = 0, c = cString[0]; c != '\0'; c = cString[++length]) {}
    
    while (length >= 0) {
        reversedString += cString[length--];
    }

    return reversedString;
}