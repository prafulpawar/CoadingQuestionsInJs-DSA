let N = parseInt(prompt("Enter the size of the square matrix (N):"));
let matrix = [];
for (let i = 0; i < N; i++) {
    matrix[i] = JSON.parse(prompt(`Enter row ${i + 1} of the matrix `));
}

for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - i - 1; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[N - j - 1][i];
        matrix[N - j - 1][i] = matrix[N - i - 1][N - j - 1];
        matrix[N - i - 1][N - j - 1] = matrix[j][N - i - 1];
        matrix[j][N - i - 1] = temp;
    }
}

alert("Rotated Matrix: " + JSON.stringify(matrix));
