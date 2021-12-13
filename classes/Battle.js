const { typeChart } = require('./typeChart')
const { typeColourise, bolden, underline } = require('../typeColourise')

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

                if (remainingPokemon === 1) {

                    console.log(`${faintedPokemonFullName} has fainted!`)

                    console.log(`${this[faintedTrainer].name}'s last Pokemon has fainted! ${this[otherTrainer].name} has won the battle!`)

                    this.winner = this[otherTrainer]

                    console.log('')

                    return

                } else {

                    const faintedLine = `${this[faintedTrainer].name}'s ${faintedPokemonFullName} has fainted! Please select another Pokemon`

                    let pokemonLineAfterFainting = ''

                    let noOfPokemonAfterFaiting = this[faintedTrainer].pokemon.length

                    for (let i = 0; i < noOfPokemonAfterFaiting; i++) {

                        if (this[faintedTrainer].pokemon[i].currentHP > 0) {

                            pokemonLineAfterFainting = pokemonLineAfterFainting + i.toString() + ' - ' + typeColourise(this[faintedTrainer].pokemon[i].species.name, this[faintedTrainer].pokemon[i].species.type1, this[faintedTrainer].pokemon[i].species.type2) + ' (' + this[faintedTrainer].pokemon[i].currentHP + '/' + this[faintedTrainer].pokemon[i].species.hp + '), '
            
                        }

                    }

                    pokemonLineAfterFainting = pokemonLineAfterFainting.substring(0, pokemonLineAfterFainting.length - 2)

                    const faintedScreen = faintedLine + '\n' + pokemonLineAfterFainting

                    console.log('')

                    console.log(faintedScreen)

                    console.log('')

                }

    }

    battleScreen(currentPokemon, opponentPokemon, opponentTrainer, opponentRemainingPokemon) {

        const nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

        console.log('')

        console.log(underline(bolden(this[opponentTrainer].name + "'s turn")))

        console.log('')

        console.log(`${nicknameObj.opponentPokemonFullName} (${this[opponentPokemon].currentHP}/${this[opponentPokemon].species.hp}) - ${nicknameObj.currentPokemonFullName} (${this[currentPokemon].currentHP}/${this[currentPokemon].species.hp})`)

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

                    this.faintedPokemon(currentPokemon, currentPokemonFullName, currentTrainer, otherTrainer, currentRemainingPokemon)

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

            // if Pokemon is recharging from previous turn

            if (this[currentPokemon].volatileStatus.hasOwnProperty('recharging')) {

                console.log(`${this[currentTrainer].name}'s ${nicknameObj.currentPokemonFullName} needs to recharge`)

                delete this[currentPokemon].volatileStatus.recharging

                // if Pokemon charged a move the previous turn

            } else if (this[currentPokemon].volatileStatus.hasOwnProperty('charging')) {

                let attackStat = this[currentPokemon].species.attack

                let defenseStat = this[opponentPokemon].species.def

                if (this[currentPokemon].volatileStatus.charging.category === "Special") {

                    attackStat = this[currentPokemon].species.spAttack

                    defenseStat = this[opponentPokemon].species.spDef

                }

                console.log('')

                console.log(`${this[currentTrainer].name}'s ${nicknameObj.currentPokemonFullName} unleashed its ${typeColourise(this[currentPokemon].volatileStatus.charging.name, this[currentPokemon].volatileStatus.charging.type)}`)

                const accuracyCheck = Math.random()

                if (accuracyCheck > this[currentPokemon].volatileStatus.charging.accuracy/100) {

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

                    if (criticalCheck > 0.875) {

                        criticalModifier = 2
                        console.log("It's a critical hit!")

                    }

                    this[opponentPokemon].currentHP -= Math.floor(attackStat * 60 / defenseStat * typeModifier * this[currentPokemon].volatileStatus.charging.power / 60 * criticalModifier * stabModifier / 2)

                    // damage dealt is reduced to a half as otherwise battles would be over too quickly

                    if (typeModifier > 1) {

                        console.log("It's super effective!")

                    }
                    
                    if (typeModifier === 0) {

                        console.log("It had no effect")
                    
                    } else if (typeModifier < 0.9) {

                        console.log("It's not very effective")

                    }

                    delete this[currentPokemon].volatileStatus.charging

                }

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

                    this[currentPokemon] = this[currentTrainer].pokemon[pokemonNo]

                    const oldPokemonFullName = nicknameObj.currentPokemonFullName

                    nicknameObj = this.getNicknames(currentPokemon, opponentPokemon)

                    console.log(`${this[currentTrainer].name} has switched out ${oldPokemonFullName} for ${nicknameObj.currentPokemonFullName}`)
                    console.log(this[currentPokemon].species.makeSound())

                }

            // course of action if check moves is used

            } else if (actionNo === 5) {

                let moveCount = 1

                for (const move of this[currentPokemon].moves) {

                    console.log(typeColourise(`${moveCount} - ${move.name} - ${move.type} - ${move.power} Power - ${move.accuracy} Accuracy - ${move.category}`, move.type))

                    moveCount++

                }

                console.log('')

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

                    console.log(pokemonCount.toString() + ' - ' + typeColourise(fullName, pokemon.species.type1, pokemon.species.type2) + ' - ' + types + ' ' + hpCondition)
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
                
            } else if (totalPP === 0 && actionNo === 0) {

                console.log(`${nicknameObj.currentPokemonFullName} used \x1b[1mStruggle\x1b[0m`)
                console.log(`${nicknameObj.currentPokemonFullName} is damaged by recoil`)

                let attackStat = this[currentPokemon].species.attack

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

            } else if (this[currentPokemon].moves[actionNo].effects.includes('Charge')) {

                console.log(`${typeColourise(this[currentPokemon].moves[actionNo].name, this[currentPokemon].moves[actionNo].type)} is charging`)

                this[currentPokemon].pp[actionNo]--

                this[currentPokemon].volatileStatus.charging = this[currentPokemon].moves[actionNo]
                
            // dig is used

            } else if (this[currentPokemon].moves[actionNo].effects.includes('Dig')) {

                console.log(`${nicknameObj.currentPokemonFullName} dug underground`)

                this[currentPokemon].pp[actionNo]--

                this[currentPokemon].volatileStatus.charging = this[currentPokemon].moves[actionNo]
                
            // fly is used

            } else if (this[currentPokemon].moves[actionNo].effects.includes('Fly')) {

                console.log(`${nicknameObj.currentPokemonFullName} flew up in the air`)

                this[currentPokemon].pp[actionNo]--

                this[currentPokemon].volatileStatus.charging = this[currentPokemon].moves[actionNo]
                
            // if move takes effect this turn

            } else {

                this[currentPokemon].pp[actionNo]--

                console.log(`${nicknameObj.currentPokemonFullName} used ${typeColourise(this[currentPokemon].moves[actionNo].name, this[currentPokemon].moves[actionNo].type)}`)

                if (this[currentPokemon].moves[actionNo].category !== 'Status') {
                // damage calculation

                    let attackStat = this[currentPokemon].species.attack

                    let defenseStat = this[opponentPokemon].species.def

                    if (this[currentPokemon].moves[actionNo].category === "Special") {

                        attackStat = this[currentPokemon].species.spAttack

                        defenseStat = this[opponentPokemon].species.spDef

                    }
                    
                    let accuracyModifier = 1

                    if (this[opponentPokemon].volatileStatus.hasOwnProperty('charging')) {

                        if (this[opponentPokemon].volatileStatus.charging.effects.includes('Dig') || this[opponentPokemon].volatileStatus.charging.effects.includes('Fly')) {

                            if (this[currentPokemon].moves[actionNo].effects.includes(`Hits ${this[opponentPokemon].volatileStatus.charging.effects[0]}`)) {

                                attackStat *= 2

                            } else {

                                accuracyModifier = 0

                            }

                        }

                    }

                    const accuracyCheck = Math.random()

                    if (accuracyCheck > accuracyModifier * this[currentPokemon].moves[actionNo].accuracy/100) {

                        console.log(`${nicknameObj.currentPokemonFullName}'s attack missed!`)

                    } else {

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

                            let damage = Math.floor(attackStat / defenseStat * typeModifier * this[currentPokemon].moves[actionNo].power * criticalModifier * stabModifier / 2)

                            if (this[currentPokemon].moves[actionNo].effects.includes('Set Damage')) {

                                if (typeModifier > 0) {

                                    typeModifier = 1

                                }

                                damage = this[currentPokemon].moves[actionNo].power * typeModifier
                                
                            }

                            // damage dealt is reduced to a half as otherwise battles would be over too quickly

                            this[opponentPokemon].currentHP -= damage

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
                        
                        } else if (typeModifier < 0.9) {

                            console.log("It's not very effective")

                        }

                        if (this[currentPokemon].moves[actionNo].effects.includes('Drain')) {

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