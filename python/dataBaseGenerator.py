# Generates audioNames.js using sounds directory
# Add mp3 filename to playlist.txt to set its inList property to false

from os import listdir

audioNamesPath = './javascript/audioNames.js'

# Generate audioNames.js
with open(audioNamesPath, 'w', encoding='utf-8') as destination:

    destination.write('//All mp3 filenames\n\nconst audioNames = [\n')

    for audioName in listdir('./sounds'):
        destination.write(f'    "{audioName[:-4]}",\n')

    destination.write(']')

print(f'{audioNamesPath} successfully updated.')

# Generates playlists
with open(f'./javascript/playlists.js', 'w', encoding='utf-8') as destination:
    for filename in listdir('./python/playlists'):
        with open(f'./python/playlists/{filename}', 'r', encoding='utf-8') as playlist:
            destination.write(f'// {filename[:-4]} playlist.\n\n{filename[:-4]} = [\n')
            for audioName in playlist.readlines()[3:]:
                destination.write(f'    "{audioName[:-1]}",\n')

            destination.write(']\n\n')

        print(f'{filename[:-4]} successfully updated.')
    
    print('playlists successfully updated.')


# Generates txt files
def generatePlaylist(playlistName):
    if playlistName + '.txt' in listdir('./python/playlists'):
        print(f'{playlistName} already exists')
        return
    with open(f'./python/playlists/{playlistName}.txt', 'a', encoding='utf-8') as txtFile:
        txtFile.write(f'// Include filenames without ".mp3" of audio files to add to the {filename} playlist.\n// End line after each entry including the final entry.\n')