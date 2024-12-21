let mat = JSON.parse(prompt("Enter a square matrix "));

let diagonalSum = 0;
let n = mat.length;

for (let i = 0; i < n; i++) {
    diagonalSum += mat[i][i];
    diagonalSum += mat[i][n - i - 1];
}

if (n % 2 === 1) {
   
    diagonalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
}

alert("Matrix Diagonal Sum: " + diagonalSum);
