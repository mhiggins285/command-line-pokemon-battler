const { type } = require("os")

function Pokemon(name, HP, attack, type) {

    this.name = name
    this.HP = HP
    this.attack = attack
    this.type = type
    
}

Pokemon.prototype.makeSound = function() {

    const cry = this.name.substring(0,4)
    const sound = cry + '... ' + this.name + '!'
    return sound

}

function Individual(species, nickname) {

    this.species = species
    this.nickname = nickname
    this.moves = []
    this.currentHP = species.HP

}

function Move(name, type) {

    this.name = name
    this.type = type

}

Individual.prototype.teach = function (move) {

    this.moves.push(move)

}

function Trainer(name) {

    this.name = name
    this.pokemon = []

}

Trainer.prototype.catch = function(species, nickname, move) {

    if (this.pokemon.length < 6) {

        const individual = new Individual(species, nickname, move)

        this.pokemon.push(individual)

    } else {

        console.log('You cannot catch this Pokemon, your party is already full!')

    }

}

const strong = 1.25
const neut = 1
const weak = 0.75

const typeChart = {

    Normal: {
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut
    },

    Grass: {
        Normal: neut,
        Grass: weak,
        Fire: weak,
        Water: strong
    },

    Fire: {
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: weak
    },

    Water: {
        Normal: neut,
        Grass: weak,
        Fire: strong,
        Water: weak
    }

}

function Battle(trainer1, trainer2) {

    this.trainer1 = trainer1
    this.trainer2 = trainer2
    this.pokemon1 = trainer1.pokemon[0]
    this.pokemon2 = trainer2.pokemon[0]
    this.turnCount = 0
    this.winner = null

}

Battle.prototype.fight = function () {

    if (this.winner !== null) {

        console.log(`This battle is over, ${this.winner.name} was the victor, create a new battle to try again`)

        return

    }

    if (this.turnCount === 0) {

        console.log(`The battle begins! ${this.trainer1.name} sends out ${this.pokemon1.nickname} the ${this.pokemon1.species.name} and ${this.trainer2.name} sends out ${this.pokemon2.nickname} the ${this.pokemon2.species.name}!`)
        console.log(this.pokemon1.species.makeSound())
        console.log(this.pokemon2.species.makeSound())

    }

    trainerTurn = (this.turnCount % 2) + 1

    const currentTrainer = 'trainer' + trainerTurn.toString()
    const opponentTrainer = 'trainer' + (3 - trainerTurn).toString()
    const currentPokemon = 'pokemon' + trainerTurn.toString()
    const opponentPokemon = 'pokemon' + (3 - trainerTurn).toString()


    const typeModifier = typeChart[this[currentPokemon].moves[0].type][this[opponentPokemon].species.type]

    this[opponentPokemon].currentHP -= Math.floor((this[currentPokemon].species.attack * typeModifier) / 2)

    // damage dealt is reduced to a half as otherwise battles would be over too quickly

    console.log(`${this[currentPokemon].species.name} used ${this[currentPokemon].moves[0].name}`)

    if (typeModifier > 1) {

        console.log("It's super effective!")

    }
    
    if (typeModifier < 1) {

        console.log("It's not very effective")

    }

    if (this[opponentPokemon].currentHP < 0) {

        this[opponentPokemon].currentHP = 0

        console.log(`${this[opponentPokemon].species.name} has fainted! ${this[currentTrainer].name} has won the battle!`)

        this.winner = this[currentTrainer]

    }  
    
    this.turnCount++

}


module.exports = { Pokemon, Individual, Move, Trainer, Battle }