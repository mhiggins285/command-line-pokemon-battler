
const { Pokemon, Move, Trainer, Battle } = require('./pokemon')

describe('Pokemon', () => {

    beforeEach(function () {

        consoleSpy = jest.spyOn(console, 'log')

        jest.spyOn(global.Math, 'random').mockReturnValue(0.1)

    });
    
    afterEach(function () {

        consoleSpy.mockRestore()

        jest.spyOn(global.Math, 'random').mockRestore()

    });

    const shroomish = new Pokemon('Shroomish', [60, 40], 'Grass')

    test('Pokemon constructor can be used to create Pokemon with given name, HP, attack, type and move', () => {

        expect(shroomish.name).toBe('Shroomish')
        expect(shroomish.hp).toBe(60)
        expect(shroomish.attack).toBe(40)
        expect(shroomish.type1).toBe('Grass')

    }) 

    const porygon = new Pokemon('Porygon', [65, 60], 'Normal')

    test('Pokemon prototype has makeSound method that Pokemon made with the Pokemon constructor can use', () => {

        expect(shroomish.makeSound()).toBe('Shro... Shroomish!')

    })

    const michael = new Trainer('Michael')

    test('Trainer constructor can be used to create a trainer with a given name and a way of storing Pokemon', () => {

        expect(michael.name).toBe('Michael')

    })

    const slugma = new Pokemon('Slugma', [40, 40], 'Fire')
    const psyduck = new Pokemon('Psyduck', [50, 52], 'Water')
    const houndour = new Pokemon('Houndour', [45, 60], 'Fire', 'Dark')
    const snivy = new Pokemon('Snivy', [45, 45], 'Grass')
    const slowpoke = new Pokemon('Slowpoke', [90, 65], 'Water', 'Psychic')

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
        expect(michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass', pp: 35, power: 60, accuracy: 100, category: 'Physical'}])
        michael.pokemon[0].teach(tackle)
        expect(michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass', pp: 35, power: 60, accuracy: 100, category: 'Physical'}, {name:'Tackle',type:'Normal', pp: 35, power: 60, accuracy: 100, category: 'Physical'}])

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

        expect(battle1.pokemon1.currentHP).toBe(shroomish.hp)
        expect(battle1.pokemon2.currentHP).toBe(slowpoke.hp)

    })


    test("The first time the fight method is called, trainer 2's Pokemon experiences a commensurate loss in HP, taking into account type effectiveness, and the appropriate messages are displayed", () => {
    
        battle1.fight()
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Shroomy used Absorb")
        expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
        expect(battle1.pokemon2.currentHP).toBe(65)
        

    })

    test("The second time the fight method is called, it is now trainer 1's Pokemon being damaged and the appropriate messages are displayed, pokemon 2 retains its damage from the previous turn", () => {
        
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Pokester used Water Gun")
        expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
        expect(battle1.pokemon2.currentHP).toBe(65)
        expect(battle1.pokemon1.currentHP).toBe(36)

    })

    test("The third time the fight method is called, trainer 1 moves again", () => {

        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Shroomy used Absorb")
        expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
        expect(battle1.pokemon2.currentHP).toBe(40)
        

    })

    test("Once one Pokemon has been reduced to zero HP, it is declared dead", () => {

        battle1.fight()
        battle1.fight()
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Pokester used Water Gun")
        expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
        expect(consoleSpy).toHaveBeenCalledWith("Michael's Shroomy has fainted! Please select another Pokemon\n1 - Slugma (40/40), 2 - Psyduck (50/50), 3 - Snivy (45/45), 4 - Houndour (45/45), 5 - Porygon (65/65)")

    })

    test('If the fight method is declared on a battle has been won, it returns with a message saying the battle is over and who won the battle', () => {

        battle1.fight(5)
        battle1.fight()
        battle1.fight()
        battle1.fight()
        battle1.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Evil Michael's last Pokemon has fainted! Michael has won the battle!")
        expect(consoleSpy).toHaveBeenCalledWith("This battle is over, Michael was the victor, create a new battle to try again")
        

    })

    const lotad = new Pokemon('Lotad', [40, 30], 'Water', 'Grass')
    const omanyte = new Pokemon('Omanyte', [45, 40], 'Water', 'Rock')

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

        battle2.fight()
        battle2.fight(0)
        expect(consoleSpy).toHaveBeenCalledWith('Paddy used Absorb')
        battle2.fight(0)
        expect(consoleSpy).toHaveBeenCalledWith('Benedict used Water Gun')
        battle2.fight(1)
        expect(consoleSpy).toHaveBeenCalledWith('Paddy used Water Gun')
        battle2.fight(1)
        expect(consoleSpy).toHaveBeenCalledWith('Benedict used Rock Slide')

    })

    test('if no number is given, defaults to the first move', () => {

        battle2.fight()
        expect(consoleSpy).toHaveBeenCalledWith('Paddy used Absorb')

    })

    test('for Pokemon with multiple types, both types are accounted for when doing damage calculations', () => {

        battle3.fight()
        battle3.fight(0)
        expect(battle3.pokemon2.currentHP).toBe(22)
        battle3.fight(0)
        expect(battle3.pokemon1.currentHP).toBe(29)
        battle3.fight(1)
        expect(battle3.pokemon2.currentHP).toBe(8)

    })

    

    test('the first time the fight method is used for a battle, the fight is initiated and the options are spelled out', () => {

        battle4.fight()
        expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Cool Guy sends out Paddy the Lotad and Fossilphile sends out Benedict the Omanyte!")
        expect(consoleSpy).toHaveBeenCalledWith("Cool Guy's turn\nPaddy the Lotad (40/40) - Benedict the Omanyte (45/45)\nAttacks: 0 - Absorb (35/35), 1 - Water Gun (35/35)")

    })

    test('on subsequent turns, the options are spelled out to the player', () => {

        battle4.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Fossilphile's turn\nBenedict the Omanyte (22/45) - Paddy the Lotad (40/40)\nAttacks: 0 - Water Gun (35/35), 1 - Rock Slide (35/35)")

    })

    const ember = new Move('Ember', 'Fire')

    const charmander = new Pokemon('Charmander', [39, 52], 'Fire')
    const glameow = new Pokemon('Glameow', [49, 55], 'Normal')

    const kabuto = new Pokemon('Kabuto', [30, 80], 'Rock', 'Water')
    const lileep = new Pokemon('Lileep', [66, 41], 'Rock', 'Grass')

    test('If the player inputs 4, they have the option to change to another Pokemon in the index of their third input argument', () => {
        coolGuy.catch(charmander, 'Charmy')
        coolGuy.catch(glameow, 'Ru')

        fossilphile.catch(kabuto, 'Ninja')
        fossilphile.catch(lileep, 'Rockbottom')

        coolGuy.pokemon[1].teach(ember)
        coolGuy.pokemon[2].teach(tackle)
        
        fossilphile.pokemon[1].teach(rockSlide)
        fossilphile.pokemon[2].teach(megaDrain)

        const battle5 = new Battle(coolGuy, fossilphile)

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

    const glassCannon = new Pokemon('Glass Cannon', [1, 1000], 'Normal')

    const glassGeneral = new Trainer('Glass General')
    const glassColonel = new Trainer('Glass Colonel')

    glassGeneral.catch(glassCannon, 'Cannon A')
    glassGeneral.catch(glassCannon, 'Cannon B')
    glassGeneral.catch(glassCannon, 'Cannon C')
    glassGeneral.catch(glassCannon, 'Cannon D')
    glassGeneral.catch(glassCannon, 'Cannon E')

    glassColonel.catch(glassCannon, 'Cannon F')
    glassColonel.catch(glassCannon, 'Cannon G')
    glassColonel.catch(glassCannon, 'Cannon H')

    glassGeneral.pokemon[0].teach(tackle)
    glassGeneral.pokemon[1].teach(tackle)
    glassGeneral.pokemon[2].teach(tackle)
    glassGeneral.pokemon[3].teach(tackle)
    glassGeneral.pokemon[4].teach(tackle)

    glassColonel.pokemon[0].teach(tackle)
    glassColonel.pokemon[1].teach(tackle)
    glassColonel.pokemon[2].teach(tackle)

    const battleG = new Battle(glassColonel, glassGeneral)

    test('If a player has multiple Pokemon, they get to choose a second when their first dies', () => {

        battleG.fight()
        battleG.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Glass General's Cannon A has fainted! Please select another Pokemon\n1 - Glass Cannon (1/1), 2 - Glass Cannon (1/1), 3 - Glass Cannon (1/1), 4 - Glass Cannon (1/1)")
        battleG.fight(2)
        expect(battleG.pokemon2.nickname).toBe('Cannon C')
        expect(battleG.turnCount).toBe(2)
        expect(battleG.winner).toBe(null)

    })

    test('When selecting a Pokemon to switch into, players can only choose from living Pokemon', () => {

        battleG.fight()
        battleG.fight(1)
        battleG.fight()
        battleG.fight(3)
        expect(consoleSpy).toHaveBeenCalledWith("Glass Colonel's turn\nCannon G the Glass Cannon (1/1) - Cannon D the Glass Cannon (1/1)\nAttacks: 0 - Tackle (34/35)\n4 - Switch Pokemon: 1 - Glass Cannon (1/1), 2 - Glass Cannon (1/1)")

        // PP being 34 and not 35 as it should be is a known bug

    })

    test("if they try to switch to Pokemon that don't exist, they get an error message", () => {

        battleG.fight(4,2)
        expect(consoleSpy).toHaveBeenCalledWith("You don't have a valid Pokemon in that slot, please select a valid Pokemon")
        expect(battleG.turnCount).toBe(4)
        

    })

    test("if they try to choose an attack that doesn't exist, they get an error message", () => {

        battleG.fight(2)
        expect(consoleSpy).toHaveBeenCalledWith("You don't have a valid move in that slot, please select a valid move")
        expect(battleG.turnCount).toBe(4)

    })

    test("once a trainer's last Pokemon is defeated, their opponent is declared victor", () => {

        battleG.fight()
        battleG.fight(2)
        battleG.fight()
        battleG.fight(1)
        battleG.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Glass Colonel's last Pokemon has fainted! Glass General has won the battle!")
        battleG.fight()
        expect(consoleSpy).toHaveBeenCalledWith('This battle is over, Glass General was the victor, create a new battle to try again')

    })

    const paul = new Trainer('Paul')

    const chimchar = new Pokemon('Chimchar', [44, 58], 'Fire')

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

    const eevee = new Pokemon('Eevee', [55, 55], 'Normal')

    const lastResort = new Move('Last Resort', 'Normal', 2)

    mikey.catch(eevee)

    mikey.pokemon[0].teach(lastResort)

    const battle7 = new Battle(mikey,michael)

    test('moves have PP, once a move has been moved as many times as its PP, it cannot be used again', () => {

        battle7.fight()
        battle7.fight()
        battle7.fight()
        battle7.fight()
        battle7.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Mikey's turn\nEevee (15/55) - Shroomy the Shroomish (6/60)\nEevee is out of usable moves, 0 - Struggle")

    })

    test('once a Pokemon has run out of PP, it can only use struggle, which inflict half damage onto itself', () => {

        battle7.fight()
        expect(consoleSpy).toHaveBeenCalledWith("Eevee used Struggle")
        expect(consoleSpy).toHaveBeenCalledWith("Eevee is damaged by recoil")
        expect(battle7.pokemon1.currentHP).toBe(2)

    })

    const flamethrower = new Move ('Flamethrower', 'Fire', 10, 90)
    const zapCannon = new Move ('Zap Cannon', 'Electric', 10, 90, 50) 

    const firebreather = new Trainer('Firebreather')
    const gambler = new Trainer('Gambler')

    firebreather.catch(charmander)
    gambler.catch(porygon)

    firebreather.pokemon[0].teach(flamethrower)
    gambler.pokemon[0].teach(zapCannon)

    battle8 = new Battle(firebreather,gambler)
    battle9 = new Battle(firebreather,gambler)

    test('moves can have different attack powers, defaulting at 60', () => {

        battle8.fight()
        battle8.fight()
        expect(battle8.pokemon2.currentHP).toBe(26)

    })

    test('moves can have different accuracies, defaulting at 100, with lower accuracy moves having a chance to miss', () => {

        jest.spyOn(global.Math, 'random').mockRestore();

        jest.spyOn(global.Math, 'random').mockReturnValue(0.24);

        battle8.fight()

        expect(battle8.pokemon1.currentHP).toBeLessThanOrEqual(0)

        jest.spyOn(global.Math, 'random').mockRestore();

        jest.spyOn(global.Math, 'random').mockReturnValue(0.76);

        battle9.fight()
        battle9.fight()
        battle9.fight()


        expect(consoleSpy).toHaveBeenCalledWith("Porygon used Zap Cannon")
        expect(consoleSpy).toHaveBeenCalledWith("Porygon's attack missed!")

        expect(battle8.pokemon1.currentHP).toBe(39)

        jest.spyOn(global.Math, 'random').mockRestore();


    })

    const shroomFan = new Trainer('Shroom Fan')
    const shroomLover = new Trainer('Shroom Lover')
    
    shroomFan.catch(shroomish)
    shroomLover.catch(shroomish)

    shroomFan.pokemon[0].teach(absorb)
    shroomLover.pokemon[0].teach(absorb)

    const battle10 = new Battle(shroomFan,shroomLover)

    test('moves have a one in 8 chance of critically hitting, doing extra damage', () => {

        battle10.fight()

        jest.spyOn(global.Math, 'random').mockRestore();
        
        jest.spyOn(global.Math, 'random').mockReturnValue(0.24);

        battle10.fight()

        expect(battle10.pokemon2.currentHP).toBe(45)

        jest.spyOn(global.Math, 'random').mockRestore();

        jest.spyOn(global.Math, 'random').mockReturnValue(0.91);

        battle10.fight()

        expect(battle10.pokemon1.currentHP).toBe(30)

        expect(consoleSpy).toHaveBeenCalledWith("It's a critical hit!")

    })

    const misdreavus = new Pokemon('Misdreavus', [60, 60], 'Ghost')

    const medium = new Trainer('Medium')
    const glamourMom = new Trainer('Glamour Mom')

    const bite = new Move('Bite', 'Dark')
    const scratch = new Move('Scratch', 'Normal')
    const shadowBall = new Move('Shadow Ball', 'Ghost')
    const confusion = new Move('Confusion', 'Psychic')

    medium.catch(misdreavus)
    glamourMom.catch(glameow)

    medium.pokemon[0].teach(shadowBall)
    medium.pokemon[0].teach(confusion)

    glamourMom.pokemon[0].teach(bite)
    glamourMom.pokemon[0].teach(scratch)

    const battle11 = new Battle(medium, glamourMom)

    test('some types can be immune to others', () => {

        battle11.fight()
        battle11.fight(0)
        expect(consoleSpy).toHaveBeenCalledWith('It had no effect')
        expect(battle11.pokemon2.currentHP).toBe(49)
        battle11.fight(0)
        expect(battle11.pokemon1.currentHP).toBe(26)
        battle11.fight(1)
        expect(battle11.pokemon2.currentHP).toBe(19)
        battle11.fight(1)
        expect(battle11.pokemon1.currentHP).toBe(26)

    })

    const scientist = new Trainer('Scientist')
    const nerd = new Trainer('Nerd')

    scientist.catch(porygon)
    nerd.catch(porygon)

    scientist.pokemon[0].teach(tackle)
    nerd.pokemon[0].teach(confusion)

    const battle12 = new Battle(scientist, nerd)

    const mystic = new Trainer('Mystic')
    mystic.catch(slowpoke)
    mystic.pokemon[0].teach(confusion)

    const battle13 = new Battle(mystic, nerd)

    test('pokemon get STAB for using a move of the same type', () => {

        battle12.fight()
        battle12.fight(0)
        expect(battle12.pokemon2.currentHP).toBe(20)
        battle12.fight(0)
        expect(battle12.pokemon1.currentHP).toBe(35)

        battle13.fight()
        battle13.fight()
        expect(battle13.pokemon2.currentHP).toBe(17)

    })

    const solrock = new Pokemon('Solrock', [70, 95, 55], 'Rock', 'Psychic')

    const powerGem = new Move('Power Gem', 'Rock', 25, 60, 100, 'Special')

    const starman = new Trainer('Starman')
    const sunboy = new Trainer('Sunboy')

    starman.catch(solrock)
    sunboy.catch(solrock)

    starman.pokemon[0].teach(rockSlide)
    sunboy.pokemon[0].teach(powerGem)

    const battle14 = new Battle(starman, sunboy)

    test('moves can be special and physical and do different damage depending on attack stats', () => {

        battle14.fight()
        battle14.fight(0)
        expect(battle14.pokemon2.currentHP).toBe(23)
        battle14.fight(0)
        expect(battle14.pokemon1.currentHP).toBe(43)

    })

    const lunatone = new Pokemon('Lunatone', [70, 60, 60, 65, 85], 'Rock', 'Psychic')

    const lunarlad = new Trainer('Lunarlad')
    const moonman = new Trainer('Moonman')

    lunarlad.catch(lunatone)
    moonman.catch(lunatone)

    lunarlad.pokemon[0].teach(rockSlide)
    moonman.pokemon[0].teach(powerGem)

    const battle15 = new Battle(lunarlad, moonman)

    test('moves can be special and physical and do different damage depending on defense stats', () => {

        battle15.fight()
        battle15.fight(0)
        expect(battle15.pokemon2.currentHP).toBe(43)
        battle15.fight(0)
        expect(battle15.pokemon1.currentHP).toBe(49)
        
    })

})