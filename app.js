const soundPlayer = new Audio();
const sounds = ['BUURP.mp3', 'FAAART.mp3'];

function playLowerNote() {
    soundPlayer.src = sounds[Math.round(Math.random())];
    soundPlayer.mozPreservesPitch = false;
    let randomNumber = getRandomInt(7, 14);
    soundPlayer.playbackRate = randomNumber / 10;
    soundPlayer.play();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

document.body.addEventListener('keyup', () => {
    playLowerNote();
})