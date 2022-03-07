const colors = [
  'red',
  'pink',
  'f8fafc',
  'rgba(133,122,200)',
  '#f15025',
  'green',
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
