const { Pokemon } = require('../classes/Pokemon')
const { Move } = require('../classes/Move')
const { Trainer } = require('../classes/Trainer')
const { Battle } = require('../classes/Battle')

const tD = {}



tD.shroomish = new Pokemon('Shroomish', [60, 40], 'Grass')
tD.porygon = new Pokemon('Porygon', [65, 60], 'Normal')
tD.slugma = new Pokemon('Slugma', [40, 40], 'Fire')
tD.psyduck = new Pokemon('Psyduck', [50, 52], 'Water')
tD.houndour = new Pokemon('Houndour', [45, 60], 'Fire', 'Dark')
tD.snivy = new Pokemon('Snivy', [45, 45], 'Grass')
tD.slowpoke = new Pokemon('Slowpoke', [90, 65], 'Water', 'Psychic')
tD.lotad = new Pokemon('Lotad', [40, 30], 'Water', 'Grass')
tD.omanyte = new Pokemon('Omanyte', [45, 40], 'Water', 'Rock')
tD.charmander = new Pokemon('Charmander', [39, 52], 'Fire')
tD.glameow = new Pokemon('Glameow', [49, 55], 'Normal')
tD.kabuto = new Pokemon('Kabuto', [30, 80], 'Rock', 'Water')
tD.lileep = new Pokemon('Lileep', [66, 41], 'Rock', 'Grass')
tD.glassCannon = new Pokemon('Glass Cannon', [1, 1000], 'Normal')
tD.chimchar = new Pokemon('Chimchar', [44, 58], 'Fire')
tD.eevee = new Pokemon('Eevee', [55, 55], 'Normal')
tD.misdreavus = new Pokemon('Misdreavus', [60, 60], 'Ghost')
tD.solrock = new Pokemon('Solrock', [70, 95, 55], 'Rock', 'Psychic')
tD.lunatone = new Pokemon('Lunatone', [70, 60, 60, 65, 85], 'Rock', 'Psychic')
tD.charizard = new Pokemon('Charizard', [78, 84, 109, 78, 85], 'Fire', 'Flying')
tD.rhydon = new Pokemon('Rhydon', [105, 130, 45, 120, 45], 'Rock', 'Ground')

tD.venusaur = new Pokemon('Venusaur', [80, 82, 100, 83, 100], 'Grass', 'Poison')
tD.aerodactyl = new Pokemon('Aerodactyl', [80, 105, 60, 65, 75], 'Rock', 'Flying')
tD.celebi = new Pokemon('Celebi', [100, 100, 100, 100, 100], 'Grass', 'Psychic')
tD.lycanroc = new Pokemon('Lycanroc', [75, 115, 55, 65, 65], 'Rock')
tD.dragonite = new Pokemon('Dragonite', [91, 134, 100, 95, 100], 'Dragon', 'Flying')
tD.florges = new Pokemon('Florges', [78, 65, 112, 68, 154], 'Fairy')
tD.whismur = new Pokemon('Whismur', [62, 51, 51, 23, 23], 'Normal')
tD.steelix = new Pokemon('Steelix', [75, 85, 55, 200, 65], 'Steel', 'Ground')
tD.tauros = new Pokemon('Tauros', [75, 100, 40, 95, 70], 'Normal')
tD.arcanine = new Pokemon('Arcanine', [90, 110, 100, 80, 80], 'Fire')



tD.absorb = new Move('Absorb', 'Grass')
tD.tackle = new Move('Tackle', 'Normal')
tD.seedBomb = new Move('Seed Bomb', 'Grass')
tD.headbutt = new Move('Headbutt', 'Normal')
tD.megaDrain = new Move('Mega Drain', 'Grass')
tD.waterGun = new Move('Water Gun', 'Water')
tD.rockSlide = new Move('Rock Slide', 'Rock')
tD.ember = new Move('Ember', 'Fire')
tD.lastResort = new Move('Last Resort', 'Normal', 2)
tD.flamethrower = new Move ('Flamethrower', 'Fire', 10, 90)
tD.zapCannon = new Move ('Zap Cannon', 'Electric', 10, 90, 50) 
tD.bite = new Move('Bite', 'Dark')
tD.scratch = new Move('Scratch', 'Normal')
tD.shadowBall = new Move('Shadow Ball', 'Ghost')
tD.confusion = new Move('Confusion', 'Psychic')
tD.powerGem = new Move('Power Gem', 'Rock', 25, 60, 100, 'Special')
tD.wingAttack = new Move('Wing Attack', 'Flying', 35, 60, 100, 'Physical', [], 'Strikes the foe with wings spread wide')
tD.fireBlast = new Move('Fire Blast', 'Fire', 15, 120, 75, 'Special', [], 'The foe is attacked with an intense blast of all-consuming fire')
tD.slash = new Move('Slash', 'Normal', 20, 70, 100, 'Physical', [], 'The foe is attacked with a slash of claws')
tD.earthquake = new Move('Earthquake', 'Ground', 5, 100, 100, 'Physical', [], 'A powerful quake, but has no effect on flying foes')
tD.sludgeBomb = new Move('Sludge Bomb', 'Poison', 10, 90, 100, 'Physical')
tD.solarBeam = new Move('Solar Beam', 'Grass', 10, 60, 100, 'Special')
tD.hyperBeam = new Move('Hyper Beam', 'Normal', 5, 90, 90,'Special')

