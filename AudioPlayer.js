//AudioPlayer class file

const minInterval = 20*1000; //milliseconds
const maxInterval = 600*1000; //milliseconds


class AudioPlayer { //Audio player, pauser and randomizer
    constructor(audiosList) {
        this.list = audiosList;
        this.loop; //play-sleep loop
        this.rd; //will be used as the audio object


        document.getElementById('playLogo').innerHTML = logos[0].html;
        document.getElementById('pauseLogo').innerHTML = logos[1].html;

        this.playButton = document.getElementById('playButton');
        this.playButton.addEventListener('click', this.playSound);

        this.pauseButton = document.getElementById('pauseButton');
        this.pauseButton.addEventListener('click', this.pause);

        this.playClass = document.querySelectorAll('.play');
        this.pauseClass = document.querySelectorAll('.pause');

    }

    randomElt() { //Gives a random element out of the list
        let index = Math.floor(Math.random()*this.list.length);

        while (!data[index].inList) { //does not use if inList = false
            index = Math.floor(Math.random()*this.list.length);
        }
        return this.list[index]
    }

    playSound() {

        for (let i=0; i<player.playClass.length; i++) {
            player.playClass[i].style.display = "none";
        }
        for (let i=0; i<player.pauseClass.length; i++) {
            player.pauseClass[i].style.display = "block";
        }

        player.loop = setInterval ( function() {
            player.rd = player.randomElt(); //idk why but I have to use player instead of this
            player.rd.play();
        },minInterval + Math.random()*(maxInterval-minInterval))
    }

    pause() {
        try {
            player.rd.pause();
        } catch (e) {} finally {}

        for (let i=0; i<player.playClass.length; i++) {
            player.playClass[i].style.display = "block";
        }
        for (let i=0; i<player.pauseClass.length; i++) {
            player.pauseClass[i].style.display = "none";
        }


        clearInterval(player.loop);
    }
}