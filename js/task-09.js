const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}
