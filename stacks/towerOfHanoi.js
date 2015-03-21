//  In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different sizes
// which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size 
// from top to bottom (e.g, each disk sits on top of an even larger one). 
//
// You have the following constraints:
//  (A) Only one disk can be moved at a time
//  (B) A disk is slid off the top of one rod onto the next rod
//  (C) A disk can only be placed on top of a larger disk
//
// Write a program to move the disks from the first rod to the last using Stacks

// play Tower of Hanoi with a rod of n number of disks
var playTowerOfHanoi = function(n) {
    var movesMade = 0;
    var a = new Stack();
    var b = new Stack();
    var c = new Stack();

    for (i = n; i > 0; --i) {
        a.push(i);
    }

    function moveDiscs(n, startPeg, endPeg, throughPeg)
    {
        if (n == 0) {
            return;            
        }

        moveDiscs(n - 1, startPeg, throughPeg, endPeg);
        endPeg.push(startPeg.pop());
        ++movesMade;
        moveDiscs(n - 1, throughPeg, endPeg, startPeg);
    }

    moveDiscs(n, a, c, b);

    console.log('Printing contents of ending peg after '
     + movesMade + ' moves made:');
    
    while (!c.isEmpty()) {
        console.log(c.pop());
    }
};
