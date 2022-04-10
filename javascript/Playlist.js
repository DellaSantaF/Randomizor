//Manager of the selectable sounds interface
$ = (id) => {return document.getElementById(id)};

PRESSED_COLOR = "rgba(0, 100, 255, 0.3)"

class Playlist {
    constructor(audioNames) {
         
        this.table = $('audioList');
        this.html = "";

        for (const audioName of audioNames) {
            this.html += `<span class="audioListElement" id="${audioName}">
                            <span class="toggle" id="${audioName}t">${audioName}</span>
                            <button class="play" id="${audioName}p">Play</button>
                        </span>`
        }

        this.table.innerHTML = this.html;

        for (const id of audioNames) {
            $(id + 't').addEventListener('click', () => {
                AudioPlayer.toggleAudio(id);
                if (AudioPlayer.enabled.has(id)) {$(id).style.backgroundColor = PRESSED_COLOR;}
                else {$(id).style.backgroundColor = "";}
            });

            if (AudioPlayer.enabled.has(id)) {
                $(id).style.backgroundColor = PRESSED_COLOR;
            }
        }

        for (const id of audioNames) {
            $(id + 'p').addEventListener('click', () => {this.playSound(id)});
        }
    }

    playSound(audioName) {
        audios[audioName].play();
    }
}