//Main execution file
const audios = Array();

for(file of data) {
    audios.push(new Audio(`./sounds/${file.name}.mp3`));
}

const playlistManager = new Playlist(audios);

const player = new AudioPlayer(audios);