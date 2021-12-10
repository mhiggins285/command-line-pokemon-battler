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

const wingAttack = new Move('Wing Attack', 'Flying', 35, 60, 100, 'Physical')
const flamethrower = new Move('Flamethrower', 'Fire', 15, 90, 100, 'Special')
const slash = new Move('Slash', 'Normal', 20, 70, 100, 'Physical')

const surf = new Move('Surf', 'Water', 15, 90, 100, 'Special')
const blizzard = new Move('Blizzard', 'Ice', 5, 110, 70, 'Special')
const waterfall = new Move('Waterfall', 'Water', 15, 80, 100, 'Physical')

const sludgeBomb = new Move('Sludge Bomb', 'Poison', 10, 90, 100, 'Physical')

const mudSlap = new Move('Mud Slap', 'Ground', 10, 60, 100, 'Physical')
const swift = new Move('Swift', 'Normal', 10, 60, 100, 'Phsyical')

const furyAttack = new Move('Fury Attack', 'Normal', 20, 75, 85, 'Physical')
const earthquake = new Move('Earthquake', 'Ground', 5, 100, 100, 'Physical')
const rockSlide = new Move('Rock Slide', 'Rock', 10, 75, 90, 'Physical')

const eggBomb = new Move('Egg Bomb', 'Normal', 10, 100, 75, 'Physical')
const solarBeam = new Move('Solar Beam', 'Grass', 10, 60, 100, 'Special')
const psychic = new Move('Psychic', 'Psychic', 10, 90, 100, 'Special')

const hydroPump = new Move('Hydro Pump', 'Water', 5, 110, 80, 'Special')
const outrage = new Move('Outrage', 'Dragon', 10, 80, 100, 'Physical')
const hyperBeam = new Move('Hyper Beam', 'Normal', 5, 90, 90,'Special')

const crunch = new Move('Crunch', 'Dark', 15, 80, 100, 'Physical')
const thunderFang = new Move('Thunder Fang', 'Electric', 15, 65, 95, 'Physical')

red.catch(charizard)
red.catch(blastoise)
red.catch(venusaur)
red.catch(espeon)

red.pokemon[0].teach(wingAttack)
red.pokemon[0].teach(flamethrower)
red.pokemon[0].teach(slash)

red.pokemon[1].teach(surf)
red.pokemon[1].teach(blizzard)
red.pokemon[1].teach(waterfall)

red.pokemon[2].teach(solarBeam)
red.pokemon[2].teach(hyperBeam)
red.pokemon[2].teach(sludgeBomb)

red.pokemon[3].teach(psychic)
red.pokemon[3].teach(mudSlap)
red.pokemon[3].teach(swift)

blue.catch(rhydon)
blue.catch(exeggutor)
blue.catch(gyarados)
blue.catch(arcanine)

blue.pokemon[0].teach(furyAttack)
blue.pokemon[0].teach(earthquake)
blue.pokemon[0].teach(rockSlide)

blue.pokemon[1].teach(eggBomb)
blue.pokemon[1].teach(solarBeam)
blue.pokemon[1].teach(psychic)

blue.pokemon[2].teach(hydroPump)
blue.pokemon[2].teach(hyperBeam)
blue.pokemon[2].teach(outrage)

blue.pokemon[3].teach(flamethrower)
blue.pokemon[3].teach(crunch)
blue.pokemon[3].teach(thunderFang)

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
    





