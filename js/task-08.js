

const loginForm = document.querySelector('.login-form');
console.dir(loginForm);

function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget.elements);

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
            alert('Всі поля повинні бути заповнені!');
          } else {
            const formData = {
              email: emailInput.value,
              password: passwordInput.value,
            };
            console.log(formData);
            loginForm.reset();
}
};

loginForm.addEventListener('submit', handlerSubmit);

