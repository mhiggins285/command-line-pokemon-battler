const { typeChart } = require('./typeChart')
const { typeColourise, bolden, underline, statusMenu } = require('../typeColourise')
const { findStatMods, findStatCond } = require('./Move')

class Battle {

    constructor(trainer1, trainer2) {

        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = trainer1.pokemon[0]
        this.pokemon2 = trainer2.pokemon[0]
        this.turnCount = 0
        this.winner = null

    }

    getNicknames(currentPokemon, opponentPokemon) {

        let currentPokemonNickname = ''
        let opponentPokemonNickname = ''
        let currentPokemonFullName = ''
        let opponentPokemonFullName = ''

        if (this[currentPokemon].nickname === undefined) {

            currentPokemonNickname = typeColourise(this[currentPokemon].species.name, this[currentPokemon].species.type1, this[currentPokemon].species.type2)
            currentPokemonFullName = typeColourise(this[currentPokemon].species.name, this[currentPokemon].species.type1, this[currentPokemon].species.type2)

        } else {

            currentPokemonNickname = typeColourise(this[currentPokemon].nickname, this[currentPokemon].species.type1, this[currentPokemon].species.type2)
            currentPokemonFullName = typeColourise(this[currentPokemon].nickname + ' the ' + this[currentPokemon].species.name, this[currentPokemon].species.type1, this[currentPokemon].species.type2)

        }

        if (this[opponentPokemon].nickname === undefined) {

            opponentPokemonNickname = typeColourise(this[opponentPokemon].species.name, this[opponentPokemon].species.type1, this[opponentPokemon].species.type2)
            opponentPokemonFullName = typeColourise(this[opponentPokemon].species.name, this[opponentPokemon].species.type1, this[opponentPokemon].species.type2)

        } else {

            opponentPokemonNickname = typeColourise(this[opponentPokemon].nickname, this[opponentPokemon].species.type1, this[opponentPokemon].species.type2)
            opponentPokemonFullName = typeColourise(this[opponentPokemon].nickname + ' the ' + this[opponentPokemon].species.name, this[opponentPokemon].species.type1, this[opponentPokemon].species.type2)

        }

        return {currentPokemonNickname, currentPokemonFullName, opponentPokemonNickname, opponentPokemonFullName}

    }

    faintedPokemon(faintedPokemon, faintedPokemonFullName, faintedTrainer, otherTrainer, remainingPokemon) {

        this[faintedPokemon].currentHP = 0

        this[faintedPokemon].status = {}

        this[faintedPokemon].volatileStatus = {}

        console.log('')

        if (remainingPokemon === 1) {

            console.log(`${faintedPokemonFullName} has fainted!`)

            console.log('')

            console.log(`${this[faintedTrainer].name}'s last Pokemon has fainted! ${this[otherTrainer].name} has won the battle!`)

            this.winner = this[otherTrainer]

            console.log('')

            return

        } else {

            console.log(`${this[faintedTrainer].name}'s ${faintedPokemonFullName} has fainted! Please select another Pokemon`)

            let pokemonLineAfterFainting = ''

            let noOfPokemonAfterFaiting = this[faintedTrainer].pokemon.length

            for (let i = 0; i < noOfPokemonAfterFaiting; i++) {

                if (this[faintedTrainer].pokemon[i].currentHP > 0) {

                    pokemonLineAfterFainting = pokemonLineAfterFainting + i.toString() + ' - ' + typeColourise(this[faintedTrainer].pokemon[i].species.name, this[faintedTrainer].pokemon[i].species.type1, this[faintedTrainer].pokemon[i].species.type2) + ' (' + this[faintedTrainer].pokemon[i].currentHP + '/' + this[faintedTrainer].pokemon[i].species.hp + '), '
    
                }

            }

            pokemonLineAfterFainting = pokemonLineAfterFainting.substring(0, pokemonLineAfterFainting.length - 2)

            console.log('')

            console.log(pokemonLineAfterFainting)

            console.log('')

        }

    }

    battleScreen(currentPokemon, opponentPokemon, opponentTrainer, opponentRemainingPokemon) {

        const nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

        console.log('')

        console.log(underline(bolden(this[opponentTrainer].name + "'s turn")))

        console.log('')

        console.log(`${nicknameObj.opponentPokemonFullName} (${this[opponentPokemon].currentHP}/${this[opponentPokemon].species.hp})${statusMenu(this[opponentPokemon].status)} - ${nicknameObj.currentPokemonFullName} (${this[currentPokemon].currentHP}/${this[currentPokemon].species.hp})${statusMenu(this[currentPokemon].status)}`)

        console.log('')

        let attackLine = 'Attacks: '
        const noOfMoves = this[opponentPokemon].moves.length

        for (let i = 0; i < noOfMoves; i++) {

            if(this[opponentPokemon].pp[i] > 0) {

                attackLine = attackLine + i.toString() + ' - ' + typeColourise(this[opponentPokemon].moves[i].name, this[opponentPokemon].moves[i].type) + ' (' + this[opponentPokemon].pp[i] + '/' + this[opponentPokemon].moves[i].pp + '), '

            }

        }

        if (attackLine === 'Attacks: ') {

            attackLine = nicknameObj.opponentPokemonFullName + ' is out of usable moves, 0 - \x1b[1mStruggle\x1b[0m'
        
        } else {

            attackLine = attackLine.substring(0, attackLine.length - 2)

        }

        console.log(attackLine)

        console.log('')

        if (opponentRemainingPokemon > 1) {

            let pokemonLine = '4 - Switch Pokemon: '

            let noOfPokemon = this[opponentTrainer].pokemon.length

            for (let i = 0; i < noOfPokemon; i++) {

                if (this[opponentTrainer].pokemon[i].currentHP > 0 && this[opponentTrainer].pokemon[i] !== this[opponentPokemon]) {

                    pokemonLine = pokemonLine + i.toString() + ' - ' + typeColourise(this[opponentTrainer].pokemon[i].species.name, this[opponentTrainer].pokemon[i].species.type1, this[opponentTrainer].pokemon[i].species.type2) + ' (' + this[opponentTrainer].pokemon[i].currentHP + '/' + this[opponentTrainer].pokemon[i].species.hp + '), '
    
                }

            }

            pokemonLine = pokemonLine.substring(0, pokemonLine.length - 2)

            console.log(pokemonLine)

        }

        console.log('')

        console.log('5 - See Move Details')

        console.log('6 - See Pokemon Details')

        console.log('')

    }

