const { typeChart } = require('./typeChart')

class Battle {

    constructor(trainer1, trainer2) {

        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = trainer1.pokemon[0]
        this.pokemon2 = trainer2.pokemon[0]
        this.turnCount = 0
        this.winner = null

    }

    fight(actionNo = 0, pokemonNo = -1, damageCalc = 1) {

        console.log('')

        // code for when battle has already been completed

        if (this.winner !== null) {

            console.log(`This battle is over, ${this.winner.name} was the victor, create a new battle to try again`)

            console.log('')

            return

        }

        // defining current/opponent Pokemon/trainer for each turn

        let trainerTurn = (this.turnCount % 2)

        const currentTrainer = 'trainer' + (2 - trainerTurn).toString()
        const opponentTrainer = 'trainer' + (1 + trainerTurn).toString()
        const currentPokemon = 'pokemon' + (2 - trainerTurn).toString()
        const opponentPokemon = 'pokemon' + (1 + trainerTurn).toString()

        let returnFlag = false
        let skipFlag = false

        // defining nickname and full name of each Pokemon

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

        // calculating remianing Pokemon for each trainer

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

        // initiates battle on turn 0

        if (this.turnCount === 0) {

            console.log(`The battle begins! ${this.trainer1.name} sends out ${opponentPokemonFullName} and ${this.trainer2.name} sends out ${currentPokemonFullName}!`)
            console.log(this.pokemon1.species.makeSound())
            console.log(this.pokemon2.species.makeSound())

            // Heals all Pokemon from previous battles

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

        // for turns after turn zero

        } else {

            // course of action if current Pokemon fainted on previous turn

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

            // course of action if opponent Pokemon fainted on previous turn

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

            // checks total PP of current Pokemon for struggle

            let totalPP = 0

            for (const movePP of this[currentPokemon].pp) {

                totalPP += movePP

            }

            if (!skipFlag) {

                // course of action if switch Pokemon is picked

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

                // course of action if check moves is used

                } else if (actionNo === 5) {

                    for (const move of this[currentPokemon].moves) {

                        console.log(`${move.name} - ${move.type} - ${move.power} Power - ${move.accuracy} Accuracy - ${move.category}`)

                    }

                    console.log('')

                    return

                // struggle

                } else if (totalPP === 0 && actionNo === 0) {

                    console.log(`${currentPokemonFullName} used Struggle`)
                    console.log(`${currentPokemonFullName} is damaged by recoil`)

                    let attackStat = this[currentPokemon].species.attack

                    let defenseStat = this[opponentPokemon].species.def

                    let recoilDefenseStat = this[currentPokemon].species.def

                    this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat / 2)
                    this[currentPokemon].currentHP -= Math.floor(attackStat * 60 / recoilDefenseStat / 4)

                // invalud move

                } else if (this[currentPokemon].pp[actionNo] === 0 || this[currentPokemon].pp[actionNo] === undefined) {

                    console.log("You don't have a valid move in that slot, please select a valid move")

                    console.log('')

                    return

                // if attack is used

                } else {

                    // damage calculation

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

                        if (damageCalc === 1) {

                            stabModifier *= 0.6

                            if (this[currentPokemon].moves[actionNo].type === this[currentPokemon].species.type1 || this[currentPokemon].moves[actionNo].type === this[currentPokemon].species.type2) {

                                stabModifier *= 1.5

                            }

                        }

                        let criticalModifier = 1

                        const criticalCheck = Math.random()

                        if (criticalCheck > 0.875) {

                            criticalModifier = 2
                            console.log("It's a critical hit!")

                        }

                        this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat * typeModifier * this[currentPokemon].moves[actionNo].power / 60 * criticalModifier * stabModifier / 2)

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

module.exports = { Battle }
