//AudioPlayer class file

const minInterval = 20*1000; //milliseconds
const maxInterval = 120*1000; //milliseconds


class AudioPlayer { //Audio player, pauser and randomizer
    constructor(audiosList) {
        this.list = audiosList;
        this.flag = true; //indicates wether the sound has to go on or stop

        this.playButton = document.getElementById('playButton');

        this.playButton.onclick = this.play;
    }

    randomElt() { //Gives a random element out of the list
        return this.list[Math.floor(Math.random()*this.list.length)];
    }

    play() {
        console.log('yeet')
        while (this.flag) {
            this.randomElt.play();
            setTimeout(null, minInterval + Math.random()*(maxInterval-minInterval));
        }
    }     

    pause() {
        this.flag = false;
    }
}