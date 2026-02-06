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