tD.rockWrecker = new Move('Rock Wrecker', 'Rock', 5, 150, 100, 'Physical')
tD.skyAttack = new Move('Sky Attack', 'Flying', 5, 150, 100, 'Physical', ['Charge'])
tD.blastBurn = new Move('Blast Burn', 'Fire', 5, 150, 100, 'Physical', ['Recharge'])
tD.normalFly = new Move('Normal Fly', 'Normal', 15, 90, 100, 'Physical', ['Fly'])
tD.normalDig = new Move('Normal Dig', 'Normal', 15, 90, 100, 'Physical', ['Dig'])
tD.gust = new Move('Gust', 'Flying', 35, 60, 100, 'Physical', ['Hits Fly'])
tD.rampage = new Move('Rampage', 'Normal', 20, 90, 100, 'Physical', ['Hits Dig'])
tD.recover = new Move('Recover', 'Normal', 10, 'N/A', 'N/A', 'Status', ['Recover'])
tD.drainingKiss = new Move('Draining Kiss', 'Fairy', 10, 60, 100, 'Special', ['Drain'])
tD.gigaDrain = new Move('Giga Drain', 'Grass', 10, 60, 100, 'Special', ['Drain'])
tD.crunch = new Move('Crunch', 'Dark', 15, 80, 100, 'Physical')
tD.scratch = new Move('Scratch', 'Normal', 40, 30, 100, 'Physical')
tD.splash = new Move('Splash', 'Normal', 40, 'N/A', 'N/A', 'Status')
tD.razorLeaf = new Move('Razor Leaf', 'Grass', 30, 60, 100, 'Physical', ['High Crit'])
tD.dragonRage = new Move('Dragon Rage', 'Dragon', 20, 40, 100, 'Special', ['Set Damage'])
tD.furySwipes = new Move('Fury Swipes', 'Normal', 15, 18, 85, 'Physical', ['Multi-Hit'])
tD.doubleKick = new Move('Double Kick', 'Fighting', 30, 30, 100, 'Physical', ['Double-Hit'])
tD.takeDown = new Move('Take Down', 'Normal', 15, 90, 100, 'Physical', ['Recoil'])
tD.selfDestruct = new Move('Self-Destruct', 'Normal', 5, 250, 100, 'Physical', ['Self-Destruct'])
tD.roar = new Move('Roar', 'Normal', 10, 'N/A', 'N/A', 'Status', ['Force Switch'])



tD.michael = new Trainer('Michael')
tD.evilMichael = new Trainer('Evil Michael')
tD.coolGuy = new Trainer('Cool Guy')
tD.fossilphile = new Trainer('Fossilphile')
tD.glassGeneral = new Trainer('Glass General')
tD.glassColonel = new Trainer('Glass Colonel')
tD.paul = new Trainer('Paul')
tD.mikey = new Trainer('Mikey')
tD.firebreather = new Trainer('Firebreather')
tD.gambler = new Trainer('Gambler')
tD.shroomFan = new Trainer('Shroom Fan')
tD.shroomLover = new Trainer('Shroom Lover')
tD.medium = new Trainer('Medium')
tD.glamourMom = new Trainer('Glamour Mom')
tD.scientist = new Trainer('Scientist')
tD.nerd = new Trainer('Nerd')
tD.mystic = new Trainer('Mystic')
tD.starman = new Trainer('Starman')
tD.sunboy = new Trainer('Sunboy')
tD.lunarlad = new Trainer('Lunarlad')
tD.moonman = new Trainer('Moonman')
tD.red = new Trainer('Red')
tD.blue = new Trainer('Blue')

tD.pyromaniac = new Trainer('Pyromaniac')
tD.waiter = new Trainer('Waiter')
tD.timeLord = new Trainer('Time Lord')
tD.timeExecutive = new Trainer('Time Executive')
tD.hiker = new Trainer('Hiker')
tD.ninja = new Trainer('Ninja')
tD.steadyEddie = new Trainer('Steady Eddie')
tD.dragonTamer = new Trainer('Dragon Tamer')
tD.faePrince = new Trainer('Fae Prince')
tD.furiousFred = new Trainer('Furious Fred')
tD.someSap = new Trainer('Some Sap')
tD.sculptor = new Trainer('Sculptor')
tD.roughneck = new Trainer('Roughneck')
tD.glassPrivate = new Trainer('Glass Private')
tD.glassPeon = new Trainer('Glass Peon')
tD.katy = new Trainer('Katy')



