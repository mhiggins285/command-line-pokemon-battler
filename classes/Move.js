class Move {

    constructor(name, type, pp = 35, power = 60, accuracy = 100, category = 'Physical', effects = [], description = '') {

        this.name = name
        this.type = type
        this.pp = pp
        this.power = power
        this.accuracy = accuracy
        this.category = category
        this.effects = effects
        this.description = description

    }

}

function findStatMods(effectArray) {

    for (const effect of effectArray) {

        if (effect.substring(0, 8) === "Stat Mod") {

            let modCodes = effect.substring(8, effect.length).split(' ')

            return modCodes

        }

    }

    return null

}

module.exports = { Move, findStatMods }
