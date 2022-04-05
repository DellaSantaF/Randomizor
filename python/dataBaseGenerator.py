# Generates dataBase.js using sounds directory
# Add mp3 filename to disable.txt to set its inList property to false

import os

dataBase = 'dataBase.js'

with open(f'./python/disable.txt', 'r', encoding='utf-8') as ignoreList:
    ignore = set()
    for item in ignoreList.readlines()[3:]:
        ignore.add(item[:-1])

with open(f'./javascript/{dataBase}', 'w', encoding='utf-8') as data:

    data.write('//All mp3, svg data storage\n\nconst data = [\n')

    for filename in os.listdir('./sounds'):
        filename = filename[:-4]
        inList = 'false' if filename in ignore else 'true'

        data.write('    {' + f'name: "{filename}", inList: {inList}' + '},\n')

    data.write(']')