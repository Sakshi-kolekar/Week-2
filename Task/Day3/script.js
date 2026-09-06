// 1. Select HTML elements

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const greeting = document.getElementById("greeting");


// 2. Handle form submission

form.addEventListener("submit", (event) => {

    // Prevent page reload
    event.preventDefault();

    // Read input values
    const name = nameInput.value;
    const email = emailInput.value;

    // Display greeting message
    greeting.textContent = `Hello ${name}! Your email is ${email}.`;

});
