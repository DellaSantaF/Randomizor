from random import randint

liste = ['Tioumen', 'Sibir', 'Petroplav']

noms = ['Thomas', 'Florian', 'David']

for name in noms:
    print(name + ': ' + liste.pop(randint(0, len(liste)-1)))