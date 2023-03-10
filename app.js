const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0;
let score = 0;


startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
 if(e.target.classList.contains('time-btn')){
    time = parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
 }
});

board.addEventListener('click', e => {
    if(e.target.classList.contains('circle')){
        score++
        e.target.remove();
        createRandomCircle();
    }
})


function startGame() {
    setInterval(decreaseTime,1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime(){
    if(time === 0) {
        finishGame()
    }else{
        let current = --time
        if(current < 10){
           current = `0${current}`
        }
         setTime(current)
    }

};

function setTime(val){
    timeEl.innerHTML = `00:${val}`
};

function finishGame() {
    timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`
};

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNum(10,60);
    const { width, height} = board.getBoundingClientRect();
    const x = getRandomNum(0, width - size);
    const y = getRandomNum(0, height - size);

    circle.classList.add('circle')
    circle.style.width =  `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)

};

function getRandomNum(min,max) {
   return Math.round(Math.random() * (max - min) + min)
}