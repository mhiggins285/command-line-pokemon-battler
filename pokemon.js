const { type } = require("os")

function Pokemon(name, hp, attack, type1, type2 = 'N/A') {

    this.name = name
    this.hp = hp
    this.attack = attack
    this.type1 = type1
    this.type2 = type2
    
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
    this.currentHP = species.hp
    this.pp = []

}

function Move(name, type, pp = 35) {

    this.name = name
    this.type = type
    this.pp = pp

}

Individual.prototype.teach = function (move) {

    if (this.moves.length < 4) {

        this.moves.push(move)
        this.pp.push(move.pp)

    } else {

        console.log('You cannot teach another move to this Pokemon, it already knows four')

    }

}

function Trainer(name) {

    this.name = name
    this.pokemon = []

}

Trainer.prototype.catch = function(species, nickname) {

    if (this.pokemon.length < 6) {

        const individual = new Individual(species, nickname)

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
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: weak
    },

    Grass: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: weak,
        Water: strong,
        Rock: strong
    },

    Fire: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: weak,
        Rock: strong
    },

    Water: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: strong,
        Water: weak,
        Rock: strong
    },

    Rock: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: strong,
        Water: neut,
        Rock: neut
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

Battle.prototype.fight = function (actionNo = 0, pokemonNo = -1) {

    if (this.winner !== null) {

        console.log(`This battle is over, ${this.winner.name} was the victor, create a new battle to try again`)

        return

    }

    trainerTurn = (this.turnCount % 2)

    const currentTrainer = 'trainer' + (2 - trainerTurn).toString()
    const opponentTrainer = 'trainer' + (1 + trainerTurn).toString()
    const currentPokemon = 'pokemon' + (2 - trainerTurn).toString()
    const opponentPokemon = 'pokemon' + (1 + trainerTurn).toString()
    let skipFlag = false

    let currentPokemonNickname = ''
    let opponentPokemonNickname = ''
    let currentPokemonFullName = ''
    let opponentPokemonFullName = ''

    if (this[currentPokemon].nickname === undefined) {

        currentPokemonNickname = this[currentPokemon].species.name
        currentPokemonFullName = this[currentPokemon].species.name

    } else {

        currentPokemonNickname = this[currentPokemon].nickname
        currentPokemonFullName = this[currentPokemon].nickname + ' the ' + this[currentPokemon].species.name

    }

    if (this[opponentPokemon].nickname === undefined) {

        opponentPokemonNickname = this[opponentPokemon].species.name
        opponentPokemonFullName = this[opponentPokemon].species.name

    } else {

        opponentPokemonNickname = this[opponentPokemon].nickname
        opponentPokemonFullName = this[opponentPokemon].nickname + ' the ' + this[opponentPokemon].species.name

    }

    let currentRemainingPokemon = 0

        for (const pokemon of this[currentTrainer].pokemon) {

            if (pokemon.currentHP > 0) {

                currentRemainingPokemon++

            }

        }

        let opponentRemainingPokemon = 0

        for (const pokemon of this[opponentTrainer].pokemon) {

            if (pokemon.currentHP > 0) {

                opponentRemainingPokemon++

            }

        }

    if (this.turnCount === 0) {

        console.log(`The battle begins! ${this.trainer1.name} sends out ${opponentPokemonFullName} and ${this.trainer2.name} sends out ${currentPokemonFullName}!`)
        console.log(this.pokemon1.species.makeSound())
        console.log(this.pokemon2.species.makeSound())

        for (const pokemon of this.trainer1.pokemon) {

            pokemon.currentHP = pokemon.species.hp

            for (let i = 0; i < pokemon.moves.length; i++) {

                pokemon.pp[i] = pokemon.moves[i].pp

            }

        }

        for (const pokemon of this.trainer2.pokemon) {

            pokemon.currentHP = pokemon.species.hp

            for (let i = 0; i < pokemon.moves.length; i++) {

                pokemon.pp[i] = pokemon.moves[i].pp

            }

        }

    } else {   

        if (this[currentPokemon].currentHP === 0) {

            if (this[currentTrainer].pokemon[actionNo] === undefined || this[currentTrainer].pokemon[actionNo].currentHP === 0) {

                console.log("You don't have a valid Pokemon in that slot, please select a valid Pokemon")

                return

            }

            this[currentPokemon] = this[currentTrainer].pokemon[actionNo]

            this.turnCount--

            skipFlag = true

            console.log(`${this[currentTrainer].name} has sent out ${this[currentPokemon].nickname}`)

        } else if (this[opponentPokemon].currentHP === 0) {

            if (this[opponentTrainer].pokemon[actionNo] === undefined || this[opponentTrainer].pokemon[actionNo].currentHP === 0) {

                console.log("You don't have a valid Pokemon in that slot, please select a valid Pokemon")

                return

            }

            this[opponentPokemon] = this[opponentTrainer].pokemon[actionNo]

            this.turnCount--

            skipFlag = true

            console.log(`${this[opponentTrainer].name} has sent out ${this[currentPokemon].nickname}`)

        }

        let totalPP = 0

        for (const movePP of this[currentPokemon].pp) {

            totalPP += movePP

        }

        if (!skipFlag) {

            if (actionNo === 4) {

                if (this[currentTrainer].pokemon[pokemonNo] === undefined || this[currentTrainer].pokemon[pokemonNo].currentHP === 0) {

                    console.log("You don't have a valid Pokemon in that slot, please select a valid Pokemon")

                    return

                } else {

                    this[currentPokemon] = this[currentTrainer].pokemon[pokemonNo]

                    console.log(`${this[currentTrainer].name} has switched out ${currentPokemonFullName} for ${this[currentPokemon].nickname}`)

                }

            } else if (totalPP === 0 && actionNo === 0) {

                console.log(`${currentPokemonFullName} used Struggle`)
                console.log(`${currentPokemonFullName} is damaged by recoil`)

                this[opponentPokemon].currentHP -= Math.floor((this[currentPokemon].species.attack) / 2)
                this[currentPokemon].currentHP -= Math.floor((this[currentPokemon].species.attack) / 4)

            } else if (this[currentPokemon].pp[actionNo] === 0 || this[currentPokemon].pp[actionNo] === undefined) {

                console.log("You don't have a valid move in that slot, please select a valid move")

                return

            } else {

                this[currentPokemon].pp[actionNo]--

                const typeModifier1 = typeChart[this[currentPokemon].moves[actionNo].type][this[opponentPokemon].species.type1]
                const typeModifier2 = typeChart[this[currentPokemon].moves[actionNo].type][this[opponentPokemon].species.type2]
                const typeModifier = typeModifier1 * typeModifier2

                this[opponentPokemon].currentHP -= Math.floor((this[currentPokemon].species.attack * typeModifier) / 2)

                // damage dealt is reduced to a half as otherwise battles would be over too quickly

                console.log(`${currentPokemonNickname} used ${this[currentPokemon].moves[actionNo].name}`)

                if (typeModifier > 1) {

                    console.log("It's super effective!")

                }
                
                if (typeModifier < 0.9) {

                    console.log("It's not very effective")

                }

            }

            if (this[opponentPokemon].currentHP < 0) {

                this[opponentPokemon].currentHP = 0

                if (opponentRemainingPokemon === 1) {

                    console.log(`${opponentPokemonNickname} has fainted!`)

                    console.log(`${this[opponentTrainer].name}'s last Pokemon has fainted! ${this[currentTrainer].name} has won the battle!`)

                    this.winner = this[currentTrainer]

                    return

                } else {

                    const faintedLine = `${this[opponentTrainer].name}'s ${opponentPokemonNickname} has fainted! Please select another Pokemon`

                    let pokemonLineAfterFainting = ''

                    let noOfPokemonAfterFaiting = this[opponentTrainer].pokemon.length

                    for (let i = 0; i < noOfPokemonAfterFaiting; i++) {

                        if (this[opponentTrainer].pokemon[i].currentHP > 0) {

                            pokemonLineAfterFainting = pokemonLineAfterFainting + i.toString() + ' - ' + this[opponentTrainer].pokemon[i].species.name + ' (' + this[opponentTrainer].pokemon[i].currentHP + '/' + this[opponentTrainer].pokemon[i].species.hp + '), '
            
                        }

                    }

                    pokemonLineAfterFainting = pokemonLineAfterFainting.substring(0, pokemonLineAfterFainting.length - 2)

                    const faintedScreen = faintedLine + '\n' + pokemonLineAfterFainting

                    console.log(faintedScreen)

                }

            }  

            if (this[currentPokemon].currentHP < 0) {

                this[currentPokemon].currentHP = 0

                if (currentRemainingPokemon === 1) {

                    console.log(`${currentPokemonNickname} has fainted!`)

                    console.log(`${this[currentTrainer].name}'s last Pokemon has fainted! ${this[opponentTrainer].name} has won the battle!`)

                    this.winner = this[opponentTrainer]

                    return

                } else {

                    const faintedLine = `${this[currentTrainer].name}'s ${currentPokemonNickname} has fainted! Please select another Pokemon`

                    let pokemonLineAfterFainting = ''

                    let noOfPokemonAfterFaiting = this[currentTrainer].pokemon.length

                    for (let i = 0; i < noOfPokemonAfterFaiting; i++) {

                        if (this[currentTrainer].pokemon[i].currentHP > 0) {

                            pokemonLineAfterFainting = pokemonLineAfterFainting + i.toString() + ' - ' + this[currentTrainer].pokemon[i].species.name + ' (' + this[currentTrainer].pokemon[i].currentHP + '/' + this[currentTrainer].pokemon[i].species.hp + '), '
            
                        }

                    }

                    pokemonLineAfterFainting = pokemonLineAfterFainting.substring(0, pokemonLineAfterFainting.length - 2)

                    const faintedScreen = faintedLine + '\n' + pokemonLineAfterFainting

                    console.log(faintedScreen)



                }

            } 
        
        }

    }
    
    this.turnCount++

    if (this[currentPokemon].nickname === undefined) {

        currentPokemonNickname = this[currentPokemon].species.name
        currentPokemonFullName = this[currentPokemon].species.name

    } else {

        currentPokemonNickname = this[currentPokemon].nickname
        currentPokemonFullName = this[currentPokemon].nickname + ' the ' + this[currentPokemon].species.name

    }

    if (this[opponentPokemon].nickname === undefined) {

        opponentPokemonNickname = this[opponentPokemon].species.name
        opponentPokemonFullName = this[opponentPokemon].species.name

    } else {

        opponentPokemonNickname = this[opponentPokemon].nickname
        opponentPokemonFullName = this[opponentPokemon].nickname + ' the ' + this[opponentPokemon].species.name

    }

    const battleStatusLine = `${this[opponentTrainer].name}'s turn\n${opponentPokemonFullName} (${this[opponentPokemon].currentHP}/${this[opponentPokemon].species.hp}) - ${currentPokemonFullName} (${this[currentPokemon].currentHP}/${this[currentPokemon].species.hp})`

    let attackLine = 'Attacks: '
    const noOfMoves = this[opponentPokemon].moves.length

    for (let i = 0; i < noOfMoves; i++) {

        if(this[opponentPokemon].pp[i] > 0) {

            attackLine = attackLine + i.toString() + ' - ' + this[opponentPokemon].moves[i].name + ' (' + this[opponentPokemon].pp[i] + '/' + this[opponentPokemon].moves[i].pp + '), '

        }

    }

    if (attackLine === 'Attacks: ') {

        attackLine = opponentPokemonFullName + ' is out of usable moves, 0 - Struggle'
    
    } else {

        attackLine = attackLine.substring(0, attackLine.length - 2)

    }

    let battleScreen = battleStatusLine + '\n' + attackLine

    if (opponentRemainingPokemon > 1) {

        let pokemonLine = '4 - Switch Pokemon: '

        let noOfPokemon = this[opponentTrainer].pokemon.length

        for (let i = 0; i < noOfPokemon; i++) {

            if (this[opponentTrainer].pokemon[i].currentHP > 0) {

                pokemonLine = pokemonLine + i.toString() + ' - ' + this[opponentTrainer].pokemon[i].species.name + ' (' + this[opponentTrainer].pokemon[i].currentHP + '/' + this[opponentTrainer].pokemon[i].species.hp + '), '
 
            }

        }

        pokemonLine = pokemonLine.substring(0, pokemonLine.length - 2)

        battleScreen = battleScreen + '\n' + pokemonLine

    }

    console.log(battleScreen)

}


module.exports = { Pokemon, Individual, Move, Trainer, Battle }
