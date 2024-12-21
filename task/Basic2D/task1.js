let mat = JSON.parse(prompt("Enter a square matrix "));

let diagonalSum = 0;
let n = mat.length;

for (let i = 0; i < n; i++) {
    diagonalSum += mat[i][i]; // Primary diagonal
    diagonalSum += mat[i][n - i - 1]; // Secondary diagonal
}

if (n % 2 === 1) {
    // If the matrix has an odd size, subtract the center element since it was counted twice
    diagonalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
}

alert("Matrix Diagonal Sum: " + diagonalSum);
