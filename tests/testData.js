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
tD.tackle = new Move('Tackle','Normal')
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



module.exports = tD