const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]')
const stopBtn = document.querySelector('button[data-action="stop"]')
const body = document.querySelector('body')

let timerId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        let colorId = randomIntegerFromInterval(0, colors.length)
        body.style.backgroundColor = colors[colorId]
        startBtn.setAttribute('disabled', 'disabled')
        console.log('start');
    }, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId)
    startBtn.removeAttribute('disabled')
    console.log('stop');
})