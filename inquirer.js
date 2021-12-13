const inquirer = require('inquirer');
const { Pokemon } = require('./classes/Pokemon')
const { Move } = require('./classes/Move')
const { Trainer } = require('./classes/Trainer')
const { Battle } = require('./classes/Battle')

const red = new Trainer('Red')
const blue = new Trainer('Blue')

const charizard = new Pokemon('Charizard', [78, 84, 109, 78, 85], 'Fire', 'Flying')
const blastoise = new Pokemon('Blastoise', [79, 83, 85, 100, 105], 'Water')
const venusaur = new Pokemon('Venusaur', [80, 82, 100, 83, 100], 'Grass', 'Poison')
const espeon = new Pokemon('Espeon', [65, 65, 130, 60, 95], 'Psychic')

const rhydon = new Pokemon('Rhydon', [105, 130, 45, 120, 45], 'Rock', 'Ground')
const exeggutor = new Pokemon('Exeggutor', [95, 95, 125, 85, 65], 'Grass', 'Psychic')
const gyarados = new Pokemon('Gyarados', [95, 125, 60, 79, 100], 'Water', 'Flying')
const arcanine = new Pokemon('Arcanine', [90, 110, 100, 80, 80], 'Fire')

const flamethrower = new Move('Flamethrower', 'Fire', 15, 90, 100, 'Special', [], 'The target is scorched with an intense blast of fire')
const slash = new Move('Slash', 'Normal', 20, 70, 100, 'Physical', [], 'The foe is attacked with a slash of claws')

const surf = new Move('Surf', 'Water', 15, 90, 100, 'Special', [], 'Creates a huge wave, then crashes it down on the foe')
const blizzard = new Move('Blizzard', 'Ice', 5, 110, 70, 'Special', [], 'A howling blizzard is summoned to strike the foe')
const waterfall = new Move('Waterfall', 'Water', 15, 80, 100, 'Physical', [], 'The user charges the foe at an awesome speed')

const sludgeBomb = new Move('Sludge Bomb', 'Poison', 10, 90, 100, 'Physical', [], 'The user attacks by hurling filthy sludge at the foe')

const earthquake = new Move('Earthquake', 'Ground', 5, 100, 100, 'Physical', ['Hits Dig'], 'Causes a quake that has no effect on flying foes')
const rockSlide = new Move('Rock Slide', 'Rock', 10, 75, 90, 'Physical', [], 'Large boulders are hurled at the foe to inflict damage')

const eggBomb = new Move('Egg Bomb', 'Normal', 10, 100, 75, 'Physical', [], 'A large egg is hurled with great force at the foe to inflict damage')
const psychic = new Move('Psychic', 'Psychic', 10, 90, 100, 'Special', [], 'The foe is hit by a strong telekinetic force')

const hydroPump = new Move('Hydro Pump', 'Water', 5, 110, 80, 'Special', [], 'A high volume of water is blasted at the foe under great pressure')
const hyperBeam = new Move('Hyper Beam', 'Normal', 5, 150, 90,'Special', ['Recharge'], 'A severely damaging attack that makes the user rest on the next turn')

const crunch = new Move('Crunch', 'Dark', 15, 80, 100, 'Physical', [], 'The user crunches up the foe with sharp fangs')
const thunderFang = new Move('Thunder Fang', 'Electric', 15, 65, 95, 'Physical', [], 'The user bites with electrified fangs')

