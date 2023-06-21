const bodyColor = document.querySelector('body');
const ChangeColor = document.querySelector('.change-color')
const colorSpan = document.querySelector(".color");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hadlerClick (){
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

bodyColor.addEventListener('click', hadlerClick)
