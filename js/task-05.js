const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


function handlerInput (){
    console.log(nameInput.value);
    nameOutput.textContent = nameInput.value || 'Anonymous';
};

nameInput.addEventListener('input', handlerInput);

