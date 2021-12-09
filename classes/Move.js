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

module.exports = { Move }
