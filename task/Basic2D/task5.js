let image = JSON.parse(prompt("Enter the binary image matrix "));

for (let i = 0; i < image.length; i++) {
   
    image[i].reverse();
   
    for (let j = 0; j < image[i].length; j++) {
        image[i][j] = image[i][j] === 0 ? 1 : 0;
    }
}

alert("Flipped and Inverted Image: " + JSON.stringify(image));
