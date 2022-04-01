//AudioPlayer class file

const MIN_INTERVAL = 0*1000; //milliseconds
const MAX_INTERVAL = 600*1000; //milliseconds


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

        this.timer = document.getElementById('timer');

    }

    randomElt() { //Gives a random element out of the list
        let index;
        do { //does not use if inList = false
            index = Math.floor(Math.random()*this.list.length);
        } while (!data[index].inList)
        return this.list[index]
    }

    playSound() {

        for (let i = 0; i < player.playClass.length; i++) {
            player.playClass[i].style.display = "none";
        }
        for (let i = 0; i < player.pauseClass.length; i++) {
            player.pauseClass[i].style.display = "block";
        }

        player.loop = setInterval ( function() {
            player.rd = player.randomElt(); //idk why but I have to use player instead of this
            player.rd.play();
        },MIN_INTERVAL + Math.random()*(MAX_INTERVAL-MIN_INTERVAL))

        let count = 0;
        player.timerLoop = setInterval ( function() {

            count += 1;
            this.timer.textContent = `${Math.floor(count / 36000)}:${Math.floor((count%36000)/ 600)}:${Math.floor((count%600)/ 10)}.${Math.floor(count%10)}`;
        },100)
    }

    pause() {
        try {
            player.rd.pause();
        } catch (e) {} finally {}

        for (let i = 0; i < player.playClass.length; i++) {
            player.playClass[i].style.display = "block";
        }
        for (let i = 0; i < player.pauseClass.length; i++) {
            player.pauseClass[i].style.display = "none";
        }

        clearInterval(player.timerLoop);
        clearInterval(player.loop);
    }
}