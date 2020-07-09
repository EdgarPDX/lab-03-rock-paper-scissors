//0= draw
//1= win
//2= loss

export function shoot(userShoot, computerShoot) {
    if (userShoot === computerShoot){
        return 0;
    } else if (userShoot === 'rock' && computerShoot === 'scissors'){
        return 1;
    } else if (userShoot === 'rock' && computerShoot === 'paper'){
        return 2;
    } else if (userShoot === 'scissors' && computerShoot === 'paper'){
        return 1;
    } else if (userShoot === 'scissors' && computerShoot === 'rock'){
        return 2;
    } else if (userShoot === 'paper' && computerShoot === 'rock'){
        return 1;
    } else if (userShoot === 'paper' && computerShoot === 'scissors'){
        return 2;
    }
   
}


export function computerThrow(){
    return Math.ceil((Math.random() * 3));
}