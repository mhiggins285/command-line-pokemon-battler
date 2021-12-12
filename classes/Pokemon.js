const { typeColourise } = require('../typeColourise')

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
        const sound = typeColourise(cry + '... ' + this.name + '!', this.type1, this.type2)
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
        this.status = {}
        this.volatileStatus = {}

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

module.exports = { Pokemon, Individual }
