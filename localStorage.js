
const Iname = document.getElementById('uname');
const msgbox = document.getElementById('msg-box');
const form = document.getElementById('form-contact');
const email = document.getElementById('email');
const inputName = document.getElementById('name');

form.addEventListener('input', () => {
    localStorage.setItem('Name', `${Iname.value}`);
    localStorage.setItem('Email', `${email.value}`);
    localStorage.setItem('message-box', `${msgbox.value}`);
});
inputName.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');
msgbox.value = localStorage.getItem('message-box');
