let score = 0;
let cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

audio.play();
document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 32) {
        audio.play();
        let dino = document.querySelector('.dino')
        dino.classList.add('AnimateDino');

        setTimeout(() => {
            dino.classList.remove('AnimateDino')
        }, 700);

    }
    else if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        left = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = left + 200 + 'px';
    }
    else if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        left = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = left - 200 + 'px';
    }
}

setInterval(() => {
    dino = document.querySelector(".dino")
    gameover = document.querySelector(".gameover")
    obstacle = document.querySelector(".obstacle")

    Dino_x = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    Dino_y = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    obstacle_x = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    obstacle_y = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(Dino_x - obstacle_x);
    offsetY = Math.abs(Dino_y - obstacle_y);

    if (offsetX < 90&& offsetY < 60) {
        gameover.innerHTML='Game over- Reload again'
        obstacle.classList.remove('obstacle')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score++;
        cross = false
        updatescore(score);
        setTimeout(() => {
            cross = true
        }, 1000);
        setTimeout(() => {

            Animation_duration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            if (animationDuration > 2) {
                newdur = Animation_duration - 0.1; // reducing the time by 10ms each time 
                obstacle.style.animationDuration = newdur + 's';

            }

        }, 500);

    }

}, 10);

function updatescore(score) {
    document.getElementById('score').innerHTML = 'Your score is ' + score;
}