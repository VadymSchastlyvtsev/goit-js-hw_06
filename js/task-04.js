const minBtn = document.querySelector('button[data-action="decrement"]');
const maxBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

let value = 0;

function stepMin() {
    value -= 1;
    counterValue.textContent = value;
  };
  
  function stepMax() {
    value += 1;
    counterValue.textContent = value;
  };

  minBtn.addEventListener('click', stepMin);
  maxBtn.addEventListener('click', stepMax);

