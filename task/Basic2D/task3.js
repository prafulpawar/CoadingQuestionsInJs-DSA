let logs = JSON.parse(prompt("Enter the birth and death years "));

let populationCount = Array(2051).fill(0);

for (let log of logs) {
    for (let year = log[0]; year < log[1]; year++) {
        populationCount[year]++;
    }
}

let maxPopulationYear = 0;
let maxPopulation = 0;

for (let year = 1900; year <= 2050; year++) {
    if (populationCount[year] > maxPopulation) {
        maxPopulation = populationCount[year];
        maxPopulationYear = year;
    }
}

alert("Earliest Year with Maximum Population: " + maxPopulationYear);
