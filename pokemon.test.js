
const { Pokemon, Move, Trainer, Battle } = require('./pokemon')

describe('Pokemon', () => {

    beforeEach(function () {

        consoleSpy = jest.spyOn(console, 'log');

    });
    
    afterEach(function () {

        consoleSpy.mockRestore();

    });

    const shroomish = new Pokemon('Shroomish', 60, 40, 'Grass')

    test('Pokemon constructor can be used to create Pokemon with given name, HP, attack, type and move', () => {

        expect(shroomish.name).toBe('Shroomish')
        expect(shroomish.HP).toBe(60)
        expect(shroomish.attack).toBe(40)
        expect(shroomish.type1).toBe('Grass')

    }) 

    const porygon = new Pokemon('Porygon', 65, 60, 'Normal')

    test('Pokemon prototype has makeSound method that Pokemon made with the Pokemon constructor can use', () => {

        expect(shroomish.makeSound()).toBe('Shro... Shroomish!')

    })

    const michael = new Trainer('Michael')

    test('Trainer constructor can be used to create a trainer with a given name and a way of storing Pokemon', () => {

        expect(michael.name).toBe('Michael')

    })

    const slugma = new Pokemon('Slugma', 40, 40, 'Fire')
    const psyduck = new Pokemon('Psyduck', 50, 52, 'Water')
    const houndour = new Pokemon('Houndour', 45, 60, 'Fire')
    const snivy = new Pokemon('Snivy', 45, 45, 'Grass')
    const slowpoke = new Pokemon('Slowpoke', 90, 65, 'Water')

    michael.catch(shroomish, 'Shroomy')
    michael.catch(slugma, 'Slugs')
    michael.catch(psyduck)
    michael.catch(snivy)
    michael.catch(houndour)
    michael.catch(porygon)
    michael.catch(slowpoke)

    // Test commented out has had issues where any caught Pokemon would be brought above, so would only work with full party

    // test('Trainer prototype has catch method that allows them to add Pokemon to their team', () => {

    //     expect(Michael.pokemon).toEqual([{species: Shroomish, nickname: 'Shroomy', moves: [], currentHP: 60},{species: Slugma, nickname: 'Slugs', moves: [], currentHP: 40}])

    // })

    test("no more than 6 Pokemon can be a trainer's party", () => {

        expect(michael.pokemon.length).toBe(6)

    })

    const absorb = new Move('Absorb', 'Grass')

    test('Move constructor can be used to create a move with a given name and type', () => {

        expect(absorb.name).toBe('Absorb')
        expect(absorb.type).toBe('Grass')

    })

    const tackle = new Move('Tackle','Normal')

    test('can use teach method to add move to Pokemon', () => {

        michael.pokemon[0].teach(absorb)
        expect(michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass'}])
        michael.pokemon[0].teach(tackle)
        expect(michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass'}, {name:'Tackle',type:'Normal'}])

    })

    const seedBomb = new Move('Seed Bomb', 'Grass')
    const headbutt = new Move('Headbutt', 'Normal')
    const megaDrain = new Move('Mega Drain', 'Grass')

    test('no more than 4 moves can be taught', () => {

        michael.pokemon[0].teach(seedBomb)
        michael.pokemon[0].teach(headbutt)
        michael.pokemon[0].teach(megaDrain)
        expect(michael.pokemon[0].moves.length).toBe(4)
        
    })

    const evilMichael = new Trainer('Evil Michael')
    evilMichael.catch(slowpoke, 'Pokester')

    const waterGun = new Move('Water Gun', 'Water')
    evilMichael.pokemon[0].teach(waterGun)

    const battle1 = new Battle(michael, evilMichael)

    test('Battle constructor can be used to create a battle with the two trainers and Pokemon as properties', () => {

        expect(battle1.trainer1).toBe(michael)
        expect(battle1.trainer2).toBe(evilMichael)
        expect(battle1.pokemon1.species).toBe(shroomish)
        expect(battle1.pokemon2.species).toBe(slowpoke)

    })

    test('Both Pokemon start the battle at full health', () => {

        expect(battle1.pokemon1.currentHP).toBe(shroomish.HP)
        expect(battle1.pokemon2.currentHP).toBe(slowpoke.HP)

    })

    let consoleSpy

    test("The first time the fight method is called, trainer 2's Pokemon experiences a commensurate loss in HP, taking into account type effectiveness, and the appropriate messages are displayed", () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(5)
        expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Michael sends out Shroomy the Shroomish and Evil Michael sends out Pokester the Slowpoke!")
        expect(consoleSpy).toHaveBeenCalledWith("Shro... Shroomish!")
        expect(consoleSpy).toHaveBeenCalledWith("Slow... Slowpoke!")
        expect(consoleSpy).toHaveBeenCalledWith("Shroomy used Absorb")
        expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
        expect(battle1.pokemon2.currentHP).toBe(65)
        

    })

    test("The second time the fight method is called, it is now trainer 1's Pokemon being damaged and the appropriate messages are displayed, pokemon 2 retains its damage from the previous turn", () => {
        
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        expect(consoleSpy).toHaveBeenCalledWith("Pokester used Water Gun")
        expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
        expect(battle1.pokemon2.currentHP).toBe(65)
        expect(battle1.pokemon1.currentHP).toBe(36)

    })

    test("The third time the fight method is called, trainer 1 moves again", () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        expect(consoleSpy).toHaveBeenCalledWith("Shroomy used Absorb")
        expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
        expect(battle1.pokemon2.currentHP).toBe(40)
        

    })

    test("Once one Pokemon has been reduced to zero HP, its is declared dead and the opponent is declared the winner, if the HP is reduced below zero, it is brought back to zero", () => {

        battle1.fight()
        battle1.fight()
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(7)
        expect(consoleSpy).toHaveBeenCalledWith("Pokester used Water Gun")
        expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
        expect(consoleSpy).toHaveBeenCalledWith("Shroomy has fainted! Evil Michael has won the battle!")
        expect(battle1.pokemon1.currentHP).toBe(0)
        

    })

    test('If the fight method is declared on a battle has been won, it returns with a message saying the battle is over and who won the battle', () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledTimes(1)
        expect(consoleSpy).toHaveBeenCalledWith("This battle is over, Evil Michael was the victor, create a new battle to try again")
        

    })

    const lotad = new Pokemon('Lotad', 40, 30, 'Water', 'Grass')
    const omanyte = new Pokemon('Omanyte', 35, 40, 'Water', 'Rock')

    const coolGuy = new Trainer('Cool Guy')
    const fossilphile = new Trainer('Fossilphile')

    const rockSlide = new Move('Rock Slide', 'Rock')

    coolGuy.catch(lotad, "Paddy")
    fossilphile.catch(omanyte, "Benedict")

    coolGuy.pokemon[0].teach(absorb)
    coolGuy.pokemon[0].teach(waterGun)

    fossilphile.pokemon[0].teach(waterGun)
    fossilphile.pokemon[0].teach(rockSlide)

    const battle2 = new Battle(coolGuy, fossilphile)
    const battle3 = new Battle(coolGuy, fossilphile)
    const battle4 = new Battle(coolGuy, fossilphile)
    
    test('fight method takes a number as a method that allows for the selection of moves', () => {

        battle2.fight(0)
        expect(consoleSpy).toHaveBeenCalledWith('Lotad used Absorb')
        battle2.fight(0)
        expect(consoleSpy).toHaveBeenCalledWith('Omanyte used Water Gun')
        battle2.fight(1)
        expect(consoleSpy).toHaveBeenCalledWith('Lotad used Water Gun')
        battle2.fight(0)
        expect(consoleSpy).toHaveBeenCalledWith('Omanyte used Rock Slide')

    })

    test('if no number is given, defaults to the first move', () => {

        battle2.fight()
        expect(consoleSpy).toHaveBeenCalledWith('Lotad used Absorb')

    })

    test('for Pokemon with multiple types, both types are accounted for when doing damage calculations', () => {

        battle3.fight(0)
        expect(battle3.pokemon2.currentHP).toBe(12)
        battle3.fight(0)
        expect(battle3.pokemon1.currentHP).toBe(20)
        battle3.fight(1)
        expect(battle3.pokemon2.currentHP).toBe(4)

    })

    test('the first time the fight method is used for a battle, the fight is initiated and the options are spelled out', () => {

        battle4.fight()
        expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Cool Guy sends out Paddy the Lotad and Fossilphile sends out Benedict the Omanyte!")
        expect(consoleSpy).toHaveBeenCalledWith("Cool Guy's turn\nLotad (40/40) - Omanyte (35/35)\nAttacks: 0 - Absorb, 1 - Water Gun")

    })

    test('on subsequent turns, the options are spelled out to the player', () => {

        battle4.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Fossilphile's turn\nOmanyte (12/35) - Lotad (40/40)\nAttacks: 0 - Water Gun, 1 - Rock Slide")

    })

    const ember = new Move('Ember', 'Fire')

    const charmander = new Pokemon('Charmander', 39, 52, 'Fire')
    const glameow = new Pokemon('Glameow', 49, 55, 'Normal')

    const kabuto = new Pokemon('Kabuto', 30, 80, 'Rock', 'Water')
    const lileep = new Pokemon('Lileep', 66, 41, 'Rock', 'Grass')

    coolGuy.catch(charmander, 'Charmy')
    coolGuy.catch(glameow, 'Ru')

    fossilphile.catch(kabuto, 'Ninja')
    fossilphile.catch(lileep, 'Rockbottom')

    coolGuy.pokemon[1].teach(ember)
    coolGuy.pokemon[2].teach(tackle)
    
    fossilphile.pokemon[1].teach(rockSlide)
    fossilphile.pokemon[2].teach(megaDrain)

    const battle5 = new Battle(coolGuy, fossilphile)

    test('If the player inputs 4, they have the option to change to another Pokemon in the index of their third input argument', () => {

        battle5.fight()
        battle5.fight(4,2)
        expect(battle5.pokemon1.species).toBe(glameow)
        battle5.fight(4,1)
        expect(battle5.pokemon2.species).toBe(kabuto)
        battle5.fight(4,0)
        expect(battle5.pokemon1.species).toBe(lotad)
        battle5.fight(4,2)
        expect(battle5.pokemon2.species).toBe(lileep)

    })

    const paul = new Trainer('Paul')

    const chimchar = new Pokemon('Chimchar', 44, 58, 'Fire')

    paul.catch(chimchar)

    paul.pokemon[0].teach(ember)

    const battle6 = new Battle(michael, paul)

    test('If no nickname is inputted, defaults to using species name', () => {

        battle6.fight()
        expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Michael sends out Shroomy the Shroomish and Paul sends out Chimchar!")
        battle6.fight()
        battle6.fight()
        expect(consoleSpy).toHaveBeenCalledWith('Chimchar used Ember')

    })

    const mikey = new Trainer('Mikey')

    const eevee = new Pokemon('Eevee', 55, 55, 'Normal')

    const lastResort = new Move('Last Resort', 'Normal', 2)

    mikey.catch(eevee)

    mikey.pokemon[0].teach[lastResort]

    const battle7 = new Battle(mikey,michael)

    test('moves have PP, once a move has been moved as many times as its PP, it cannot be used again', () => {

        battle7.fight()
        battle7.fight()
        battle7.fight()
        battle7.fight()
        battle7.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Mikey's turn\nEevee (15/55) - Shroomish (5/60)\nEevee is out of usable moves")

    })

    test('once a Pokemon has run out of PP, it can only use struggle, which inflict half damage onto itself', () => {

        battle7.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Eevee used Struggle")
        expect(consoleSpy).toHaveBeenCalledWith("Eevee is damaged by recoil")
        expect(pokemon1.currentHP).toBe(2)

    })

})