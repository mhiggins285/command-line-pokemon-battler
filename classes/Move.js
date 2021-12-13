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

module.exports = { Move }
