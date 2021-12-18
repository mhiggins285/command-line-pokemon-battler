const inquirer = require('inquirer');
const { Pokemon } = require('./classes/Pokemon')
const { Move } = require('./classes/Move')
const { Trainer } = require('./classes/Trainer')
const { Battle } = require('./classes/Battle');

const red = new Trainer('Red')
const blue = new Trainer('Blue')

const charizard = new Pokemon('Charizard', [78, 84, 109, 78, 85], 'Fire', 'Flying')
const blastoise = new Pokemon('Blastoise', [79, 83, 85, 100, 105], 'Water')
const venusaur = new Pokemon('Venusaur', [80, 82, 100, 83, 100], 'Grass', 'Poison')
const espeon = new Pokemon('Espeon', [65, 65, 130, 60, 95], 'Psychic')
const snorlax = new Pokemon('Snorlax', [120, 110, 65, 65, 110], 'Normal')
const raichu = new Pokemon('Raichu', [60, 90, 90, 55, 80], 'Electric')

const rhydon = new Pokemon('Rhydon', [105, 130, 45, 120, 45], 'Rock', 'Ground')
const exeggutor = new Pokemon('Exeggutor', [95, 95, 125, 85, 65], 'Grass', 'Psychic')
const gyarados = new Pokemon('Gyarados', [95, 125, 60, 79, 100], 'Water', 'Flying')
const arcanine = new Pokemon('Arcanine', [90, 110, 100, 80, 80], 'Fire')
const alakazam = new Pokemon('Alakazam', [75, 50, 135, 45, 85], 'Psychic')
const pidgeot = new Pokemon('Pidgeot', [83, 80, 70, 75, 70], 'Normal', 'Flying')