tD.michael.catch(tD.shroomish, 'Shroomy')
tD.michael.catch(tD.slugma, 'Slugs')
tD.michael.catch(tD.psyduck)
tD.michael.catch(tD.snivy)
tD.michael.catch(tD.houndour)
tD.michael.catch(tD.porygon)
tD.evilMichael.catch(tD.slowpoke, 'Pokester')
tD.coolGuy.catch(tD.lotad, "Paddy")
tD.fossilphile.catch(tD.omanyte, "Benedict")
tD.glassGeneral.catch(tD.glassCannon, 'Cannon A')
tD.glassGeneral.catch(tD.glassCannon, 'Cannon B')
tD.glassGeneral.catch(tD.glassCannon, 'Cannon C')
tD.glassGeneral.catch(tD.glassCannon, 'Cannon D')
tD.glassGeneral.catch(tD.glassCannon, 'Cannon E')
tD.glassColonel.catch(tD.glassCannon, 'Cannon F')
tD.glassColonel.catch(tD.glassCannon, 'Cannon G')
tD.glassColonel.catch(tD.glassCannon, 'Cannon H')
tD.paul.catch(tD.chimchar)
tD.mikey.catch(tD.eevee)
tD.firebreather.catch(tD.charmander)
tD.gambler.catch(tD.porygon)
tD.shroomFan.catch(tD.shroomish)
tD.shroomLover.catch(tD.shroomish)
tD.medium.catch(tD.misdreavus)
tD.glamourMom.catch(tD.glameow)
tD.scientist.catch(tD.porygon)
tD.nerd.catch(tD.porygon)
tD.mystic.catch(tD.slowpoke)
tD.starman.catch(tD.solrock)
tD.sunboy.catch(tD.solrock)
tD.lunarlad.catch(tD.lunatone)
tD.moonman.catch(tD.lunatone)
tD.red.catch(tD.charizard)

tD.red.catch(tD.venusaur)
tD.red.catch(tD.porygon)
tD.blue.catch(tD.rhydon)
tD.pyromaniac.catch(tD.charizard)
tD.pyromaniac.catch(tD.slugma)
tD.pyromaniac.catch(tD.houndour)
tD.waiter.catch(tD.aerodactyl)
tD.timeLord.catch(tD.celebi)
tD.timeExecutive.catch(tD.celebi)
tD.hiker.catch(tD.lycanroc)
tD.ninja.catch(tD.venusaur)
tD.dragonTamer.catch(tD.dragonite)
tD.steadyEddie.catch(tD.charizard)
tD.faePrince.catch(tD.florges)
tD.furiousFred.catch(tD.rhydon)
tD.furiousFred.catch(tD.psyduck)
tD.someSap.catch(tD.whismur)
tD.someSap.catch(tD.whismur)
tD.sculptor.catch(tD.tauros)
tD.roughneck.catch(tD.steelix)
tD.glassPrivate.catch(tD.glassCannon)
tD.glassPrivate.catch(tD.glassCannon)
tD.glassPeon.catch(tD.glassCannon)
tD.katy.catch(tD.arcanine)



tD.evilMichael.pokemon[0].teach(tD.waterGun)
tD.coolGuy.pokemon[0].teach(tD.absorb)
tD.coolGuy.pokemon[0].teach(tD.waterGun)
tD.fossilphile.pokemon[0].teach(tD.waterGun)
tD.fossilphile.pokemon[0].teach(tD.rockSlide)
tD.glassGeneral.pokemon[0].teach(tD.tackle)
tD.glassGeneral.pokemon[1].teach(tD.tackle)
tD.glassGeneral.pokemon[2].teach(tD.tackle)
tD.glassGeneral.pokemon[3].teach(tD.tackle)
tD.glassGeneral.pokemon[4].teach(tD.tackle)
tD.glassColonel.pokemon[0].teach(tD.tackle)
tD.glassColonel.pokemon[1].teach(tD.tackle)
tD.glassColonel.pokemon[2].teach(tD.tackle)
tD.paul.pokemon[0].teach(tD.ember)
tD.mikey.pokemon[0].teach(tD.lastResort)
tD.firebreather.pokemon[0].teach(tD.flamethrower)
tD.gambler.pokemon[0].teach(tD.zapCannon)
tD.shroomFan.pokemon[0].teach(tD.absorb)
tD.shroomLover.pokemon[0].teach(tD.absorb)
tD.medium.pokemon[0].teach(tD.shadowBall)
tD.medium.pokemon[0].teach(tD.confusion)
tD.glamourMom.pokemon[0].teach(tD.bite)
tD.glamourMom.pokemon[0].teach(tD.scratch)
tD.scientist.pokemon[0].teach(tD.tackle)
tD.nerd.pokemon[0].teach(tD.confusion)
tD.mystic.pokemon[0].teach(tD.confusion)
tD.starman.pokemon[0].teach(tD.rockSlide)
tD.sunboy.pokemon[0].teach(tD.powerGem)
tD.lunarlad.pokemon[0].teach(tD.rockSlide)
tD.moonman.pokemon[0].teach(tD.powerGem)
tD.red.pokemon[0].teach(tD.wingAttack)
tD.red.pokemon[0].teach(tD.fireBlast)
tD.red.pokemon[0].teach(tD.slash)
tD.red.pokemon[0].teach(tD.earthquake)
tD.red.pokemon[1].teach(tD.sludgeBomb)
tD.red.pokemon[1].teach(tD.solarBeam)
tD.red.pokemon[1].teach(tD.hyperBeam)
tD.red.pokemon[2].teach(tD.zapCannon)
tD.blue.pokemon[0].teach(tD.rockWrecker)

