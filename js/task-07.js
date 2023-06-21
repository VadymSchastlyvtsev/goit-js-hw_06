const fontSizeControl = document.querySelector('#font-size-control');
console.dir(fontSizeControl);
const textElem = document.querySelector('#text');
console.dir(textElem);

function handlerInput (){
    console.log(fontSizeControl.value);
    const fontSize = fontSizeControl.value;
    textElem.style.fontSize = `${fontSize}px`;
    console.log(textElem);
}

fontSizeControl.addEventListener('input', handlerInput);