const flamethrower = new Move('Flamethrower', 'Fire', 15, 90, 100, 'Special', ['Stat Cond BRN10'], 'The target is scorched with an intense blast of fire')
const slash = new Move('Slash', 'Normal', 20, 70, 100, 'Physical', ['High Crit'], 'The foe is attacked with a slash of claws, it has a high critical-hit ratio')
const surf = new Move('Surf', 'Water', 15, 90, 100, 'Special', [], 'Creates a huge wave, then crashes it down on the foe')
const blizzard = new Move('Blizzard', 'Ice', 5, 110, 70, 'Special', ['Stat Cond FRZ10'], 'A howling blizzard is summoned to strike the foe, which has a chance to freeze the opponent')
const sludgeBomb = new Move('Sludge Bomb', 'Poison', 10, 90, 100, 'Physical', ['Stat Cond PSN30'], 'The user attacks by hurling filthy sludge at the foe that may poison the target')
const earthquake = new Move('Earthquake', 'Ground', 10, 100, 100, 'Physical', ['Hits Dig'], 'Causes a quake that has no effect on flying foes')
const eggBomb = new Move('Egg Bomb', 'Normal', 10, 100, 75, 'Physical', [], 'A large egg is hurled with great force at the foe to inflict damage')
const psychic = new Move('Psychic', 'Psychic', 10, 90, 100, 'Special', ['Stat Mod SD1DO10'], 'The foe is hit by a strong telekinetic force')
const hydroPump = new Move('Hydro Pump', 'Water', 5, 110, 80, 'Special', [], 'A high volume of water is blasted at the foe under great pressure')
const hyperBeam = new Move('Hyper Beam', 'Normal', 5, 150, 90,'Special', ['Recharge'], 'A severely damaging attack that makes the user rest on the next turn')
const crunch = new Move('Crunch', 'Dark', 15, 80, 100, 'Physical', ['Stat Mod DF1DO20'], "The user crunches up the foe with sharp fangs - it may lower the target's defense")
const fly = new Move('Fly', 'Flying', 15, 90, 100, 'Physical', ['Fly'], 'The user soars, then strikes on the second turn')
const dig = new Move('Dig', 'Ground', 15, 90, 100, 'Physical', ['Dig'], 'The user burrows, then attacks on the second turn')
const recover = new Move('Recover', 'Normal', 10, 'N/A', 'N/A', 'Status', ['Recover'], "A self-healing move that restores HP by up to half of the user's maximum HP")
const gigaDrain = new Move('Giga Drain', 'Grass', 10, 75, 100, 'Special', ['Drain'], 'A harsh attack that absorbs half the damage it inflicted to restore HP')
const razorLeaf = new Move('Razor Leaf', 'Grass', 30, 60, 100, 'Physical', ['High Crit'], 'Sharp-edged leaves are launched to slash at the opposing team - critical hits land more easily')
const dragonRage = new Move('Dragon Rage', 'Dragon', 20, 30, 100, 'Special', ['Set Damage'], 'The foe is hit with a shock wave that always inflicts 30-HP damage')
const furySwipes = new Move('Fury Swipes', 'Normal', 15, 18, 85, 'Physical', ['Multi-Hit'], 'The foe is raked with sharp claws or scythes for two to five times in quick succession')
const doubleKick = new Move('Double Kick', 'Fighting', 30, 30, 100, 'Physical', ['Double-Hit'], 'Two legs are used to quickly kick the foe twice in one turn')
const takeDown = new Move('Take Down', 'Normal', 15, 90, 100, 'Physical', ['Recoil'], 'A reckless, full-body charge attack that also hurts the user a little')
const selfDestruct = new Move('Self-Destruct', 'Normal', 5, 250, 100, 'Physical', ['Self-Destruct'], '	The user blows up to inflict severe damage, even making itself faint')
const roar = new Move('Roar', 'Normal', 20, 0, 'N/A', 'Status', ['Force Switch'], 'The foe is scared off, to be replaced by another Pokémon in its party')
const charm = new Move('Charm', 'Fairy', 20, 0, 100, 'Status', ['Stat Mod AT2DO'], "The user charmingly stares at the foe, making it less wary - the target's Attack is sharply lowered")
const thunderbolt = new Move('Thunderbolt', 'Electric', 15, 90, 100, 'Special', ['Stat Cond PRZ10'], 'A strong electrical attack that may also leave the foe paralyzed')
const thunder = new Move('Thunder', 'Electric', 10, 110, 70, 'Special', ['Stat Cond PRZ10', 'Hits Fly'], 'A brutal lightning attack that may also leave the foe paralyzed')
const mudSlap = new Move('Mud-Slap', 'Ground', 10, 20, 100, 'Special', ['Stat Mod AC1DO'], "Mud is hurled in the foe's face to inflict damage and lower its accuracy")
const swift = new Move('Swift', 'Normal', 20, 60, 'N/A', 'Physical', [], 'Star-shaped rays that never miss are fired at all foes in battle')
const amnesia = new Move('Amnesia', 'Psychic', 20, 0, 'N/A', 'Status', ['Stat Mod SD2UU'], 'Forgets about something and sharply raises its Special Defense')
const snore = new Move('Snore', 'Normal', 20, 50, 100, 'Special', ['Snore'], 'An attack that can be used only if the user is asleep')
const rest = new Move('Rest', 'Psychic', 20, 0, 'N/A', 'Status', ['Rest'], 'The user sleeps for two turns to fully restore HP and heal any status problem')
const bodySlam = new Move('Body Slam', 'Normal', 15, 85, 100, 'Physical', ['Stat Cond PRZ30'], 'The user drops onto the foe with its full body weight - it may leave the foe paralyzed')
const synthesis = new Move('Synthesis', 'Normal', 10, 'N/A', 'N/A', 'Status', ['Recover'], "Allows up to half of the user's maximum HP to be restored by the sunlight")
const solarBeam = new Move('Solar Beam', 'Grass', 10, 120, 100, 'Special', ['Charge'], 'A two-turn attack - the user gathers light, then blasts a bundled beam on the second turn.')
const whirlwind = new Move('Whirlwind', 'Flying', 20, 0, 'N/A', 'Status', ['Force Switch', 'Hits Fly'], 'The foe is blown away, to be replaced by another Pokémon in its party')
const healBell = new Move('Heal Bell', 'Normal', 5, 0, 'N/A', 'Status', ['Heal Bell'], 'A soothing bell chimes to heal the status problems of all allies')
const toxic = new Move('Toxic', 'Poison', 20, 0, 100, 'Status', ['Stat Cond BPN100'], 'Poisons the target with a toxin that gradually worsens')
const hypnosis = new Move('Hypnosis', 'Psychic', 20, 0, 60, 'Status', ['Stat Cond SLP100'], 'Hypnotic suggestion is used to make the foe fall into a deep sleep')
const doubleTeam = new Move('Double Team', 'Normal', 15, 0, 'N/A', 'Status', ['Stat Mod EV1UU'], 'The user creates illusory copies of itself to raise its evasiveness')
const calmMind = new Move('Calm Mind', 'Psychic', 20, 0, 'N/A', 'Status', ['Stat Mod SA1UU SD1UU'], 'The user focuses its mind to raise the Special Attack and Special Defense stats')
const ironDefense = new Move('Iron Defense', 'Steel', 15, 0, 'N/A', 'Status', ['Stat Mod DF2UU'], "The user hardens its body's surface like iron, sharply raising its Defense stat")
const willOWisp = new Move('Will-O-Wisp', 'Fire', 15, 0, 85, 'Status', ['Stat Cond BRN100'], 'A sinister, bluish white flame is shot at the foe to inflict a burn')
const thunderWave = new Move('Thunder Wave', 'Electric', 20, 0, 90, 'Status', ['Stat Cond PRZ100'], 'A weak electric shock that is sure to cause paralysis if it hits')



