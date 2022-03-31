#Randomizer de pets

import vlc 
import time
import glob
from random import randint, random

pets = []

for files in glob.glob("D:/Jeux/Disturbment/*.mp3"):
    pets.append(vlc.MediaPlayer(files))

ns = [0.5, 7] #laps minimal et maximal entre chaque pet

while 1:                                                                                          
    i = randint(0,10)
    if i == 10:
        for pet in range(0, len(pets)):
            n = randint(0, len(pets)-1)
            pets[n].play()
            time.sleep(0.5)


    else:
        n = randint(0, len(pets)-1)
        pets[n].play()
        time.sleep(5)
    
    time.sleep((random()*(ns[1]-ns[0]) + ns[0])*60)