const skyAttack = new Move('Sky Attack', 'Flying', 5, 140, 100, 'Physical', ['Charge', 'High Crit'], 'A 2nd-turn attack move with a high critical-hit ratio')
const blastBurn = new Move('Blast Burn', 'Fire', 5, 150, 100, 'Physical', ['Recharge'], 'The target is razed by a fiery explosion - the user must rest on the next turn, however')
const fly = new Move('Fly', 'Flying', 15, 90, 100, 'Physical', ['Fly'], 'The user soars, then strikes on the second turn')
const dig = new Move('Dig', 'Ground', 15, 90, 100, 'Physical', ['Dig'], 'The user burrows, then attacks on the second turn')
const gust = new Move('Gust', 'Flying', 35, 60, 100, 'Physical', ['Hits Fly'], 'Hits target with a gust of wind whipped up by wings')
const recover = new Move('Recover', 'Normal', 10, 'N/A', 'N/A', 'Status', ['Recover'], "A self-healing move that restores HP by up to half of the user's maximum HP")
const gigaDrain = new Move('Giga Drain', 'Grass', 10, 75, 100, 'Special', ['Drain'], 'A harsh attack that absorbs half the damage it inflicted to restore HP')
const razorLeaf = new Move('Razor Leaf', 'Grass', 30, 60, 100, 'Physical', ['High Crit'], 'Sharp-edged leaves are launched to slash at the opposing team - critical hits land more easily')
const dragonRage = new Move('Dragon Rage', 'Dragon', 20, 40, 100, 'Special', ['Set Damage'], 'The foe is hit with a shock wave that always inflicts 40-HP damage')
const furySwipes = new Move('Fury Swipes', 'Normal', 15, 18, 85, 'Physical', ['Multi-Hit'], 'The foe is raked with sharp claws or scythes for two to five times in quick succession')
const doubleKick = new Move('Double Kick', 'Fighting', 30, 30, 100, 'Physical', ['Double-Hit'], 'Two legs are used to quickly kick the foe twice in one turn')
const takeDown = new Move('Take Down', 'Normal', 15, 90, 100, 'Physical', ['Recoil'], 'A reckless, full-body charge attack that also hurts the user a little')
const selfDestruct = new Move('Self-Destruct', 'Normal', 5, 250, 100, 'Physical', ['Self-Destruct'], '	The user blows up to inflict severe damage, even making itself faint')
const roar = new Move('Roar', 'Normal', 10, 'N/A', 'N/A', 'Status', ['Force Switch'], 'The foe is scared off, to be replaced by another Pokémon in its party')



red.catch(charizard)
red.catch(blastoise)
red.catch(venusaur)
red.catch(espeon)

red.pokemon[0].teach(skyAttack)
red.pokemon[0].teach(flamethrower)
red.pokemon[0].teach(slash)
red.pokemon[0].teach(fly)

red.pokemon[1].teach(surf)
red.pokemon[1].teach(blizzard)
red.pokemon[1].teach(waterfall)
red.pokemon[1].teach(doubleKick)

red.pokemon[2].teach(razorLeaf)
red.pokemon[2].teach(hyperBeam)
red.pokemon[2].teach(sludgeBomb)
red.pokemon[2].teach(gigaDrain)

red.pokemon[3].teach(psychic)
red.pokemon[3].teach(dig)
red.pokemon[3].teach(roar)
red.pokemon[3].teach(recover)

blue.catch(rhydon)
blue.catch(exeggutor)
blue.catch(gyarados)
blue.catch(arcanine)

blue.pokemon[0].teach(furySwipes)
blue.pokemon[0].teach(earthquake)
blue.pokemon[0].teach(rockSlide)
blue.pokemon[0].teach(takeDown)

blue.pokemon[1].teach(eggBomb)
blue.pokemon[1].teach(gigaDrain)
blue.pokemon[1].teach(psychic)
blue.pokemon[1].teach(selfDestruct)

blue.pokemon[2].teach(hydroPump)
blue.pokemon[2].teach(crunch)
blue.pokemon[2].teach(dragonRage)
blue.pokemon[2].teach(gust)

blue.pokemon[3].teach(blastBurn)
blue.pokemon[3].teach(crunch)
blue.pokemon[3].teach(thunderFang)
blue.pokemon[3].teach(roar)

const champBattle = new Battle(red, blue)

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
    