tD.pyromaniac.pokemon[0].teach(tD.skyAttack)
tD.pyromaniac.pokemon[0].teach(tD.blastBurn)
tD.pyromaniac.pokemon[0].teach(tD.normalFly)
tD.pyromaniac.pokemon[0].teach(tD.normalDig)
tD.pyromaniac.pokemon[1].teach(tD.ember)
tD.waiter.pokemon[0].teach(tD.rockWrecker)
tD.waiter.pokemon[0].teach(tD.gust)
tD.waiter.pokemon[0].teach(tD.rampage)
tD.timeLord.pokemon[0].teach(tD.recover)
tD.timeLord.pokemon[0].teach(tD.drainingKiss)
tD.timeLord.pokemon[0].teach(tD.gigaDrain)
tD.timeLord.pokemon[0].teach(tD.splash)
tD.hiker.pokemon[0].teach(tD.crunch)
tD.hiker.pokemon[0].teach(tD.scratch)
tD.timeExecutive.pokemon[0].teach(tD.absorb)
tD.timeExecutive.pokemon[0].teach(tD.gigaDrain)
tD.ninja.pokemon[0].teach(tD.absorb)
tD.ninja.pokemon[0].teach(tD.razorLeaf)
tD.steadyEddie.pokemon[0].teach(tD.dragonRage)
tD.dragonTamer.pokemon[0].teach(tD.dragonRage)
tD.furiousFred.pokemon[0].teach(tD.furySwipes)
tD.furiousFred.pokemon[0].teach(tD.doubleKick) 
tD.furiousFred.pokemon[0].teach(tD.takeDown)
tD.furiousFred.pokemon[0].teach(tD.selfDestruct)
tD.sculptor.pokemon[0].teach(tD.takeDown)
tD.glassPrivate.pokemon[0].teach(tD.takeDown)
tD.glassPrivate.pokemon[0].teach(tD.selfDestruct)
tD.glassPeon.pokemon[0].teach(tD.selfDestruct)
tD.katy.pokemon[0].teach(tD.roar)
tD.katy.pokemon[0].teach(tD.fireBlast)



tD.battle1 = new Battle(tD.michael, tD.evilMichael)
tD.battle2 = new Battle(tD.coolGuy, tD.fossilphile)
tD.battle3 = new Battle(tD.coolGuy, tD.fossilphile)
tD.battle4 = new Battle(tD.coolGuy, tD.fossilphile)
tD.battle5 = new Battle(tD.coolGuy, tD.fossilphile)
tD.battleG = new Battle(tD.glassColonel, tD.glassGeneral)
tD.battle6 = new Battle(tD.michael, tD.paul)
tD.battle7 = new Battle(tD.mikey, tD.michael)
tD.battle8 = new Battle(tD.firebreather, tD.gambler)
tD.battle9 = new Battle(tD.firebreather, tD.gambler)
tD.battle10 = new Battle(tD.shroomFan,tD.shroomLover)
tD.battle11 = new Battle(tD.medium, tD.glamourMom)
tD.battle12 = new Battle(tD.scientist, tD.nerd)
tD.battle13 = new Battle(tD.mystic, tD.nerd)
tD.battle14 = new Battle(tD.starman, tD.sunboy)
tD.battle15 = new Battle(tD.lunarlad, tD.moonman)
tD.battle16 = new Battle(tD.red, tD.blue)

