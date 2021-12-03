
class Pokemon {

    constructor(name, [hp, attack, spAttack = 60, def = 60, spDef = 60], type1, type2 = 'N/A') {

        this.name = name
        this.hp = hp
        this.attack = attack
        this.spAttack = spAttack
        this.def = def
        this.spDef = spDef
        this.type1 = type1
        this.type2 = type2
        
    }

    makeSound() {

        const cry = this.name.substring(0,4)
        const sound = cry + '... ' + this.name + '!'
        return sound

    }

}

class Individual {

    constructor(species, nickname) {

        this.species = species
        this.nickname = nickname
        this.moves = []
        this.currentHP = species.hp
        this.pp = []

    }

    teach(move) {

        if (this.moves.length < 4) {

            this.moves.push(move)
            this.pp.push(move.pp)
    
        } else {
    
            console.log('You cannot teach another move to this Pokemon, it already knows four')
    
        }

    }

}

class Move {

    constructor(name, type, pp = 35, power = 60, accuracy = 100, category = 'Physical') {

        this.name = name
        this.type = type
        this.pp = pp
        this.power = power
        this.accuracy = accuracy
        this.category = category

    }

}

class Trainer {

    constructor(name) {

        this.name = name
        this.pokemon = []

    }

    catch(species, nickname) {

        if (this.pokemon.length < 6) {

            const individual = new Individual(species, nickname)
    
            this.pokemon.push(individual)
    
        } else {
    
            console.log('You cannot catch this Pokemon, your party is already full!')
    
        }

    }

}

const strong = 1.25
const neut = 1
const weak = 0.75
const immune = 0

const typeChart = {

    Normal: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: weak,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: immune,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Grass: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: weak,
        Water: strong,
        Rock: strong,
        Electric: neut,
        Psychic: neut,
        Ground: strong,
        Poison: weak,
        Flying: weak,
        Bug: weak,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: neut,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Fire: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: weak,
        Rock: weak,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: strong,
        Ghost: neut,
        Steel: strong,
        Fighting: neut,
        Ice: strong,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Water: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: strong,
        Water: weak,
        Rock: strong,
        Electric: neut,
        Psychic: neut,
        Ground: strong,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Rock: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: strong,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: weak,
        Poison: neut,
        Flying: strong,
        Bug: strong,
        Ghost: neut,
        Steel: weak,
        Fighting: weak,
        Ice: strong,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Electric: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: neut,
        Water: strong,
        Rock: neut,
        Electric: weak,
        Psychic: neut,
        Ground: immune,
        Poison: neut,
        Flying: strong,
        Bug: neut,
        Ghost: neut,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Psychic: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: weak,
        Ground: neut,
        Poison: strong,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: strong,
        Ice: neut,
        Dragon: neut,
        Dark: immune,
        Fairy: neut
    },

    Ground: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: strong,
        Water: neut,
        Rock: strong,
        Electric: strong,
        Psychic: neut,
        Ground: neut,
        Poison: strong,
        Flying: immune,
        Bug: weak,
        Ghost: neut,
        Steel: strong,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Poison: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: neut,
        Water: neut,
        Rock: weak,
        Electric: neut,
        Psychic: neut,
        Ground: weak,
        Poison: weak,
        Flying: neut,
        Bug: neut,
        Ghost: weak,
        Steel: immune,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: strong
    },

    Flying: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: neut,
        Water: neut,
        Rock: weak,
        Electric: weak,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: strong,
        Ghost: neut,
        Steel: weak,
        Fighting: strong,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Bug: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: strong,
        Ground: neut,
        Poison: weak,
        Flying: weak,
        Bug: neut,
        Ghost: weak,
        Steel: weak,
        Fighting: weak,
        Ice: neut,
        Dragon: neut,
        Dark: strong,
        Fairy: weak
    },

    Ghost: {
        'N/A': neut,
        Normal: immune,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: strong,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: strong,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: weak,
        Fairy: neut
    },

    Steel: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: weak,
        Water: weak,
        Rock: strong,
        Electric: weak,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: strong,
        Dragon: neut,
        Dark: neut,
        Fairy: strong
    },

    Fighting: {
        'N/A': neut,
        Normal: strong,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: strong,
        Electric: neut,
        Psychic: weak,
        Ground: neut,
        Poison: weak,
        Flying: weak,
        Bug: weak,
        Ghost: immune,
        Steel: strong,
        Fighting: neut,
        Ice: strong,
        Dragon: neut,
        Dark: strong,
        Fairy: weak
    },

    Ice: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: weak,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: strong,
        Poison: neut,
        Flying: strong,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: weak,
        Dragon: strong,
        Dark: neut,
        Fairy: neut
    },

    Dragon: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: neut,
        Dragon: strong,
        Dark: neut,
        Fairy: immune
    },

    Dark: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: strong,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: strong,
        Steel: neut,
        Fighting: weak,
        Ice: neut,
        Dragon: neut,
        Dark: weak,
        Fairy: weak
    },

    Fairy: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: weak,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: weak,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: strong,
        Ice: neut,
        Dragon: strong,
        Dark: strong,
        Fairy: neut
    }

}


