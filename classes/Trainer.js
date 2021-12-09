const { Individual } = require('./Pokemon')

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

module.exports = { Trainer }
