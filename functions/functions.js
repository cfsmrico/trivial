// example of a recursive function (factorial)
var f = function fact(x) {
    if (x <= 1)
        return 1;
    else
        return x * fact(x-1);
};

// functions can have optional params!
// e.g. can call via sumMultipleArgs(1, 2) 
function sumMultipleArgs(a, b, c) {
    if (c !== undefined)
        return a + b + c;
    else
        return a + b;
}

// functionally equivalent to above!
function sumMultipleArgs2(a, b, c) {
    return a + b + c || a + b;
}

// functionally equivalent to above!
function sumMultipleArgs3(a, b, c) {
    if (arguments.length > 2)
        return a + b + c;
    else
        return a + b;
}

var scope = "global scope"; // A global variable

function checkscope() {
    var scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f;
}
// what does checkscope()() return?
    // "local scope" become of the concept of closure!