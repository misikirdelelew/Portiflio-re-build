const form = document.forms[0];
const email = document.getElementById('email');
const error = document.getElementById('error-show');

form.addEventListener('submit', (event) => {
    const messageDiplay = [];
    if (email.value.match(/[A-Z]/)) {
        messageDiplay.push('Please, Write Your Email In Lowercase letter .');
        error.innerHTML = messageDiplay.join(', ');
        event.preventDefault();
        event.stopPropagation();
    }
});