import discord
from discord.ext import commands, tasks
from random import *

client = commands.Bot(command_prefix='yeet-')

#Events

@client.event
async def on_ready():
    await client.change_presence(status=discord.Status.online, activity=discord.Game('Virtual World but Chad Version'))

    tell.start()


@client.event
async def on_member_join(member, ctx):
    await ctx.send(member + 'yeete gaiement!')
    
@client.event
async def on_member_remove(member, ctx):
    await ctx.send(member + 'ne yeete plus... );')



#Commands

@client.command(aliases=['rand', 'random'])
async def pick(ctx, *, args):

    noms = args.split('-')[0].split(' ')[:-1]
    liste = args.split('-')[1].split(' ')[1:]

    response = ''

    for name in noms:
        response += f'{name}: {liste.pop(randint(0, len(liste)-1))}\n'

    await ctx.send(response)


@client.command(aliases=['dickSize', 'Pp', 'PP', 'Dicksize', 'pP', 'DickSize', 'dicksize'])
async def pp(ctx, member: discord.Member='y'):
    if member == 'y':
        member = ctx.author

    liste = [' has very big pp.', ' GOT HUGE PP!', ' owns reasonable pp size.', ' is smol pp.', ' has micropenis.', ' hasn\'t got any pp at all!']

    await ctx.send(f'<@{member.id}>{choice(liste)}')


@client.command(aliases=['input'])
async def Input(ctx, *, arg):
    fichier = open('random_sentences.txt', 'a', encoding='utf-8')
    fichier.write(arg + '\n')
    fichier.close()

    await ctx.send('Sentence was saved succesfully! Yeet!')


@client.command()
async def say(ctx, *, arg=' '):
    fichier = open('random_sentences.txt', 'r', encoding='utf-8')
    await ctx.send(choice(fichier.readlines()))
    fichier.close()


@client.command(pass_context=True)
async def join(ctx):
    channel = ctx.message.author.voice.voice_channel
    await client.join_voice_channel(channel)


@client.command(pass_context=True)
async def leave(ctx):
    server = ctx.message.server
    voice_client = client.voice_client_in(server)
    await voice_client.disconnect()

 
#Tasks
@tasks.loop(seconds=3000)
async def tell():
    channel = client.get_channel(826515847702904845)

    fichier = open('random_sentences.txt', 'r', encoding='utf-8')
    await channel.send(choice(fichier.readlines()))
    fichier.close()


client.run('ODI2NTEzMDcyMDc1NDQwMTM5.YGNkSA.FJRueJ7-NIj8rTVOTh2yzZAdMmc')