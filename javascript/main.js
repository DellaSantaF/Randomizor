//Main execution file
let audios = [];

for(file of data) {
    audios.push(new Audio(`./sounds/${file.name}.mp3`));
}

let player = new AudioPlayer(audios);