// AudioPlayer class file
const MIN_INTERVAL = 0*1000; // milliseconds
let max_interval = 600*1000; // milliseconds

document.getElementById('playLogo').innerHTML = logos[0].html;
document.getElementById('pauseLogo').innerHTML = logos[1].html;

//TODO: replace all instances of player with this.
class AudioPlayer { //Audio player, pauser and randomizer
    constructor(audioList) {
        const self = this;
        this.audioList = audioList;
        this.loop; // play-sleep loop
        this.currentAudio; // will be used as the audio object

        this.playButton = document.getElementById('playButton');
        this.playButton.addEventListener('click', () => {this.play()});

        this.pauseButton = document.getElementById('pauseButton');
        this.pauseButton.addEventListener('click', () => {this.pause()});

        this.playClass = document.querySelectorAll('.play');
        this.pauseClass = document.querySelectorAll('.pause');

        this.timer = document.getElementById('timer');

        this.secretButton = document.getElementById('secretButton');
        this.secretButton.addEventListener('click', () => {this.randomSound()})

        this.intervalInput = document.getElementById('interval');
        this.intervalInput.addEventListener('change', () => {max_interval = Number(this.intervalInput.value)*60*1000});
    }

    randomElt() { // Gives a random element out of the audioList
        let index;
        do { // does not use if inList = false
            index = Math.floor(Math.random()*this.audioList.length);
        } while (!data[index].inList)
        return this.audioList[index]
    }

    randomSound() {
        this.randomElt().play();
    }

    play() {
        for (const path of this.playClass) {
            path.style.display = "none";
        }
        for (const path of this.pauseClass) {
            path.style.display = "block";
        }

        this.randomSoundLoop()
        this.startTimer()
    }

    randomSoundLoop() {
        this.loop = setTimeout (
            () => {
                this.randomSound()

                this.randomSoundLoop(); // recursive call
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
        this.audioList.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        })

        for (const path of this.playClass) {
            path.style.display = "block";
        }
        for (const path of this.pauseClass) {
            path.style.display = "none";
        }

        clearTimeout(this.loop);
        clearInterval(this.timerLoop);
    }

    static audioByID(id) {
        return (data.filter(obj => obj.name == id)[0])
    }
}