// AudioPlayer class file
const MIN_INTERVAL = 0*1000; // milliseconds
const MAX_INTERVAL = 600*1000; // milliseconds

document.getElementById('playLogo').innerHTML = logos[0].html;
document.getElementById('pauseLogo').innerHTML = logos[1].html;

//TODO: replace all instances of player with this.
class AudioPlayer { //Audio player, pauser and randomizer
    constructor(audiosList) {
        this.list = audiosList;
        this.loop; // play-sleep loop
        this.rd; // will be used as the audio object

        this.playButton = document.getElementById('playButton');
        this.playButton.addEventListener('click', this.playSound);

        this.pauseButton = document.getElementById('pauseButton');
        this.pauseButton.addEventListener('click', this.pause);

        this.playClass = document.querySelectorAll('.play');
        this.pauseClass = document.querySelectorAll('.pause');

        this.timer = document.getElementById('timer');

        this.secretButton = document.getElementById('secretButton');
        this.secretButton.addEventListener('click', () => {player.randomElt().play();})
    }

    randomElt() { // Gives a random element out of the list
        let index;
        do { // does not use if inList = false
            index = Math.floor(Math.random()*this.list.length);
        } while (!data[index].inList)
        return this.list[index]
    }

    playSound() {
        for (const path of player.playClass) {
            path.style.display = "none";
        }
        for (const path of player.pauseClass) {
            path.style.display = "block";
        }

        player.randomSoundLoop()

        player.startTimer()
    }

    randomSoundLoop() {
        player.loop = setTimeout (
            () => {
                player.rd = player.randomElt();
                player.rd.play();

                player.randomSoundLoop(); // recursive call
            }
            ,MIN_INTERVAL + Math.random()*(MAX_INTERVAL-MIN_INTERVAL)
        )
    }

    startTimer() {
        this.timer.textContent = '00 : 00 : 00';

        let seconds = 1;
        let minutes = 0;
        let hours = 0;

        player.timerLoop = setInterval(
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
        try {player.rd.pause();} 
        catch (e) {} finally {}

        for (const path of player.playClass) {
            path.style.display = "block";
        }
        for (const path of player.pauseClass) {
            path.style.display = "none";
        }

        clearTimeout(player.loop);
        clearInterval(player.timerLoop);
    }
}