tD.battle17 = new Battle(tD.red, tD.blue)
tD.battleC1 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC2 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC3 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC4 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC5 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC6 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC7 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleC8 = new Battle(tD.pyromaniac, tD.waiter)
tD.battleR1 = new Battle(tD.hiker, tD.timeLord)
tD.battleR2 = new Battle(tD.hiker, tD.timeLord)
tD.battleR3 = new Battle(tD.timeLord, tD.hiker)
tD.battleR4 = new Battle(tD.hiker, tD.timeLord)
tD.battleR5 = new Battle(tD.hiker, tD.timeLord)
tD.battleR6 = new Battle(tD.hiker, tD.timeLord)
tD.battleR7 = new Battle(tD.timeExecutive, tD.hiker)
tD.battleCrit1 = new Battle(tD.ninja, tD.waiter)
tD.battleCrit2 = new Battle(tD.ninja, tD.waiter)
tD.battleF1 = new Battle(tD.dragonTamer, tD.steadyEddie)
tD.battleF2 = new Battle(tD.dragonTamer, tD.faePrince)
tD.battleM1 = new Battle(tD.furiousFred, tD.blue)
tD.battleM2 = new Battle(tD.furiousFred, tD.blue)
tD.battleM3 = new Battle(tD.furiousFred, tD.blue)
tD.battleM4 = new Battle(tD.furiousFred, tD.blue)
tD.battleM5 = new Battle(tD.furiousFred, tD.blue)
tD.battleM6 = new Battle(tD.furiousFred, tD.blue)
tD.battleM7 = new Battle(tD.furiousFred, tD.blue)
tD.battleM8 = new Battle(tD.furiousFred, tD.blue)
tD.battleM9 = new Battle(tD.furiousFred, tD.someSap)
tD.battleM10 = new Battle(tD.furiousFred, tD.someSap)
tD.battleS1 = new Battle(tD.furiousFred, tD.timeLord)
tD.battleS2 = new Battle(tD.sculptor, tD.furiousFred)
tD.battleS3 = new Battle(tD.furiousFred, tD.timeLord)
tD.battleS4 = new Battle(tD.glassPrivate, tD.someSap)
tD.battleS5 = new Battle(tD.furiousFred, tD.roughneck)
tD.battleS6 = new Battle(tD.glassPeon, tD.furiousFred)
tD.battleS7 = new Battle(tD.glassPeon, tD.shroomFan)
tD.battleFS1 = new Battle(tD.katy, tD.michael)
tD.battleFS2 = new Battle(tD.katy, tD.michael)
tD.battleFS3 = new Battle(tD.katy, tD.michael)
tD.battleFS4 = new Battle(tD.katy, tD.michael)
tD.battleFS5 = new Battle(tD.katy, tD.michael)
tD.battleFS6 = new Battle(tD.pyromaniac, tD.katy)
tD.battleFS7 = new Battle(tD.katy, tD.shroomLover)
tD.battleFS8 = new Battle(tD.katy, tD.someSap)
tD.battleFS9 = new Battle(tD.pyromaniac, tD.katy)
tD.battleFS10 = new Battle(tD.pyromaniac, tD.katy)



