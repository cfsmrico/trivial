#
#  By starting at the top of the triangle and moving to adjacent numbers on the row below, the maximum total from top to bottom is 27.
#
#        5
#      9  6
#    4   6  8
#  0   7  1   5
#
#  I.e. 5 + 9 + 6 + 7 = 27.
#
#  Write a program in a language of your choice to find the maximum total from top to bottom in triangle.txt, 
# a text file containing a triangle with 100 rows. 
#

def findMaxTotal(filePath):
    file = open(filePath, 'r');
    source = file.read();
    file.close();
    rows = source.splitlines();
    maxTotal = long(rows[0]);
    maxNumIndex = 0;

    for row in rows[1:len(rows)]:
        numsAsStrings = row.split();
        nums = map(long, numsAsStrings);
        
        if nums[maxNumIndex] > nums[maxNumIndex + 1]:
            maxTotal += nums[maxNumIndex];
            #print nums[maxNumIndex];
        else:
            maxTotal += nums[maxNumIndex + 1];
            #print nums[maxNumIndex + 1];
            maxNumIndex += 1;

    print(maxTotal);

#findMaxTotal('example.txt');
#findMaxTotal('example2.txt');
findMaxTotal('triangle.txt');