red.catch(raichu)
red.catch(espeon)
red.catch(snorlax)
red.catch(venusaur)
red.catch(charizard)
red.catch(blastoise)

red.pokemon[0].teach(charm)
red.pokemon[0].teach(thunderbolt)
red.pokemon[0].teach(thunder)
red.pokemon[0].teach(doubleTeam)

red.pokemon[1].teach(mudSlap)
red.pokemon[1].teach(swift)
red.pokemon[1].teach(psychic)
red.pokemon[1].teach(healBell)

red.pokemon[2].teach(amnesia)
red.pokemon[2].teach(snore)
red.pokemon[2].teach(rest)
red.pokemon[2].teach(bodySlam)

red.pokemon[3].teach(gigaDrain)
red.pokemon[3].teach(synthesis)
red.pokemon[3].teach(sludgeBomb)
red.pokemon[3].teach(toxic)

red.pokemon[4].teach(flamethrower)
red.pokemon[4].teach(fly)
red.pokemon[4].teach(slash)
red.pokemon[4].teach(willOWisp)

red.pokemon[5].teach(surf)
red.pokemon[5].teach(blizzard)
red.pokemon[5].teach(dig)
red.pokemon[5].teach(ironDefense)


blue.catch(pidgeot)
blue.catch(alakazam)
blue.catch(rhydon)
blue.catch(gyarados)
blue.catch(exeggutor)
blue.catch(arcanine)

blue.pokemon[0].teach(fly)
blue.pokemon[0].teach(whirlwind)
blue.pokemon[0].teach(takeDown)
blue.pokemon[0].teach(doubleTeam)

blue.pokemon[1].teach(recover)
blue.pokemon[1].teach(psychic)
blue.pokemon[1].teach(hypnosis)
blue.pokemon[1].teach(calmMind)

blue.pokemon[2].teach(furySwipes)
blue.pokemon[2].teach(earthquake)
blue.pokemon[2].teach(doubleKick)
blue.pokemon[2].teach(crunch)

blue.pokemon[3].teach(hydroPump)
blue.pokemon[3].teach(hyperBeam)
blue.pokemon[3].teach(dragonRage)
blue.pokemon[3].teach(thunderWave)

blue.pokemon[4].teach(eggBomb)
blue.pokemon[4].teach(solarBeam)
blue.pokemon[4].teach(razorLeaf)
blue.pokemon[4].teach(selfDestruct)

blue.pokemon[5].teach(roar)
blue.pokemon[5].teach(swift)
blue.pokemon[5].teach(flamethrower)
blue.pokemon[5].teach(takeDown)


const champBattle = new Battle(blue, red)

champBattle.fight()

const firstQuestions = [
    {
      type: 'input',
      name: 'action',
      message: 'Select action',
      default: '0',
    }
];

const quitQuestions = [
    {
      type: 'input',
      name: 'quitQuery',
      message: 'Are you sure you want to quit?',
      default: 'n',
    }
  ];

  
function playGame() {

    inquirer
        .prompt(firstQuestions)
        .then(function(firstAnswers) {

            if (firstAnswers.action === 'q') {

                inquirer
                    .prompt(quitQuestions)
                    .then(function(quitAnswers) {

                        if (quitAnswers.quitQuery === 'y') {

                            throw ''

                        } else {

                            return playGame()

                        }

                    })

            } else {
  
            const actionNo = parseInt(firstAnswers.action[0])

            let pokemonNo = -1

            if (firstAnswers.action.length > 2) {

                pokemonNo = parseInt(firstAnswers.action[2])

            }

            champBattle.fight(actionNo, pokemonNo)

            return playGame()

            }
  
        })
        
}

playGame()
    





