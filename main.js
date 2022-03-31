//Main execution file
let files = require('fs').readdirSync('/sounds/');
let audios = [];

for(file of files) {
    let a = new Audio(file);
    audios.append(a);
}

new AudioPlayer(audios);