class Battle {

    constructor(trainer1, trainer2) {

        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = trainer1.pokemon[0]
        this.pokemon2 = trainer2.pokemon[0]
        this.turnCount = 0
        this.winner = null

    }

    fight(actionNo = 0, pokemonNo = -1) {

        console.log('')

        if (this.winner !== null) {

            console.log(`This battle is over, ${this.winner.name} was the victor, create a new battle to try again`)

            console.log('')

            return

        }

        let trainerTurn = (this.turnCount % 2)

        let returnFlag = false

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

                    console.log("You don't have a valid Pokemon in that slot, please select a valid move")

                    console.log('')

                    return

                }

                this[currentPokemon] = this[currentTrainer].pokemon[actionNo]

                skipFlag = true

                console.log(`${this[currentTrainer].name} has sent out ${this[currentPokemon].species.name}`)
                console.log(this[currentPokemon].species.makeSound())

            } else if (this[opponentPokemon].currentHP === 0) {

                if (this[opponentTrainer].pokemon[actionNo] === undefined || this[opponentTrainer].pokemon[actionNo].currentHP === 0) {

                    console.log("You don't have a valid Pokemon in that slot, please select a valid move")

                    console.log('')

                    return

                }

                this[opponentPokemon] = this[opponentTrainer].pokemon[actionNo]

                skipFlag = true

                console.log(`${this[opponentTrainer].name} has sent out ${this[opponentPokemon].species.name}`)
                console.log(this[opponentPokemon].species.makeSound())

            }

            let totalPP = 0

            for (const movePP of this[currentPokemon].pp) {

                totalPP += movePP

            }

            if (!skipFlag) {

                if (actionNo === 4) {

                    if (this[currentTrainer].pokemon[pokemonNo] === undefined || this[currentTrainer].pokemon[pokemonNo].currentHP === 0) {

                        console.log("You don't have a valid Pokemon in that slot, please select a valid Pokemon")

                        console.log('')

                        return

                    } else if (this[currentTrainer].pokemon[pokemonNo] === this[currentPokemon]) {
                    
                        console.log(`${this[currentPokemon].species.name} is already in play`)

                        console.log('')

                        return

                    } else {

                        this[currentPokemon] = this[currentTrainer].pokemon[pokemonNo]

                        console.log(`${this[currentTrainer].name} has switched out ${currentPokemonFullName} for ${this[currentPokemon].species.name}`)
                        console.log(this[currentPokemon].species.makeSound())

                    }

                } else if (actionNo === 5) {

                    for (const move of this[currentPokemon].moves) {

                        console.log(`${move.name} - ${move.type} - ${move.power} Power - ${move.accuracy} Accuracy - ${move.category}`)

                    }

                    console.log('')

                    return

                } else if (totalPP === 0 && actionNo === 0) {

                    console.log(`${currentPokemonFullName} used Struggle`)
                    console.log(`${currentPokemonFullName} is damaged by recoil`)

                    let attackStat = this[currentPokemon].species.attack

                    let defenseStat = this[opponentPokemon].species.def

                    let recoilDefenseStat = this[currentPokemon].species.def

                    this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat / 2)
                    this[currentPokemon].currentHP -= Math.floor(attackStat * 60 / recoilDefenseStat / 4)

                } else if (this[currentPokemon].pp[actionNo] === 0 || this[currentPokemon].pp[actionNo] === undefined) {

                    console.log("You don't have a valid move in that slot, please select a valid move")

                    console.log('')

                    return

                } else {

                    let attackStat = this[currentPokemon].species.attack

                    let defenseStat = this[opponentPokemon].species.def

                    if (this[currentPokemon].moves[actionNo].category === "Special") {

                        attackStat = this[currentPokemon].species.spAttack

                        defenseStat = this[opponentPokemon].species.spDef

                    }

                    this[currentPokemon].pp[actionNo]--

                    console.log(`${currentPokemonNickname} used ${this[currentPokemon].moves[actionNo].name}`)

                    const accuracyCheck = Math.random()

                    if (accuracyCheck > this[currentPokemon].moves[actionNo].accuracy/100) {

                        console.log(`${currentPokemonFullName}'s attack missed!`)

                    } else {

                        const typeModifier1 = typeChart[this[currentPokemon].moves[actionNo].type][this[opponentPokemon].species.type1]
                        const typeModifier2 = typeChart[this[currentPokemon].moves[actionNo].type][this[opponentPokemon].species.type2]
                        const typeModifier = typeModifier1 * typeModifier2

                        let stabModifier = 1

                        if (this[currentPokemon].moves[actionNo].type === this[currentPokemon].species.type1 || this[currentPokemon].moves[actionNo].type === this[currentPokemon].species.type2) {

                            stabModifier = 1.5

                        }

                        let criticalModifier = 1

                        const criticalCheck = Math.random()

                        if (criticalCheck > 0.875) {

                            criticalModifier = 2
                            console.log("It's a critical hit!")

                        }

                        this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat * typeModifier * this[currentPokemon].moves[actionNo].power / 60 * criticalModifier * stabModifier * 0.3)

                        // damage dealt is reduced to a half as otherwise battles would be over too quickly

                        if (typeModifier > 1) {

                            console.log("It's super effective!")

                        }
                        
                        if (typeModifier === 0) {

                            console.log("It had no effect")
                        
                        } else if (typeModifier < 0.9) {

                            console.log("It's not very effective")

                        }

                    }

                }

                if (this[opponentPokemon].currentHP <= 0) {

                    this[opponentPokemon].currentHP = 0

                    if (opponentRemainingPokemon === 1) {

                        console.log(`${opponentPokemonNickname} has fainted!`)

                        console.log(`${this[opponentTrainer].name}'s last Pokemon has fainted! ${this[currentTrainer].name} has won the battle!`)

                        this.winner = this[currentTrainer]

                        console.log('')

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

                        console.log('')

                        returnFlag = true

                    }

                }  

                if (this[currentPokemon].currentHP <= 0) {

                    this[currentPokemon].currentHP = 0

                    if (currentRemainingPokemon === 1) {

                        console.log(`${currentPokemonNickname} has fainted!`)

                        console.log(`${this[currentTrainer].name}'s last Pokemon has fainted! ${this[opponentTrainer].name} has won the battle!`)

                        console.log('')

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

                        console.log('')

                        returnFlag = true

                    }

                } 

                if (returnFlag) {

                    return

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

                if (this[opponentTrainer].pokemon[i].currentHP > 0 && this[opponentTrainer].pokemon[i] !== this[opponentPokemon]) {

                    pokemonLine = pokemonLine + i.toString() + ' - ' + this[opponentTrainer].pokemon[i].species.name + ' (' + this[opponentTrainer].pokemon[i].currentHP + '/' + this[opponentTrainer].pokemon[i].species.hp + '), '
    
                }

            }

            pokemonLine = pokemonLine.substring(0, pokemonLine.length - 2)

            battleScreen = battleScreen + '\n' + pokemonLine

        }

        console.log('')

        console.log(battleScreen)

        console.log('5 - See Move Details')

        console.log('')

    }

}


module.exports = { Pokemon, Individual, Move, Trainer, Battle }
