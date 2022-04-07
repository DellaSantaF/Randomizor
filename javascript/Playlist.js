//Manager of the selectable sounds interface

class Playlist {
    constructor(audioNames) {
         
        this.table = document.getElementById('playlist');
        this.html = "";

        for (const audioName of audioNames) {
            this.html += `<tr><td><button type="button" id="${audioName}" class="playlistButton">${audioName}</button></td><td><button id="${audioName}B">Play</button></td></tr>`;
        }

        this.table.innerHTML = this.html;

        for (const id of audioNames) {
            let docElt = document.getElementById(id);
            docElt.addEventListener('click', () => {
                AudioPlayer.toggleAudio(id);
                if (AudioPlayer.enabled.has(id)) {docElt.style.backgroundColor = "#1FCFC1";}
                else {docElt.style.backgroundColor = "";}
            });

            if (AudioPlayer.enabled.has(id)) {
                docElt.style.backgroundColor = "#1FCFC1"
            }
        }

        for (const fakeId of audioNames) {
            let docElt = document.getElementById(fakeId + "B");
            docElt.addEventListener('click', () => {this.playSound(fakeId)});

            docElt.style.backgroundColor = "#1FCFC1";
        }
    }

    playSound(audioName) {
        audios[audioName].play();
    }
}