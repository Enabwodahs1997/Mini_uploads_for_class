function alertMessage(message) {
    alert(message);
}

alertMessage("Hello, this is my first JavaScript assignment!");
// I will update this file as we progress through the assignments.
// Stay tuned for more updates!

function getWelcomeMessage(name) {
    alert(`Welcome to the class, ${name}!`);
}

const userName = prompt("Please enter your name:");

getWelcomeMessage(userName);

function divide(a, b) {
    return a / b;
}

console.log(divide(20, 5));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));

// Additional functions and features will be added in future assignments.
//math functions for the 2nd assignment
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

console.log(getCircleArea(5));

function generateRandomPassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i += 1) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

console.log(generateRandomPassword(12));

function calculateTotalWithTax(price, taxRate) {
    return price + (price * taxRate);
}

console.log(calculateTotalWithTax(100, 0.07));

// boolean function for the 3rd assignment

let age = 20;

let isStudent = true;

if (age < 18 || isStudent) {
    console.log("Discount ticket granted ✅");
} else {
    console.log("Regular ticket only ❌");
}
// this assignement was hard for me to understand so there are a lot of notes for as I went to help me process as I went and referance if needed
// FizzBuzz for the 4th assignment (the notes are in the code for better understanding for me they were not necessary to the assignment I was just needing to break it down step by step to understand it better) 
const fizzBuzzButton = document.querySelector(".Run"); // Selecting the button element with the class "Run" from the HTML document and storing it in the variable fizzBuzzButton
const fizzBuzzList = document.querySelector("#fizzbuzz-list"); // Selecting the unordered list element with the id "fizzbuzz-list" from the HTML document and storing it in the variable fizzBuzzList

if (fizzBuzzButton && fizzBuzzList) { // Checking if both fizzBuzzButton and fizzBuzzList exist (i.e., they are not null or undefined) before adding an event listener to the button
    fizzBuzzButton.addEventListener("click", () => { // Adding a click event listener to the fizzBuzzButton. When the button is clicked, the function inside the event listener will be executed.
        fizzBuzzList.innerHTML = ""; // Clearing the existing content of the fizzBuzzList (if any) by setting its innerHTML to an empty string. This ensures that each time the button is clicked, the list will be refreshed with new FizzBuzz results. (ai helped with this part I was not sure how to clear the list before adding new items to it)

        for (let i = 1; i <= 100; i += 1) { // Loop from 1 to 100 and increment by 1
            let label = String(i); //labeling the string i

            if (i % 15 === 0) { //if the number is divisible by both 3 and 5, it will be labeled as FizzBuzz
                label = "FizzBuzz";
            } else if (i % 3 === 0) { //if the number is divisible by 3, it will be labeled as Fizz
                label = "Fizz";
            } else if (i % 5 === 0) { //if the number is divisible by 5, it will be labeled as Buzz
                label = "Buzz";
            }

            const listItem = document.createElement("li"); //creating a list item element to hold the label
            listItem.textContent = label; //setting the text content of the list item to the label
            fizzBuzzList.appendChild(listItem); //appending the list item to the fizzBuzzList element in the HTML
        }
    });
}
