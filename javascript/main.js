//Main execution file
audioPath = (audioName) => {return `./sounds/${audioName}.mp3`}
audios = {}
for(const audioName of audioNames) {
    audios[audioName] = new Audio(audioPath(audioName));
}

const player = new AudioPlayer();

for(const audioName of audioNames) {
    AudioPlayer.enableAudio(audioName);
}
for(const audioName of disable) {
    AudioPlayer.disableAudio(audioName);
}

const playlistManager = new Playlist(audioNames);