let choice;

do {
    choice = parseInt(prompt("Choose an option:\n1. Check if a number is even or odd\n2. Check if a number is prime\n3. Calculate factorial of a number\n4. Exit"));

    switch (choice) {
        case 1:
            let num1 = parseInt(prompt("Enter a number:"));
            if (num1 % 2 === 0) {
                alert(num1 + " is even.");
            } else {
                alert(num1 + " is odd.");
            }
            break;

        case 2:
            let num2 = parseInt(prompt("Enter a number:"));
            let isPrime = true;
            if (num2 <= 1) {
                isPrime = false;
            }
            for (let i = 2; i <= Math.sqrt(num2); i++) {
                if (num2 % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                alert(num2 + " is a prime number.");
            } else {
                alert(num2 + " is not a prime number.");
            }
            break;

        case 3:
            let num3 = parseInt(prompt("Enter a number:"));
            let factorial = 1;
            for (let i = 1; i <= num3; i++) {
                factorial *= i;
            }
            alert("The factorial of " + num3 + " is " + factorial);
            break;

        case 4:
            alert("Exiting the program.");
            break;

        default:
            alert("Invalid choice. Please enter a number between 1 and 4.");
    }
} while (choice !== 4);
