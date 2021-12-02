const { Pokemon, Move, Trainer, Battle } = require('./pokemon')

describe('Pokemon', () => {

    beforeEach(function () {

        consoleSpy = jest.spyOn(console, 'log');

    });
    
    afterEach(function () {

        consoleSpy.mockRestore();

    });

    const Shroomish = new Pokemon('Shroomish', 60, 40, 'Grass')

    test('Pokemon constructor can be used to create Pokemon with given name, HP, attack, type and move', () => {

        expect(Shroomish.name).toBe('Shroomish')
        expect(Shroomish.HP).toBe(60)
        expect(Shroomish.attack).toBe(40)
        expect(Shroomish.type).toBe('Grass')

    }) 

    const Porygon = new Pokemon('Porygon', 65, 60, 'Normal')

    test('Pokemon prototype has makeSound method that Pokemon made with the Pokemon constructor can use', () => {

        expect(Shroomish.makeSound()).toBe('Shro... Shroomish!')

    })

    const Michael = new Trainer('Michael')

    test('Trainer constructor can be used to create a trainer with a given name and a way of storing Pokemon', () => {

        expect(Michael.name).toBe('Michael')

    })

    const Slugma = new Pokemon('Slugma', 40, 40, 'Fire')
    const Psyduck = new Pokemon('Psyduck', 50, 52, 'Water')
    const Houndour = new Pokemon('Houndour', 45, 60, 'Fire')
    const Snivy = new Pokemon('Snivy', 45, 45, 'Grass')
    const Slowpoke = new Pokemon('Slowpoke', 90, 65, 'Water')

    Michael.catch(Shroomish, 'Shroomy')
    Michael.catch(Slugma, 'Slugs')
    Michael.catch(Psyduck)
    Michael.catch(Houndour)
    Michael.catch(Porygon)
    Michael.catch(Snivy)
    Michael.catch(Slowpoke)

    // Test commented out has had issues where any caught Pokemon would be brought above, so would only work with full party

    // test('Trainer prototype has catch method that allows them to add Pokemon to their team', () => {

    //     expect(Michael.pokemon).toEqual([{species: Shroomish, nickname: 'Shroomy', moves: [], currentHP: 60},{species: Slugma, nickname: 'Slugs', moves: [], currentHP: 40}])

    // })

    test("no more than 6 Pokemon can be a trainer's party", () => {

        expect(Michael.pokemon.length).toBe(6)

    })

    const Absorb = new Move('Absorb', 'Grass')

    test('Move constructor can be used to create a move with a given name and type', () => {

        expect(Absorb.name).toBe('Absorb')
        expect(Absorb.type).toBe('Grass')

    })

    const Tackle = new Move('Tackle','Normal')

    test('can use teach method to add move to Pokemon', () => {

        Michael.pokemon[0].teach(Absorb)
        expect(Michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass'}])
        Michael.pokemon[0].teach(Tackle)
        expect(Michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass'}, {name:'Tackle',type:'Normal'}])

    })

    const evilMichael = new Trainer('Evil Michael')
    evilMichael.catch(Slowpoke, 'Pokester')

    const WaterGun = new Move('Water Gun', 'Water')
    evilMichael.pokemon[0].teach(WaterGun)

    const battle1 = new Battle(Michael, evilMichael)

    test('Battle constructor can be used to create a battle with the two trainers and Pokemon as properties', () => {

        expect(battle1.trainer1).toBe(Michael)
        expect(battle1.trainer2).toBe(evilMichael)
        expect(battle1.pokemon1.species).toBe(Shroomish)
        expect(battle1.pokemon2.species).toBe(Slowpoke)

    })

    test('Both Pokemon start the battle at full health', () => {

        expect(battle1.pokemon1.currentHP).toBe(Shroomish.HP)
        expect(battle1.pokemon2.currentHP).toBe(Slowpoke.HP)

    })

    let consoleSpy

    test("The first time the fight method is called, trainer 2's Pokemon experiences a commensurate loss in HP, taking into account type effectiveness, and the appropriate messages are displayed", () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(5)
        expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Michael sends out Shroomy the Shroomish and Evil Michael sends out Pokester the Slowpoke!")
        expect(consoleSpy).toHaveBeenCalledWith("Shro... Shroomish!")
        expect(consoleSpy).toHaveBeenCalledWith("Slow... Slowpoke!")
        expect(consoleSpy).toHaveBeenCalledWith("Shroomish used Absorb")
        expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
        expect(battle1.pokemon2.currentHP).toBe(65)
        

    })

    test("The second time the fight method is called, it is now trainer 1's Pokemon being damaged and the appropriate messages are displayed, pokemon 2 retains its damage from the previous turn", () => {
        
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        expect(consoleSpy).toHaveBeenCalledWith("Slowpoke used Water Gun")
        expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
        expect(battle1.pokemon2.currentHP).toBe(65)
        expect(battle1.pokemon1.currentHP).toBe(36)

    })

    test("The third time the fight method is called, trainer 1 moves again", () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        expect(consoleSpy).toHaveBeenCalledWith("Shroomish used Absorb")
        expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
        expect(battle1.pokemon2.currentHP).toBe(40)
        

    })

    test("Once one Pokemon has been reduced to zero HP, its is declared dead and the opponent is declared the winner, if the HP is reduced below zero, it is brought back to zero", () => {

        battle1.fight()
        battle1.fight()
        consoleSpy = jest.spyOn(console, 'log')
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(7)
        expect(consoleSpy).toHaveBeenCalledWith("Slowpoke used Water Gun")
        expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
        expect(consoleSpy).toHaveBeenCalledWith("Shroomish has fainted! Evil Michael has won the battle!")
        expect(battle1.pokemon1.currentHP).toBe(0)
        

    })

    test('If the fight method is declared on a battle has been won, it returns with a message saying the battle is over and who won the battle', () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(1)
        expect(consoleSpy).toHaveBeenCalledWith("This battle is over, Evil Michael was the victor, create a new battle to try again")
        

    })

})