let matrix = JSON.parse(prompt("Enter a 2D matrix "));

let transpose = [];
for (let i = 0; i < matrix[0].length; i++) {
    transpose[i] = [];
    for (let j = 0; j < matrix.length; j++) {
        transpose[i][j] = matrix[j][i];
    }
}

alert("Transposed Matrix: " + JSON.stringify(transpose));
