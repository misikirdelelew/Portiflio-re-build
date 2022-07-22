
const Iname = document.getElementById('uname');
const msgbox = document.getElementById('msg-box');
form.addEventListener('input', () => {
    localStorage.setItem('Name', `${Iname.value}`);
    localStorage.setItem('Email', `${email.value}`);
    localStorage.setItem('message-box', `${msgbox.value}`);
});
inputName.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');
msgbox.value = localStorage.getItem('message-box');
