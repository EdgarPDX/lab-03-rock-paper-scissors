// import functions 
import { shoot, computerThrow } from './RPS.utils.js';
//DOM elements
const button = document.getElementById('button');
const showWins = document.getElementById('wins');
const showLosses = document.getElementById('losses');
const showDraws = document.getElementById('draws');
const didYouWin = document.getElementById('outcome');
const computerGuess = document.getElementById('computer-guess')
// initialize state
let wins = 0;
let draws = 0;
let losses = 0;

// set event listeners to update state and DOM

button.addEventListener('click', ()=> {
        //grabbed the image that is checked
    const checkedImage = document.querySelector('input:checked');
        //created variable for what the user chooses
    const userShoot = checkedImage.value;
        //console.log(userShoot);
    let computerShoot = null;
        //created generator for 1-3, 1=rock 2=paper 3=scissor
    const shot = computerThrow();
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
    //console.log(computerShoot);

    const result = shoot(userShoot, computerShoot);
    //console.log(result);

        //if statements for each result 0-2
    if (result === 0){
        didYouWin.textContent = 'ITS A TIE!';
        draws++;
        //console.log(draws);
    } if (result === 1){
        didYouWin.textContent = 'YOU WON!';
        wins++;
        //console.log(wins);
    } if (result === 2){
        didYouWin.textContent = 'YOU LOST!';
        losses++;
        //console.log(losses);
    }
    computerGuess.textContent = 'Computer throws: ' + computerShoot;
    showDraws.textContent = 'Total DRAWS: ' + draws;
    showWins.textContent = 'Total WINS: ' + wins;
    showLosses.textContent = 'Total LOSSES: ' + losses;
});