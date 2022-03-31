//AudioPlayer class file

const minInterval = 20*1000; //milliseconds
const maxInterval = 120*1000; //milliseconds


class AudioPlayer { //Audio player, pauser and randomizer
    constructor(audiosList) {
        this.list = audiosList;

        this.playButton = document.getElementById('playButton');

        this.playButton.addEventListener('click', this.playSound);
    }

    randomElt() { //Gives a random element out of the list
        let index = Math.floor(Math.random()*this.list.length);

        while (!data[index].inList) { //does not use if inList = false
            index = Math.floor(Math.random()*this.list.length);
        }
        return this.list[index]
    }

    playSound() {
        setInterval ( function() {
            let rd = player.randomElt(); //idk why but I have to use player instead of this
            rd.play();
        },minInterval + Math.random()*(maxInterval-minInterval))
    }

    pause() {
        this.flag = false;
    }
}