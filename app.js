// import functions 
import {} from'./RPS.utils.js'
//DOM elements
const button = document.getElementById('button');
const showWins = document.getElementById('wins');
const showLosses = document.getElementById('losses');
const showDraws = document.getElementById('draws');
const didYouWin = document.getElementById('outcome');

// initialize state
let wins = 0;
let draws = 0;


// set event listeners to update state and DOM

button.addEventListener('click', ()=> {
        //grabbed the image that is checked
    const checkedImage = document.querySelector('input:checked');
        //created variable for what the user chooses
    const userShoot = checkedImage.value;
        //console.log(userShoot);
    let computerShoot = null;
        //created generator for 1-3, 1=rock 2=paper 3=scissor
    const shot = Math.ceil((Math.random() * 3));
        //console.log(shot);
        //if statements to give string values to 1-3
    if (shot === 1){
        computerShoot = 'rock';
    }
    else if (shot === 2){
        computerShoot = 'paper';
    } else {
        computerShoot = 'scissors';
    }
    console.log(computerShoot);

});