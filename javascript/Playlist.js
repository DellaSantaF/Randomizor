//Manager of the selectable sounds interface

class Playlist {
    constructor(audios) {
         
        this.audios = audios;
        this.table = document.getElementById('playlist');
        this.html = "";
        this.ids = [];

        for (let elt of data) {
            this.html += `<tr><td><button type="button" id="${elt.name}" class="playlistButton">${elt.name}</button></td><td><button id="${elt.name}B">Play</button></td></tr>`;

            this.ids.push(elt.name);
        }

        this.table.innerHTML = this.html;

        for (let id of this.ids) {
            let elt = audioByID(id);
            let docElt = document.getElementById(id);
            docElt.addEventListener('click', () => {elt.inList = !elt.inList; if (elt.inList) {docElt.style.backgroundColor = "#1FCFC1";} else {docElt.style.backgroundColor = "";}});

            if (elt.inList) {
                docElt.style.backgroundColor = "#1FCFC1"
            }
        }

        for (let fakeID of this.ids) {
            let id = fakeID + "B";
            let docElt = document.getElementById(id);
            docElt.addEventListener('click', () => {this.playSound(fakeID)});

            docElt.style.backgroundColor = "#1FCFC1";
        }
    }

    playSound(id) {
        this.audios[data.findIndex((elt) => {return elt.name == id;})].play();
    }
}