// This Code will preserve data in the browser

const contactForm = document.forms[0];
const formValues = {};
if (window.localStorage.getItem('show data')) {
    const formObject = JSON.parse(window.localStorage.getItem('show data'));
    contactForm.name.value = formObject.name;
    contactForm.email.value = formObject.email;
    contactForm.message.value = formObject.message;
}
function collectFormData() {
    formValues.uname = contactForm.uname.value;
    formValues.email = contactForm.email.value;
    formValues.message = contactForm.message.value;
    window.localStorage.setItem('show data', JSON.stringify(formValues));
}
contactForm.addEventListener('submit', collectFormData);