    fight(actionNo = 0, pokemonNo = -1, damageCalc = 1) {

        let skipFlag = false

        console.log('')

        // code for when battle has already been completed

        if (this.winner !== null) {

            console.log(`This battle is over, ${this.winner.name} was the victor, create a new battle to try again`)

            console.log('')

            return

        }

        // defining current/opponent Pokemon/trainer for each turn

        let trainerTurn = (this.turnCount % 2)

        let currentTrainer = 'trainer' + (2 - trainerTurn).toString()
        let opponentTrainer = 'trainer' + (1 + trainerTurn).toString()
        let currentPokemon = 'pokemon' + (2 - trainerTurn).toString()
        let opponentPokemon = 'pokemon' + (1 + trainerTurn).toString()

        // defining nickname and full name of each Pokemon

        let nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

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

            console.log(`The battle begins! ${this.trainer1.name} sends out ${nicknameObj.opponentPokemonFullName} and ${this.trainer2.name} sends out ${nicknameObj.currentPokemonFullName}!`)
            console.log(this.pokemon1.species.makeSound())
            console.log(this.pokemon2.species.makeSound())

            // Heals all Pokemon from previous battles

            for (const pokemon of this.trainer1.pokemon) {

                pokemon.currentHP = pokemon.species.hp
                pokemon.status = {}
                pokemon.volatileStatus = {}
                pokemon.statModifications = [0, 0, 0, 0, 0, 0]

                for (let i = 0; i < pokemon.moves.length; i++) {

                    pokemon.pp[i] = pokemon.moves[i].pp

                }

            }

            for (const pokemon of this.trainer2.pokemon) {

                pokemon.currentHP = pokemon.species.hp
                pokemon.status = {}
                pokemon.volatileStatus = {}
                pokemon.statModifications = [0, 0, 0, 0, 0, 0]

                for (let i = 0; i < pokemon.moves.length; i++) {

                    pokemon.pp[i] = pokemon.moves[i].pp

                }

            }

        // for turns after turn zero

        } else {

            // course of action if opponent Pokemon fainted on previous turn

            if (this[opponentPokemon].currentHP === 0) {

                if (this[opponentTrainer].pokemon[actionNo] === undefined || this[opponentTrainer].pokemon[actionNo].currentHP === 0) {

                    console.log("You don't have a valid Pokemon in that slot, please select a valid move")

                    console.log('')

                    return

                }

                this[opponentPokemon] = this[opponentTrainer].pokemon[actionNo]

                nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

                console.log(`${this[opponentTrainer].name} has sent out ${nicknameObj.opponentPokemonFullName}`)
                console.log(this[opponentPokemon].species.makeSound())

                if (this[currentPokemon].currentHP <= 0) {

                    this.faintedPokemon(currentPokemon, nicknameObj.currentPokemonFullName, currentTrainer, opponentTrainer, currentRemainingPokemon + 1)

                    return
                    
                }

                this.turnCount++

                this.battleScreen(currentPokemon, opponentPokemon, opponentTrainer, opponentRemainingPokemon)

                return

            // course of action if current pokemon fainted previous turn

            } else if (this[currentPokemon].currentHP === 0) {

                if (this[currentTrainer].pokemon[actionNo] === undefined || this[currentTrainer].pokemon[actionNo].currentHP === 0) {

                    console.log("You don't have a valid Pokemon in that slot, please select a valid move")

                    console.log('')

                    return

                }

                this[currentPokemon] = this[currentTrainer].pokemon[actionNo]

                nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

                console.log(`${this[currentTrainer].name} has sent out ${nicknameObj.currentPokemonFullName}`)
                console.log(this[currentPokemon].species.makeSound())

                this.turnCount++

                this.battleScreen(currentPokemon, opponentPokemon, opponentTrainer, opponentRemainingPokemon)

                return

            }

            // checks total PP of current Pokemon for struggle

            let totalPP = 0

            for (const movePP of this[currentPokemon].pp) {

                totalPP += movePP

            }

            let paralysisCheck = 0

            if (this[currentPokemon].status.hasOwnProperty('paralyzed')) {

                paralysisCheck = Math.random()

            }

            let isParalyzed = (paralysisCheck > 0.75)

            let burnModifier = 1

            if (this[currentPokemon].status.hasOwnProperty('burned')) {

                burnModifier = 0.5

            }

            let isFrozen = false

            let isThawed = false

            if (this[currentPokemon].status.hasOwnProperty('frozen')) {

                isFrozen = true

                const thawCheck = Math.random()

                if (thawCheck > 0.8) {

                    isFrozen = false

                    isThawed = true

                }

            }

            let isAsleep = false

            let isWoken = false

            if (this[currentPokemon].status.hasOwnProperty('asleep')) {

                isAsleep = true

                if (this[currentPokemon].status.asleep <= 0) {

                    isAsleep = false

                    isWoken = true

                }

            }

            // if Pokemon is recharging from previous turn

            if (this[currentPokemon].volatileStatus.hasOwnProperty('recharging')) {

                console.log(`${this[currentTrainer].name}'s ${nicknameObj.currentPokemonFullName} needs to recharge`)

                delete this[currentPokemon].volatileStatus.recharging

                // if Pokemon charged a move the previous turn

            } else if (this[currentPokemon].volatileStatus.hasOwnProperty('charging') && (isFrozen)) {

                console.log(`${nicknameObj.currentPokemonFullName} is frozen solid`)

                delete this[currentPokemon].volatileStatus.charging

            } else if (this[currentPokemon].volatileStatus.hasOwnProperty('charging') && (isAsleep)) {

                console.log(`${nicknameObj.currentPokemonFullName} is fast asleep`)

                delete this[currentPokemon].volatileStatus.charging

            } else if (this[currentPokemon].volatileStatus.hasOwnProperty('charging') && !(isParalyzed) && !(isFrozen)) {

                if (isThawed) {

                    console.log(`${nicknameObj.currentPokemonFullName} thawed out`)

                    this[currentPokemon].status = {}

                }

                if (isWoken) {

                    console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                    this[currentPokemon].status = {}

                }


                let attackStat = this[currentPokemon].species.attack * burnModifier
                        let defenseStat = this[opponentPokemon].species.def

                        let attackModifierNumerator = 2
                        let attackModifierDenominator = 2

                        if (this[currentPokemon].statModifications[0] > 0) {

                            attackModifierNumerator += this[currentPokemon].statModifications[0]

                        } else {

                            attackModifierDenominator -= this[currentPokemon].statModifications[0]

                        }

                        let defenseModifierNumerator = 2
                        let defenseModifierDenominator = 2

                        if (this[opponentPokemon].statModifications[2] > 0) {

                            defenseModifierNumerator += this[opponentPokemon].statModifications[2]

                        } else {

                            defenseModifierDenominator -= this[opponentPokemon].statModifications[2]

                        }
                        

                        if (this[currentPokemon].moves[actionNo].category === "Special") {

                            attackStat = this[currentPokemon].species.spAttack

                            defenseStat = this[opponentPokemon].species.spDef

                            attackModifierNumerator = 2
                            attackModifierDenominator = 2

                            if (this[currentPokemon].statModifications[1] > 0) {

                                attackModifierNumerator += this[currentPokemon].statModifications[1]

                            } else {

                                attackModifierDenominator -= this[currentPokemon].statModifications[1]

                            }

                            defenseModifierNumerator = 2
                            defenseModifierDenominator = 2

                            if (this[opponentPokemon].statModifications[3] > 0) {

                                defenseModifierNumerator += this[opponentPokemon].statModifications[3]

                            } else {

                                defenseModifierDenominator -= this[opponentPokemon].statModifications[3]

                        }

                    }

                    const statModifier = attackModifierNumerator * defenseModifierDenominator / (attackModifierDenominator * defenseModifierNumerator)

                console.log(`${this[currentTrainer].name}'s ${nicknameObj.currentPokemonFullName} unleashed its ${typeColourise(this[currentPokemon].volatileStatus.charging.name, this[currentPokemon].volatileStatus.charging.type)}`)

                let accuracyModifier = 1

                if (this[opponentPokemon].volatileStatus.hasOwnProperty('charging')) {

                    if (this[opponentPokemon].volatileStatus.charging.effects.includes('Dig') || this[opponentPokemon].volatileStatus.charging.effects.includes('Fly')) {

                        accuracyModifier = 0

                    }

                }

                let accuracyModifierNumerator = 3
                let accuracyModifierDenominator = 3

                if (this[currentPokemon].statModifications[4] > 0) {

                    accuracyModifierNumerator += this[currentPokemon].statModifications[4]

                } else {

                    accuracyModifierDenominator -= this[currentPokemon].statModifications[4]

                }

                let evasivenessModifierNumerator = 3
                let evasivenessModifierDenominator = 3

                if (this[opponentPokemon].statModifications[5] > 0) {

                    evasivenessModifierNumerator += this[opponentPokemon].statModifications[5]

                } else {

                    evasivenessModifierDenominator -= this[opponentPokemon].statModifications[5]

                }

                accuracyModifier *= (accuracyModifierNumerator * evasivenessModifierDenominator / (accuracyModifierDenominator * evasivenessModifierNumerator))

                const accuracyCheck = Math.random()

                if (accuracyCheck > accuracyModifier * this[currentPokemon].volatileStatus.charging.accuracy/100) {

                    console.log(`${nicknameObj.currentPokemonFullName}'s attack missed!`)

                } else {

                    const typeModifier1 = typeChart[this[currentPokemon].volatileStatus.charging.type][this[opponentPokemon].species.type1]
                    const typeModifier2 = typeChart[this[currentPokemon].volatileStatus.charging.type][this[opponentPokemon].species.type2]
                    const typeModifier = typeModifier1 * typeModifier2

                    let stabModifier = 1

                    if (damageCalc === 1) {

                        stabModifier *= 0.6

                        if (this[currentPokemon].volatileStatus.charging.type === this[currentPokemon].species.type1 || this[currentPokemon].volatileStatus.charging.type === this[currentPokemon].species.type2) {

                            stabModifier *= 1.5

                        }

                    }

                    let criticalModifier = 1

                    const criticalCheck = Math.random()

                    if (criticalCheck > 0.875 && typeModifier !== 0) {

                        criticalModifier = 2
                        console.log("It's a critical hit!")

                    }

                    this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat * typeModifier * this[currentPokemon].volatileStatus.charging.power / 60 * criticalModifier * stabModifier * statModifier / 2)

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

                delete this[currentPokemon].volatileStatus.charging

                // course of action if switch Pokemon is picked

            } else if (actionNo === 4) {

                if (this[currentTrainer].pokemon[pokemonNo] === undefined || this[currentTrainer].pokemon[pokemonNo].currentHP === 0) {

                    console.log("You don't have a valid Pokemon in that slot, please select a valid Pokemon")

                    console.log('')

                    return

                } else if (this[currentTrainer].pokemon[pokemonNo] === this[currentPokemon]) {
                
                    console.log(`${nicknameObj.currentPokemonFullName} is already in play`)

                    console.log('')

                    return

                } else {

                    this[currentPokemon].volatileStatus = {}

                    this[currentPokemon].statModifications = [0, 0, 0, 0, 0, 0]

                    if (this[currentPokemon].status.hasOwnProperty('badly poisoned')) {

                        this[currentPokemon].status = {'poisoned': 'poisoned'}

                    }

                    this[currentPokemon] = this[currentTrainer].pokemon[pokemonNo]

                    const oldPokemonFullName = nicknameObj.currentPokemonFullName

                    nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

                    console.log(`${this[currentTrainer].name} has switched out ${oldPokemonFullName} for ${nicknameObj.currentPokemonFullName}`)
                    console.log(this[currentPokemon].species.makeSound())

                }

            // course of action if check moves is used

            } else if (actionNo === 5) {

                let moveCount = 0

                for (const move of this[currentPokemon].moves) {

                    console.log(typeColourise(`${moveCount} - ${move.name} - ${move.type} - ${move.power} Power - ${move.accuracy} Accuracy - ${move.category}`, move.type))
                    console.log(typeColourise(move.description, move.type))
                    console.log('')

                    moveCount++

                }

                return

            // course of action if check Pokemon is used

            } else if (actionNo === 6) {

                let pokemonCount = 1

                for (const pokemon of this[currentTrainer].pokemon) {

                    let fullName = pokemon.species.name

                    if (pokemon.nickname !== undefined) {

                        fullName = pokemon.nickname + ' the ' + pokemon.species.name

                    }

                    let types = typeColourise(pokemon.species.type1, pokemon.species.type1)

                    if (pokemon.species.type2 !== 'N/A') {

                        types = types + '/' + typeColourise(pokemon.species.type2, pokemon.species.type2)

                    }

                    let hpCondition = `(${pokemon.currentHP}/${pokemon.species.hp})`

                    if (pokemon.currentHP === 0) {

                        hpCondition = typeColourise(hpCondition, 'Fighting', 'Fire')

                    }

                    console.log(pokemonCount.toString() + ' - ' + typeColourise(fullName, pokemon.species.type1, pokemon.species.type2) + ' - ' + types + ' ' + hpCondition + statusMenu(pokemon.status))
                    console.log('Attack - ' + pokemon.species.attack + ', Defense - ' + pokemon.species.def + ', Special Attack - ' + pokemon.species.spAttack + ', Special Defense - ' + pokemon.species.spDef)

                    let attackLine = ''

                    const noOfMoves = pokemon.moves.length

                    for (let i = 0; i < noOfMoves; i++) {

                        attackLine = attackLine + typeColourise(pokemon.moves[i].name, pokemon.moves[i].type) + ' (' + pokemon.pp[i] + '/' + pokemon.moves[i].pp + '), '

                    }

                    attackLine = attackLine.substring(0, attackLine.length - 2)

                    console.log(attackLine)

                    console.log('')

                    pokemonCount++

                }

                return

            // struggle

            } else if (totalPP === 0 && actionNo === 0 && !(isParalyzed) && !(isFrozen) && !(isAsleep)) {

                if (isThawed) {

                    console.log(`${nicknameObj.currentPokemonFullName} thawed out`)

                    this[currentPokemon].status = {}

                }

                if (isWoken) {

                    console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                    this[currentPokemon].status = {}

                }

                console.log(`${nicknameObj.currentPokemonFullName} used \x1b[1mStruggle\x1b[0m`)
                console.log(`${nicknameObj.currentPokemonFullName} is damaged by recoil`)

                let attackStat = this[currentPokemon].species.attack * burnModifier

                let defenseStat = this[opponentPokemon].species.def

                let recoilDefenseStat = this[currentPokemon].species.def

                this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat * 0.3)
                this[currentPokemon].currentHP -= Math.floor(attackStat * 60 / recoilDefenseStat * 0.15)

            // invalid move

            } else if (this[currentPokemon].pp[actionNo] === 0 || this[currentPokemon].pp[actionNo] === undefined) {

                console.log("You don't have a valid move in that slot, please select a valid move")

                console.log('')

                return

            // if attack is used

            // if move is a charging move

            } else if (isParalyzed) {

                console.log(`${nicknameObj.currentPokemonNickname} is fully paralyzed`)

            } else if (isFrozen) {

                console.log(`${nicknameObj.currentPokemonNickname} is frozen solid`)                

            } else if (isAsleep && !(this[currentPokemon].moves[actionNo].effects.includes('Snore'))) {

                console.log(`${nicknameObj.currentPokemonNickname} is fast asleep`) 

            } else if (this[currentPokemon].moves[actionNo].effects.includes('Charge')) {

                if (isThawed) {

                    console.log(`${nicknameObj.currentPokemonFullName} thawed out`)

                    this[currentPokemon].status = {}

                }

                if (isWoken) {

                    console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                    this[currentPokemon].status = {}

                }

                console.log(`${typeColourise(this[currentPokemon].moves[actionNo].name, this[currentPokemon].moves[actionNo].type)} is charging`)

                this[currentPokemon].pp[actionNo]--

                this[currentPokemon].volatileStatus.charging = this[currentPokemon].moves[actionNo]
            
            } else if (!(isAsleep) && (this[currentPokemon].moves[actionNo].effects.includes('Snore'))) {

                console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                this[currentPokemon].status = {}

                console.log(`${nicknameObj.currentPokemonFullName} is awake - move failed`)

            // dig is used

            } else if (this[currentPokemon].moves[actionNo].effects.includes('Dig')) {

                if (isThawed) {

                    console.log(`${nicknameObj.currentPokemonFullName} thawed out`)

                    this[currentPokemon].status = {}

                }

                if (isWoken) {

                    console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                    this[currentPokemon].status = {}

                }

                console.log(`${nicknameObj.currentPokemonFullName} dug underground`)

                this[currentPokemon].pp[actionNo]--

                this[currentPokemon].volatileStatus.charging = this[currentPokemon].moves[actionNo]
                
            // fly is used

            } else if (this[currentPokemon].moves[actionNo].effects.includes('Fly')) {

                if (isThawed) {

                    console.log(`${nicknameObj.currentPokemonFullName} thawed out`)

                    this[currentPokemon].status = {}

                }

                if (isWoken) {

                    console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                    this[currentPokemon].status = {}

                }

                console.log(`${nicknameObj.currentPokemonFullName} flew up in the air`)

                this[currentPokemon].pp[actionNo]--

                this[currentPokemon].volatileStatus.charging = this[currentPokemon].moves[actionNo]
                
            // if move takes effect this turn

            } else {

                if (isThawed) {

                    console.log(`${nicknameObj.currentPokemonFullName} thawed out`)

                    this[currentPokemon].status = {}

                }

                if (isWoken) {

                    console.log(`${nicknameObj.currentPokemonFullName} woke up`)

                    this[currentPokemon].status = {}

                }

                if (isAsleep) {

                    console.log(`${nicknameObj.currentPokemonFullName} is fast asleep`)

                }

                this[currentPokemon].pp[actionNo]--

                let digFlyMultiplier = 1

                console.log(`${nicknameObj.currentPokemonFullName} used ${typeColourise(this[currentPokemon].moves[actionNo].name, this[currentPokemon].moves[actionNo].type)}`)

                let accuracyModifier = 1

                if (this[opponentPokemon].volatileStatus.hasOwnProperty('charging')) {

                    if (this[opponentPokemon].volatileStatus.charging.effects.includes('Dig') || this[opponentPokemon].volatileStatus.charging.effects.includes('Fly')) {

                        if (this[currentPokemon].moves[actionNo].effects.includes(`Hits ${this[opponentPokemon].volatileStatus.charging.effects[0]}`)) {

                            digFlyMultiplier = 2

                        } else {

                            accuracyModifier = 0

                        }

                    }

                }

                let accuracyModifierNumerator = 3
                let accuracyModifierDenominator = 3

                if (this[currentPokemon].statModifications[4] > 0) {

                    accuracyModifierNumerator += this[currentPokemon].statModifications[4]

                } else {

                    accuracyModifierDenominator -= this[currentPokemon].statModifications[4]

                }

                let evasivenessModifierNumerator = 3
                let evasivenessModifierDenominator = 3

                if (this[opponentPokemon].statModifications[5] > 0) {

                    evasivenessModifierNumerator += this[opponentPokemon].statModifications[5]

                } else {

                    evasivenessModifierDenominator -= this[opponentPokemon].statModifications[5]

                }

                accuracyModifier *= (accuracyModifierNumerator * evasivenessModifierDenominator / (accuracyModifierDenominator * evasivenessModifierNumerator))

                let accuracyCheck = Math.random()

                if (this[currentPokemon].moves[actionNo].accuracy === "N/A") {

                    accuracyCheck = 0

                }

                if (accuracyCheck > accuracyModifier * this[currentPokemon].moves[actionNo].accuracy/100) {

                    console.log(`${nicknameObj.currentPokemonFullName}'s attack missed!`)

                } else {

                    if (this[currentPokemon].moves[actionNo].category !== 'Status') {
                    // damage calculation

                        let attackStat = this[currentPokemon].species.attack * burnModifier

                        let defenseStat = this[opponentPokemon].species.def

                        let attackModifierNumerator = 2
                        let attackModifierDenominator = 2

                        if (this[currentPokemon].statModifications[0] > 0) {

                            attackModifierNumerator += this[currentPokemon].statModifications[0]

                        } else {

                            attackModifierDenominator -= this[currentPokemon].statModifications[0]

                        }

                        let defenseModifierNumerator = 2
                        let defenseModifierDenominator = 2

                        if (this[opponentPokemon].statModifications[2] > 0) {

                            defenseModifierNumerator += this[opponentPokemon].statModifications[2]

                        } else {

                            defenseModifierDenominator -= this[opponentPokemon].statModifications[2]

                        }
                        

                        if (this[currentPokemon].moves[actionNo].category === "Special") {

                            attackStat = this[currentPokemon].species.spAttack

                            defenseStat = this[opponentPokemon].species.spDef

                            attackModifierNumerator = 2
                            attackModifierDenominator = 2

                            if (this[currentPokemon].statModifications[1] > 0) {

                                attackModifierNumerator += this[currentPokemon].statModifications[1]

                            } else {

                                attackModifierDenominator -= this[currentPokemon].statModifications[1]

                            }

                            defenseModifierNumerator = 2
                            defenseModifierDenominator = 2

                            if (this[opponentPokemon].statModifications[3] > 0) {

                                defenseModifierNumerator += this[opponentPokemon].statModifications[3]

                            } else {

                                defenseModifierDenominator -= this[opponentPokemon].statModifications[3]

                        }

                    }

                    attackStat *= digFlyMultiplier

                    const statModifier = attackModifierNumerator * defenseModifierDenominator / (attackModifierDenominator * defenseModifierNumerator)
                    
                        const typeModifier1 = typeChart[this[currentPokemon].moves[actionNo].type][this[opponentPokemon].species.type1]
                        const typeModifier2 = typeChart[this[currentPokemon].moves[actionNo].type][this[opponentPokemon].species.type2]
                        let typeModifier = typeModifier1 * typeModifier2

                        let stabModifier = 1

                        if (damageCalc === 1) {

                            stabModifier *= 0.6

                            if (this[currentPokemon].moves[actionNo].type === this[currentPokemon].species.type1 || this[currentPokemon].moves[actionNo].type === this[currentPokemon].species.type2) {

                                stabModifier *= 1.5

                            }

                        }

                        let criticalThreshold = 0.875

                        if (this[currentPokemon].moves[actionNo].effects.includes("High Crit")) {

                            criticalThreshold = 0.75

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Set Damage')) {

                            criticalThreshold = 1

                        }

                        let noOfHits = 1

                        let actualNoOfHits = 0

                        if (this[currentPokemon].moves[actionNo].effects.includes('Double-Hit')) {

                            noOfHits = 2

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Multi-Hit')) {

                            const hitCheck = Math.random()

                            if (hitCheck < 0.15) {

                                noOfHits = 2

                            } else if (hitCheck < 0.5) {

                                noOfHits = 3

                            } else if (hitCheck < 0.85) {

                                noOfHits = 4

                            } else {

                                noOfHits = 5

                            }

                        }

                        let totalDamage = 0

                        for (let i = 0; i < noOfHits; i++) {

                            let criticalModifier = 1

                            const criticalCheck = Math.random()

                            if (criticalCheck > criticalThreshold) {

                                criticalModifier = 2
                                console.log("It's a critical hit!")

                            }

                            let damage = Math.floor(attackStat / defenseStat * typeModifier * this[currentPokemon].moves[actionNo].power * criticalModifier * stabModifier * statModifier / 2)

                            if (this[currentPokemon].moves[actionNo].effects.includes('Set Damage')) {

                                if (typeModifier > 0) {

                                    typeModifier = 1

                                }

                                damage = this[currentPokemon].moves[actionNo].power * typeModifier
                                
                            }

                            // damage dealt is reduced to a half as otherwise battles would be over too quickly

                            const hpBefore = this[opponentPokemon].currentHP

                            this[opponentPokemon].currentHP -= damage

                            if (this[opponentPokemon].currentHP < 0) {

                                damage += this[opponentPokemon].currentHP

                            }

                            totalDamage += damage

                            actualNoOfHits++

                            if(this[opponentPokemon].currentHP < 0) {

                                break

                            }

                        }

                        if (noOfHits > 1) {

                            if (actualNoOfHits > 1) {

                                console.log(`It hit ${actualNoOfHits} times`)

                            } else {

                                console.log('It hit once')

                            }

                        }

                        if (typeModifier > 1) {

                            console.log("It's super effective!")

                        }
                        
                        if (typeModifier === 0) {

                            console.log("It had no effect")

                            skipFlag = true
                        
                        } else if (typeModifier < 0.9) {

                            console.log("It's not very effective")

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Recoil') && !(skipFlag)) {

                            this[currentPokemon].currentHP -= Math.floor(totalDamage / 4)

                            console.log(`${nicknameObj.currentPokemonFullName} is damaged by recoil`)

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Self-Destruct')) {

                            this[currentPokemon].currentHP = 0

                            console.log(`${nicknameObj.currentPokemonFullName} is damaged by recoil`)

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Drain') && !(skipFlag)) {

                            this[currentPokemon].currentHP += Math.floor(totalDamage * 0.5)

                            if (this[currentPokemon].currentHP > this[currentPokemon].species.hp) {

                                this[currentPokemon].currentHP = this[currentPokemon].species.hp

                            }

                            console.log(`${nicknameObj.currentPokemonFullName} drained some of ${nicknameObj.opponentPokemonFullName}'s health`)

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Recharge')) {

                            this[currentPokemon].volatileStatus.recharging = true

                        }

                    }

                    const statModCodes = findStatMods(this[currentPokemon].moves[actionNo].effects)

                    let statModThreshold = 0

                    if (statModCodes !== null && statModCodes[1].length > 5) {

                        statModThreshold = 1 - parseInt(statModCodes[1].substring(5, statModCodes[1].length))/100

                    }

                    let statModCheck = Math.random()

                    if (statModCodes !== null && statModCheck > statModThreshold && !(skipFlag)) {

                        for (const statModCode of statModCodes) {

                            let statAffectee = ''
                            let statAffecteeFullName= ''

                            if (statModCode[4] === 'U') {

                                statAffectee = this[currentPokemon]
                                statAffecteeFullName = nicknameObj.currentPokemonFullName

                            } else {

                                statAffectee = this[opponentPokemon]
                                statAffecteeFullName = nicknameObj.opponentPokemonFullName

                            }

                            let affectedStat = ''
                            let affectedStatNo = 0

                            switch(statModCode.substring(0, 2)) {

                                case 'AT':

                                    affectedStat = 'Attack'
                                    affectedStatNo = 0
                                    break

                                case 'SA':

                                    affectedStat = 'Special Attack'
                                    affectedStatNo = 1
                                    break

                                case 'DF':

                                    affectedStat = 'Defense'
                                    affectedStatNo = 2
                                    break

                                case 'SD':

                                    affectedStat = 'Special Defense'
                                    affectedStatNo = 3
                                    break

                                case 'AC':

                                    affectedStat = 'Accuracy'
                                    affectedStatNo = 4
                                    break

                                case 'EV':

                                    affectedStat = 'Evasiveness'
                                    affectedStatNo = 5
                                    break

                            }

                            let intensifier = ''

                            if (statModCode[2] === '2') {

                                intensifier = 'sharply '

                            }

                            if (statModCode[3] === 'U') {

                                if (statAffectee.statModifications[affectedStatNo] === 6) {

                                    console.log(`${statAffecteeFullName}'s ${affectedStat} won't go any higher`)

                                } else {

                                    statAffectee.statModifications[affectedStatNo] += parseInt(statModCode[2])

                                    if (statAffectee.statModifications[affectedStatNo] > 6) {

                                        statAffectee.statModifications[affectedStatNo] = 6

                                    }

                                    console.log(`${statAffecteeFullName}'s ${affectedStat} ${intensifier}increased`)

                                }
                                
                            } else if ((statModCode[3] === 'D')) {

                                if (statAffectee.statModifications[affectedStatNo] === -6) {

                                    console.log(`${statAffecteeFullName}'s ${affectedStat} won't go any lower`)

                                } else {

                                    statAffectee.statModifications[affectedStatNo] -= parseInt(statModCode[2])

                                    if (statAffectee.statModifications[affectedStatNo] < -6) {

                                        statAffectee.statModifications[affectedStatNo] = 6

                                    }

                                    console.log(`${statAffecteeFullName}'s ${affectedStat} ${intensifier}decreased`)

                                }

                            }

                        }

                    }

                    let statCondCode = findStatCond(this[currentPokemon].moves[actionNo].effects)

                    let statCondThreshold = 0

                    if (statCondCode !== null) {

                        statCondThreshold = 1 - parseInt(statCondCode.substring(3, statCondCode.length))/100

                    }

                    let statCondCheck = Math.random()

                    if (statCondCode !== null && statCondCheck > statCondThreshold && !(skipFlag)) {

                        if (Object.keys(this[opponentPokemon].status).length !== 0) {
                            
                            console.log(`${nicknameObj.opponentPokemonFullName} already has a status condition - move failed`)

                        } else {

                            let statCond = statCondCode.substring(0, 3)

                            if (statCond === 'PSN') {

                                if (this[opponentPokemon].species.type1 === 'Poison' || this[opponentPokemon].species.type2 === 'Poison') {

                                    console.log('It had no effect')

                                } else {

                                    this[opponentPokemon].status = {'poisoned': 'poisoned'}

                                    console.log(`${nicknameObj.opponentPokemonFullName} was poisoned`)

                                }

                            }

                            if (statCond === 'BPN') {

                                if (this[opponentPokemon].species.type1 === 'Poison' || this[opponentPokemon].species.type2 === 'Poison') {

                                    console.log('It had no effect')

                                } else {

                                    this[opponentPokemon].status = {'badly poisoned': 1}

                                    console.log(`${nicknameObj.opponentPokemonFullName} was badly poisoned`)

                                }

                            }

                            if (statCond === 'PRZ') {

                                if (this[opponentPokemon].species.type1 === 'Electric' || this[opponentPokemon].species.type2 === 'Electric') {

                                    console.log('It had no effect')

                                } else {

                                    this[opponentPokemon].status = {'paralyzed': 'paralyzed'}

                                    console.log(`${nicknameObj.opponentPokemonFullName} was paralyzed`)

                                }

                            }

                            if (statCond === 'BRN') {

                                if (this[opponentPokemon].species.type1 === 'Fire' || this[opponentPokemon].species.type2 === 'Fire') {

                                    console.log('It had no effect')

                                } else {

                                    this[opponentPokemon].status = {'burned': 'burned'}

                                    console.log(`${nicknameObj.opponentPokemonFullName} was burned`)

                                }

                            }

                            if (statCond === 'FRZ') {

                                if (this[opponentPokemon].species.type1 === 'Ice' || this[opponentPokemon].species.type2 === 'Ice') {

                                    console.log('It had no effect')

                                } else {

                                    this[opponentPokemon].status = {'frozen': 'frozen'}

                                    console.log(`${nicknameObj.opponentPokemonFullName} was frozen`)

                                }

                            }

                            if (statCond === 'SLP') {

                                let sleepTurns = Math.ceil(3 * Math.random())

                                this[opponentPokemon].status = {'asleep': sleepTurns}

                                console.log(`${nicknameObj.opponentPokemonFullName} fell asleep`)

                            }

                        }

                    }

                    if (this[currentPokemon].moves[actionNo].effects.includes('Force Switch')) {

                        console.log('')

                        if (this[opponentPokemon].volatileStatus.hasOwnProperty('charging') && (this[opponentPokemon].volatileStatus.charging.effects.includes('Dig') || this[opponentPokemon].volatileStatus.charging.effects.includes('Fly')) && !(this[currentPokemon].moves[actionNo].effects.includes(`Hits ${this[opponentPokemon].volatileStatus.charging.effects[0]}`))) {

                            console.log('Target was unaffected by move')

                        } else if (opponentRemainingPokemon === 1) {

                            console.log(`${this[opponentTrainer].name} is down to their last Pokemon - move failed`)

                        } else {

                            let pokemonSelected = Math.ceil((opponentRemainingPokemon - 1) * Math.random())

                            let livingPokemonNo = 0

                            for (const pokemon of this[opponentTrainer].pokemon) {

                                if (pokemon.currentHP > 0 && pokemon !== this[opponentPokemon]) {

                                    livingPokemonNo++

                                    if (livingPokemonNo === pokemonSelected) {

                                        this[opponentPokemon].volatileStatus = {}

                                        this[opponentPokemon].statModifications = [0, 0, 0, 0, 0, 0]

                                        if (this[opponentPokemon].status.hasOwnProperty('badly poisoned')) {

                                            this[opponentPokemon].status = {'poisoned': 'poisoned'}

                                        }

                                        let nickname = typeColourise(pokemon.species.name, pokemon.species.type1, pokemon.species.type2)

                                        if (pokemon.nickname !== undefined) {

                                            nickname = typeColourise(`${pokemon.nickname} the ${pokemon.species.name}`, pokemon.species.type1, pokemon.species.type2)

                                        }

                                        console.log(`${this[opponentTrainer].name}'s ${nickname} was switched in for ${nicknameObj.opponentPokemonFullName}`)

                                        this[opponentPokemon] = pokemon

                                        break

                                    }

                                }

                            }

                        }

                    }

                    if (this[currentPokemon].moves[actionNo].effects.includes('Stat Neut')) {

                        this.pokemon1.statModifications = [0, 0, 0, 0, 0, 0]
                        this.pokemon2.statModifications = [0, 0, 0, 0, 0, 0]

                    }

                    if (this[currentPokemon].moves[actionNo].effects.includes('Heal Bell')) {

                        for (const pokemon of this[currentTrainer].pokemon) {

                            pokemon.status = {}

                        }

                        console.log(`${this[currentTrainer].name}'s team was healed`)

                    }

                    if (this[currentPokemon].moves[actionNo].effects.includes('Rest')) {

                        if (this[currentPokemon].currentHP === this[currentPokemon].species.hp) {

                            console.log(`${nicknameObj.currentPokemonFullName} is at full health - move failed`)

                        } else {

                            this[currentPokemon].currentHP = this[currentPokemon].species.hp
                            this[currentPokemon].status = {'asleep': 3}

                            console.log(`${nicknameObj.currentPokemonFullName} fell asleep`)
                            console.log(`${nicknameObj.currentPokemonFullName} fully restored its health`)

                        }

                    }
                    
                    if (this[currentPokemon].moves[actionNo].effects.includes('Recover')) {

                        if (this[currentPokemon].currentHP < this[currentPokemon].species.hp) {

                            this[currentPokemon].currentHP += Math.floor(this[currentPokemon].species.hp / 2)

                            if (this[currentPokemon].currentHP > this[currentPokemon].species.hp) {

                                this[currentPokemon].currentHP = this[currentPokemon].species.hp

                            }

                            console.log(`${nicknameObj.currentPokemonFullName} recovered health`)

                        } else {

                            console.log(`${nicknameObj.currentPokemonFullName} is already at full health - move failed`)

                        }

                    }

                }

            }

