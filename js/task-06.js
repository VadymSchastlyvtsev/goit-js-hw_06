const validationInput = document.querySelector('#validation-input');
console.dir(validationInput);

function handlerBlur (evt){
    console.log(evt.currentTarget.value);
    const enteredValue = evt.currentTarget.value;
    console.log(validationInput.dataset.length);
    const requiredLength = Number(validationInput.dataset.length);
    
    if (enteredValue.length === requiredLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');  
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid'); 
    }
}


validationInput.addEventListener('blur', handlerBlur);
