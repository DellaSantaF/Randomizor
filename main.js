//Main execution file
let audios = [];

for(file of data) {
    let a = new Audio(`./sounds/${file.name}.mp3`);
    audios.push(a);
}

let player = new AudioPlayer(audios);