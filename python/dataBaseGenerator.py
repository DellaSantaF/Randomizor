# Generates dataBase.js using sounds directory
# Add mp3 filename to disable.txt to set its inList property to false

from os import listdir

dataBase = './javascript/dataBase.js'
disable = './javascript/disable.js'

with open('./python/disable.txt', 'r', encoding='utf-8') as ignoreList, open(disable, 'w', encoding='utf-8') as disable:
    disable.write("""// audio files disabled by default.

disable = [
""")
    for filename in ignoreList.readlines()[3:]:
        disable.write(f'    "{filename[:-1]}",\n')

    disable.write(']')

with open(dataBase, 'w', encoding='utf-8') as data:

    data.write("""//All mp3, svg data storage
    
const data = [
""")

    for filename in listdir('./sounds'):
        data.write(f'    "{filename[:-4]}",\n')

    data.write(']')