            if (this[currentPokemon].status.hasOwnProperty('poisoned')) {

                this[currentPokemon].currentHP -= Math.ceil(this[currentPokemon].species.hp / 16)

                console.log(`${nicknameObj.currentPokemonFullName} was hurt by poison`)

            }

            if (this[currentPokemon].status.hasOwnProperty('burned')) {

                this[currentPokemon].currentHP -= Math.ceil(this[currentPokemon].species.hp / 16)

                console.log(`${nicknameObj.currentPokemonFullName} was hurt by its burn`)

            }

            if (this[currentPokemon].status.hasOwnProperty('badly poisoned')) {

                this[currentPokemon].currentHP -= Math.ceil(this[currentPokemon].species.hp / 16) * this[currentPokemon].status['badly poisoned']

                console.log(`${nicknameObj.currentPokemonFullName} was hurt by poison`)

                this[currentPokemon].status['badly poisoned'] ++

            }

            if (this[currentPokemon].status.hasOwnProperty('asleep')) {

                this[currentPokemon].status.asleep--

            }

            // if opponent has fainted, checks remaining pokemon, if none left, ends battle, otherwise, prompts them to switch Pokemon

            if (this[opponentPokemon].currentHP <= 0) {

                this.faintedPokemon(opponentPokemon, nicknameObj.opponentPokemonFullName, opponentTrainer, currentTrainer, opponentRemainingPokemon)

                return

            }  

            // if own Pokemon has fainted, checks remaining pokemon, if none left, ends battle, otherwise, prompts them to switch Pokemon

            if (this[currentPokemon].currentHP <= 0) {

                this.faintedPokemon(currentPokemon, nicknameObj.currentPokemonFullName, currentTrainer, opponentTrainer, currentRemainingPokemon)

                return

            } 

        }
        
        this.turnCount++

        if (this[opponentPokemon].volatileStatus.hasOwnProperty('recharging') || this[opponentPokemon].volatileStatus.hasOwnProperty('charging')) {

            this.fight()

            return

        }


        this.battleScreen(currentPokemon, opponentPokemon, opponentTrainer, opponentRemainingPokemon)

    }

}

module.exports = { Battle }