'use strict';

var scores, roundscore, activePlayer, stillPlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
    if (stillPlaying) {
        var dice = Math.floor(Math.random() * 6 + 1);
        var diceDOM = document.querySelector('.dice');
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundscore += dice; //count the total score
            document.querySelector('#current--' + activePlayer).textContent = dice;
        } else {
            document.querySelector('#score--' + activePlayer).textContent = 0;
            scores[activePlayer] = 0;
            nextPlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (stillPlaying) {
        scores[activePlayer] += roundscore;
        document.querySelector('#score--' + activePlayer).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name--' + activePlayer).textContent = 'You Win';
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'none';
            stillPlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundscore = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

function init() {
    scores = [0, 0];
    roundscore = 0;
    activePlayer = 0;
    stillPlaying = true;

    document.getElementById('current--0').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--1').textContent = 0;

    document.querySelector('#name--0').textContent = 'PLAYER 1';
    document.querySelector('#name--1').textContent = 'PLAYER 2';
    document.querySelector('.dice').style.display = '';
}
