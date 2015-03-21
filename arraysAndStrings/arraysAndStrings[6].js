// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.
function setRowsAndColsToZero(matrix) {
    var numRows = matrix.length;
    var numCols = matrix[0].length;
    var zeroCopy = [];

    // stash locations of all zeros in a parallel matrix
    for (r = 0; r < numRows; ++r) {
        zeroCopy[r] = [];

        for (c = 0; c < numCols; ++c) {
            if (matrix[r][c] == 0) {
                zeroCopy[r][c] = 0;
            } else {
                zeroCopy[r][c] = 1;
            }
        }
    }

    // replace given matrix rows & cols using zeroCopy matrix
    for (r = 0; r < numRows; ++r) {
        for (c = 0; c < numCols; ++c) {
            if (zeroCopy[r][c] == 0) {
                // zero out column
                for (c2 = 0; c2 < numCols; ++c2) {
                    matrix[r][c2] = 0;
                }

                // zero out row
                for (r2 = 0; r2 < numRows; ++r2) {
                    matrix[r2][c] = 0;
                }
            }            
        }
    }

    return matrix;
}