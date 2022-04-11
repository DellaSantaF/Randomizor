// AudioPlayer class file
const MIN_INTERVAL = 0*1000; // milliseconds
const SALVO_CHANCE = 0.1;
const SALVO_LENGTH = 20;
const SALVO_INTERVAL = 2000; // ms

let max_interval = 600*1000; // milliseconds

$ = (id) => {return document.getElementById(id)};

$('playLogo').innerHTML = logos[0].html;
$('pauseLogo').innerHTML = logos[1].html;

//TODO: replace all instances of player with this.
class AudioPlayer { //Audio player, pauser and randomizer
    static enabled = new Set();

    constructor() {
        this.loop; // play-sleep loop
        this.currentAudio; // will be used as the audio object

        this.playButton = $('playButton');
        this.playButton.addEventListener('click', () => {this.play()});

        this.pauseButton = $('pauseButton');
        this.pauseButton.addEventListener('click', () => {this.pause()});

        this.playClass = document.querySelectorAll('.play');
        this.pauseClass = document.querySelectorAll('.pause');

        this.timer = $('timer');

        this.secretButton = $('secretButton');
        this.secretButton.addEventListener('click', () => {this.randomEvent()})

        this.intervalInput = $('interval');
        this.intervalInput.addEventListener('change', () => {max_interval = Number(this.intervalInput.value)*60*1000});

    }

    randomElt() { // Gives a random audioName out of the enabled
        let idx = (Math.random() * AudioPlayer.enabled.size) >> 0
        for(const audioName of AudioPlayer.enabled) {
            if(!idx--) return audioName;
        }
    }

    randomSound() {
        audios[this.randomElt()].play();
    }

    randomEvent() {
        let rand = Math.random();
        rand -= SALVO_CHANCE
        if(rand < 0) {
            this.salvo((SALVO_LENGTH * Math.random()) >> 0);
        }

        this.randomSound();
    }

    play() {
        for (const path of this.playClass) {
            path.style.display = "none";
        }
        for (const path of this.pauseClass) {
            path.style.display = "block";
        }

        this.startLoop()
        this.startTimer()
    }

    startLoop() {
        this.loop = setTimeout (
            () => {
                this.randomEvent()

                this.startLoop(); // recursive call
            }
            ,MIN_INTERVAL + Math.random()*(max_interval-MIN_INTERVAL)
        )
    }

    startTimer() {
        this.timer.textContent = '00 : 00 : 00';

        let seconds = 1;
        let minutes = 0;
        let hours = 0;

        this.timerLoop = setInterval(
            () => {
                this.timer.textContent = `\
                ${hours < 10? '0' + hours : hours} :
                ${minutes < 10? '0' + minutes : minutes} :
                ${seconds < 10? '0' + seconds : seconds}`

                seconds++;
                if(seconds < 60) return;
                seconds = 0;
                minutes++;
                if(minutes < 60) return;
                minutes = 0;
                hours++;
            }
        ,1000)
    }

    pause() {
        for(const audio of Object.values(audios)) {
            audio.pause();
            audio.currentTime = 0;
        }

        for (const path of this.playClass) {
            path.style.display = "block";
        }
        for (const path of this.pauseClass) {
            path.style.display = "none";
        }

        clearTimeout(this.loop);
        clearInterval(this.timerLoop);
        clearTimeout(this.salvoLoop);
    }

    salvo(count) {
        if(!count) return;

        this.randomSound();
        this.salvoLoop = setTimeout(
        () => {this.salvo(count - 1)}
        , SALVO_INTERVAL * Math.random())
    }

    static enableAudio(filename) {
        AudioPlayer.enabled.add(filename);
    }

    static disableAudio(filename) {
        AudioPlayer.enabled.delete(filename);
    }

    static toggleAudio(filename) {
        if(AudioPlayer.enabled.has(filename)) {
            AudioPlayer.disableAudio(filename);
        }
        else {
            AudioPlayer.enableAudio(filename);
        }
    }
}