tD.meditate = new Move('Meditate', 'Psychic', 20, 0, 'N/A', 'Status', ['Stat Mod AT1UU'])
tD.defenseCurl = new Move('Defense Curl', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod DF1UU'])
tD.growth = new Move('Growth', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod SA1UU'])
tD.charge = new Move('Charge', 'Electric', 20, 0, 'N/A', 'Status', ['Stat Mod SD1UU'])
tD.confide = new Move('Confide', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod SA1DO'])
tD.leer = new Move('Leer', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod DF1DO'])
tD.swordsDance = new Move('Swords Dance', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod AT2UU'])
tD.amnesia = new Move('Amnesia', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod SD2UU'])
tD.cosmicPower = new Move('Cosmic Power', 'Psychic', 20, 0, 'N/A', 'Status', ['Stat Mod DF1UU SD1UU'])
tD.workUp = new Move('Work Up', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod AT1UU SA1UU'])
tD.charm = new Move('Charm', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod AT2DO'])
tD.tearfulLook = new Move('Tearful Look', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod AT1DO SA1DO'])
tD.powerUpPunch = new Move('Power Up Punch', 'Fighting', 20, 40, 100, 'Physical', ['Stat Mod AT1UU'])
tD.metalClaw = new Move('Metal Claw', 'Steel', 20, 50, 95, 'Physical', ['Stat Mod AT1UU10'])
tD.crushClaw = new Move('Crush Claw', 'Normal', 20, 75, 95, 'Physical', ['Stat Mod DF1DO10'])
tD.ancientPower = new Move('Ancient Power', 'Rock', 5, 60, 100, 'Special', ['Stat Mod AT1UU10 DF1UU SA1UU SD1UU'])
tD.haze = new Move('Haze', 'Ice', 20, 0, 'N/A', 'Status', ['Stat Neut'])
tD.psybeam = new Move('Psybeam', 'Psychic', 20, 65, 100, 'Special')
tD.flash = new Move('Flash', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod AC1DO'])
tD.doubleTeam = new Move('Double Team', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod EV1UU'])
tD.sweetScent = new Move('Sweet Scent', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod EV1DO'])
tD.honeClaws = new Move('Hone Claws', 'Normal', 20, 0, 'N/A', 'Status', ['Stat Mod AT1UU AC1UU'])
tD.swift = new Move('Swift', 'Normal', 20, 60, 'N/A', 'Physical')
tD.shellSmash = new Move('Shell Smash', 'Normal', 10, 0, 'N/A', 'Status', ['Stat Mod DF1DU SD1DU AT2UU SA2UU'])
tD.swagger = new Move('Swagger', 'Normal', 10, 0, 'N/A', 'Status', ['Stat Mod AT1UO'])

tD.clefable = new Pokemon('Clefable', [295, 70, 95, 73, 90], 'Fairy')
tD.gallade = new Pokemon('Gallade', [268, 125, 65, 65, 115], 'Psychic', 'Fighting')

tD.magician = new Trainer('Magician')
tD.brownBelt = new Trainer('Brown Belt')
tD.novice = new Trainer('Novice')
tD.yellowBelt = new Trainer('Yellow Belt')
tD.wizard = new Trainer('Wizard')
tD.blackBelt = new Trainer('Black Belt')
tD.thug = new Trainer('Thug')
tD.trickster = new Trainer('Trickster')
tD.artfulDodger = new Trainer('Artful Dodger')
tD.sniper = new Trainer('Sniper')
tD.masochist = new Trainer('Masochist')

tD.magician.catch(tD.clefable)
tD.brownBelt.catch(tD.gallade)
tD.novice.catch(tD.clefable)
tD.yellowBelt.catch(tD.gallade)
tD.wizard.catch(tD.clefable)
tD.blackBelt.catch(tD.gallade)
tD.thug.catch(tD.gallade)
tD.trickster.catch(tD.clefable)
tD.artfulDodger.catch(tD.clefable)
tD.sniper.catch(tD.gallade)
tD.masochist.catch(tD.omanyte)

tD.magician.pokemon[0].teach(tD.growth)
tD.magician.pokemon[0].teach(tD.charge)
tD.magician.pokemon[0].teach(tD.tackle)
tD.magician.pokemon[0].teach(tD.powerGem)

tD.brownBelt.pokemon[0].teach(tD.meditate)
tD.brownBelt.pokemon[0].teach(tD.defenseCurl)
tD.brownBelt.pokemon[0].teach(tD.tackle)
tD.brownBelt.pokemon[0].teach(tD.psybeam)

tD.novice.pokemon[0].teach(tD.confide)
tD.novice.pokemon[0].teach(tD.splash)
tD.novice.pokemon[0].teach(tD.recover)
tD.novice.pokemon[0].teach(tD.charge)

tD.yellowBelt.pokemon[0].teach(tD.leer)
tD.yellowBelt.pokemon[0].teach(tD.tackle)
tD.yellowBelt.pokemon[0].teach(tD.psybeam)

tD.wizard.pokemon[0].teach(tD.amnesia)
tD.wizard.pokemon[0].teach(tD.cosmicPower)
tD.wizard.pokemon[0].teach(tD.charm)
tD.wizard.pokemon[0].teach(tD.tearfulLook)

tD.blackBelt.pokemon[0].teach(tD.swordsDance)
tD.blackBelt.pokemon[0].teach(tD.workUp)
tD.blackBelt.pokemon[0].teach(tD.tackle)
tD.blackBelt.pokemon[0].teach(tD.psybeam)

tD.thug.pokemon[0].teach(tD.powerUpPunch)
tD.thug.pokemon[0].teach(tD.metalClaw)
tD.thug.pokemon[0].teach(tD.crushClaw)

tD.trickster.pokemon[0].teach(tD.ancientPower)
tD.trickster.pokemon[0].teach(tD.haze)
tD.trickster.pokemon[0].teach(tD.growth)

tD.artfulDodger.pokemon[0].teach(tD.flash)
tD.artfulDodger.pokemon[0].teach(tD.doubleTeam)
tD.artfulDodger.pokemon[0].teach(tD.splash)

tD.sniper.pokemon[0].teach(tD.sweetScent)
tD.sniper.pokemon[0].teach(tD.honeClaws)
tD.sniper.pokemon[0].teach(tD.swift)
tD.sniper.pokemon[0].teach(tD.tackle)

tD.masochist.pokemon[0].teach(tD.shellSmash)
tD.masochist.pokemon[0].teach(tD.swagger)

tD.battleSM1 = new Battle(tD.magician, tD.brownBelt)
tD.battleSM2 = new Battle(tD.brownBelt, tD.magician)
tD.battleSM3 = new Battle(tD.brownBelt, tD.magician)
tD.battleSM4 = new Battle(tD.magician, tD.brownBelt)
tD.battleSM5 = new Battle(tD.yellowBelt, tD.novice)
tD.battleSM6 = new Battle(tD.yellowBelt, tD.novice)
tD.battleSM7 = new Battle(tD.yellowBelt, tD.novice)
tD.battleSM8 = new Battle(tD.novice, tD.yellowBelt)
tD.battleSM9 = new Battle(tD.blackBelt, tD.wizard)
tD.battleSM10 = new Battle(tD.blackBelt, tD.wizard)
tD.battleSM11 = new Battle(tD.blackBelt, tD.wizard)
tD.battleSM12 = new Battle(tD.blackBelt, tD.wizard)
tD.battleSM13 = new Battle(tD.blackBelt, tD.novice)
tD.battleSM14 = new Battle(tD.blackBelt, tD.wizard)
tD.battleSM15 = new Battle(tD.blackBelt, tD.wizard)
tD.battleSM16 = new Battle(tD.thug, tD.novice)
tD.battleSM17 = new Battle(tD.thug, tD.novice)
tD.battleSM18 = new Battle(tD.thug, tD.novice)
tD.battleSM19 = new Battle(tD.trickster, tD.wizard)
tD.battleSM20 = new Battle(tD.wizard, tD.trickster)
tD.battleSM21 = new Battle(tD.artfulDodger, tD.sniper)
tD.battleSM22 = new Battle(tD.artfulDodger, tD.sniper)
tD.battleSM23 = new Battle(tD.artfulDodger, tD.sniper)
tD.battleSM24 = new Battle(tD.artfulDodger, tD.sniper)
tD.battleSM25 = new Battle(tD.artfulDodger, tD.sniper)
tD.battleSM26 = new Battle(tD.masochist, tD.novice)
tD.battleSM27 = new Battle(tD.thug, tD.novice)



tD.poisonPowder = new Move('Poison Powder', 'Poison', 20, 0, 100, 'Status', ['Stat Cond PSN100'])
tD.poisonSting = new Move('Poison Sting', 'Poison', 20, 20, 100, 'Physical', ['Stat Cond PSN20'])
tD.toxic = new Move('Toxic', 'Poison', 20, 0, 100, 'Status', ['Stat Cond BPN100'])

tD.beedrill = new Pokemon('Beedrill', [65, 90, 45, 40, 80], 'Bug', 'Poison')

tD.binMan = new Trainer('Bin Man')
tD.patient = new Trainer('Patient')
tD.immunologist = new Trainer('Immunologist')

tD.binMan.catch(tD.beedrill)
tD.patient.catch(tD.whismur)
tD.patient.catch(tD.whismur)
tD.immunologist.catch(tD.venusaur)

tD.binMan.pokemon[0].teach(tD.poisonPowder)
tD.binMan.pokemon[0].teach(tD.poisonSting)
tD.binMan.pokemon[0].teach(tD.scratch)
tD.binMan.pokemon[0].teach(tD.toxic)
tD.patient.pokemon[0].teach(tD.splash)
tD.patient.pokemon[0].teach(tD.flash)
tD.patient.pokemon[0].teach(tD.recover)
tD.patient.pokemon[0].teach(tD.scratch)
tD.patient.pokemon[1].teach(tD.splash)
tD.immunologist.pokemon[0].teach(tD.splash)

tD.battleP1 = new Battle(tD.binMan, tD.patient)
tD.battleP2 = new Battle(tD.binMan, tD.patient)
tD.battleP3 = new Battle(tD.binMan, tD.patient)
tD.battleP4 = new Battle(tD.binMan, tD.patient)
tD.battleP5 = new Battle(tD.binMan, tD.immunologist)
tD.battleP6 = new Battle(tD.binMan, tD.patient)
tD.battleP7 = new Battle(tD.patient, tD.binMan)
tD.battleP8 = new Battle(tD.binMan, tD.patient)
tD.battleP9 = new Battle(tD.binMan, tD.patient)
tD.battleP10 = new Battle(tD.binMan, tD.patient)
tD.battleP11 = new Battle(tD.binMan, tD.immunologist)
tD.battleP12 = new Battle(tD.binMan, tD.patient)



tD.thunderWave = new Move('Thunder Wave', 'Electric', 20, 0, 100, 'Status', ['Stat Cond PRZ100'])

tD.pikachu = new Pokemon('Pikachu', [35, 55, 50, 30, 40], 'Electric')
tD.flaaffy = new Pokemon('Flaaffy', [70, 55, 80, 55, 60], 'Electric')
tD.toxtricity = new Pokemon('Toxtricity', [75, 98, 114, 70, 70], 'Electric', 'Poison')

tD.electrician = new Trainer('Electrician')
tD.shepherd = new Trainer('Shepherd')
tD.guitarist = new Trainer('Guitarist')

tD.electrician.catch(tD.pikachu)
tD.shepherd.catch(tD.flaaffy)
tD.guitarist.catch(tD.toxtricity)

tD.electrician.pokemon[0].teach(tD.thunderWave)
tD.guitarist.pokemon[0].teach(tD.poisonPowder)
tD.guitarist.pokemon[0].teach(tD.thunderWave)

tD.battleP13 = new Battle(tD.electrician, tD.patient)
tD.battleP14 = new Battle(tD.electrician, tD.patient)
tD.battleP15 = new Battle(tD.electrician, tD.shepherd)
tD.battleP16 = new Battle(tD.electrician, tD.patient)
tD.battleP17 = new Battle(tD.guitarist, tD.patient)



tD.vulpix = new Pokemon('Vulpix', [38, 41, 50, 40, 65], 'Fire')

tD.willOWisp = new Move ('Will-O-Wisp', 'Fire', 20, 0, 100, 'Status', ['Stat Cond BRN100'])

tD.kindler = new Trainer('Kindler')

tD.kindler.catch(tD.vulpix)

tD.kindler.pokemon[0].teach(tD.willOWisp)

tD.battleB1 = new Battle(tD.kindler, tD.patient)
tD.battleB2 = new Battle(tD.kindler, tD.patient)
tD.battleB3 = new Battle(tD.patient, tD.kindler)
tD.battleB4 = new Battle(tD.kindler, tD.firebreather)
tD.battleB5 = new Battle(tD.kindler, tD.patient)



tD.glalie = new Pokemon('Glalie', [80, 80, 80, 80, 80], 'Ice')
tD.sealeo = new Pokemon('Sealeo', [90, 60, 75, 70, 70], 'Water', 'Ice')

tD.freezeRay = new Move('Freeze Ray', 'Ice', 20, 0, 100, 'Status', ['Stat Cond FRZ100'])

tD.skier = new Trainer('Skier')
tD.snowboarder = new Trainer('Snowboarder')

tD.skier.catch(tD.glalie)
tD.snowboarder.catch(tD.sealeo)

tD.skier.pokemon[0].teach(tD.freezeRay)

tD.battleFR1 = new Battle(tD.skier, tD.patient)
tD.battleFR2 = new Battle(tD.skier, tD.patient)
tD.battleFR3 = new Battle(tD.skier, tD.patient)
tD.battleFR4 = new Battle(tD.skier, tD.snowboarder)
tD.battleFR5 = new Battle(tD.skier, tD.patient)



tD.hypno = new Pokemon('Hypno', [85, 73, 73, 70, 115], 'Psychic')

tD.hypnosis = new Move('Hypnosis', 'Psychic', 20, 0, 100, 'Status', ['Stat Cond SLP100'])

tD.hypnotist = new Trainer('Hypnotist')

tD.hypnotist.catch(tD.hypno)
tD.hypnotist.pokemon[0].teach(tD.hypnosis)

tD.battleSL1 = new Battle(tD.hypnotist, tD.patient)
tD.battleSL2 = new Battle(tD.hypnotist, tD.patient)
tD.battleSL3 = new Battle(tD.hypnotist, tD.patient)
tD.battleSL4 = new Battle(tD.hypnotist, tD.patient)
tD.battleSL5 = new Battle(tD.hypnotist, tD.patient)
tD.battleSL6 = new Battle(tD.hypnotist, tD.patient)
tD.battleSL7 = new Battle(tD.hypnotist, tD.patient)



tD.healBell = new Move('Heal Bell', 'Normal', 20, 0, 'N/A', 'Status', ['Heal Bell'])
tD.snore = new Move('Snore', 'Normal', 20, 50, 100, 'Special', ['Snore'])
tD.rest = new Move('Rest', 'Psychic', 20, 0, 'N/A', 'Status', ['Rest'])

tD.snorlax = new Pokemon('Snorlax', [160, 110, 65, 65, 110], 'Normal')

tD.hippie = new Trainer('Hippie')

tD.hippie.catch(tD.snorlax)
tD.hippie.catch(tD.solrock)
tD.hippie.catch(tD.florges)

tD.hippie.pokemon[0].teach(tD.rest)
tD.hippie.pokemon[0].teach(tD.snore)
tD.hippie.pokemon[2].teach(tD.healBell)
tD.guitarist.pokemon[0].teach(tD.hypnosis)
tD.guitarist.pokemon[0].teach(tD.hyperBeam)

tD.battleX1 = new Battle(tD.guitarist, tD.hippie)
tD.battleX2 = new Battle(tD.hippie, tD.guitarist)
tD.battleX3 = new Battle(tD.guitarist, tD.hippie)
tD.battleX4 = new Battle(tD.guitarist, tD.hippie)
tD.battleX5 = new Battle(tD.guitarist, tD.hippie)
tD.battleX6 = new Battle(tD.hippie, tD.guitarist)


module.exports = tD