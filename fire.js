const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = [
  '#90EE90',
  '#66CDAA',
  '#008B8B',
  '#4682B4',
  '#FFEFD5',
  '#00008B',
  '#FFE4C4',
  '#00FFFF',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColors();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #1d1d1d';
}

function getRandomColors() {
  /*Math.floor - округляет до целого числа,
  Math.random() - генерирует случайное число*/
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
