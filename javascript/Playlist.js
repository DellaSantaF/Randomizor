//Manager of the selectable sounds interface

class Playlist {
    constructor() {
         
        this.table = document.getElementById('playlist');
        this.html = "";
        this.ids = []

        for (let elt of data) {
            this.html += `<tr><td>${elt.name}</td><td><audio controls><source src="./sounds/${elt.name}.mp3" type="audio/mpeg"></audio></td><td><input type="checkbox" id="${elt.name}"`;
            if (elt.inList) {
                this.html += " checked></td></tr>";
            } else {
                this.html += "></td></tr>";
            }

            this.ids.push(elt.name);
        }

        this.table.innerHTML = this.html;

        for (let id of this.ids) {
            let elt = data.filter(obj => obj.name == id)[0]
            document.getElementById(id).addEventListener('click', () => {if (elt.inList) {elt.inList = false} else {elt.inList = true}});
        }
    }
}