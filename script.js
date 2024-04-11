const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number   = "0123456789";
const symbol = "!@#$%^&*()_+";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    for(let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    passwordBox.value = password;
}

createPassword(); 

// Generate a random password on page load

// Let's create copy function

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}