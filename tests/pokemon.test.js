const { Pokemon } = require('../classes/Pokemon')
const { Move } = require('../classes/Move')
const { Trainer } = require('../classes/Trainer')
const { Battle } = require('../classes/Battle')

const tD = require('./testData')

describe('Pokemon', () => {

    beforeEach(function () {

        consoleSpy = jest.spyOn(console, 'log')

        jest.spyOn(global.Math, 'random').mockReturnValue(0.1)

    })
    
    afterEach(function () {

        consoleSpy.mockRestore()

        jest.spyOn(global.Math, 'random').mockRestore()

    })

    describe('Constructor suite', () => {

        test('Pokemon constructor can be used to create Pokemon with given name, HP, attack, type and move', () => {

            expect(tD.shroomish.name).toBe('Shroomish')
            expect(tD.shroomish.hp).toBe(60)
            expect(tD.shroomish.attack).toBe(40)
            expect(tD.shroomish.type1).toBe('Grass')

        }) 

        test('Pokemon prototype has makeSound method that Pokemon made with the Pokemon constructor can use', () => {

            expect(tD.shroomish.makeSound()).toBe('\x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mShro... Shroomish!\x1b[0m')

        })

        test('Trainer constructor can be used to create a trainer with a given name and a way of storing Pokemon', () => {

            expect(tD.michael.name).toBe('Michael')

        })

        test("No more than 6 Pokemon can be a trainer's party", () => {

            tD.michael.catch(tD.slowpoke)
            expect(tD.michael.pokemon.length).toBe(6)

        })

        test('Move constructor can be used to create a move with a given name and type', () => {

            expect(tD.absorb.name).toBe('Absorb')
            expect(tD.absorb.type).toBe('Grass')

        })

        test('Can use teach method to add move to Pokemon', () => {

            tD.michael.pokemon[0].teach(tD.absorb)
            expect(tD.michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass', pp: 35, power: 60, accuracy: 100, category: 'Physical', effects: []}])
            tD.michael.pokemon[0].teach(tD.tackle)
            expect(tD.michael.pokemon[0].moves).toEqual([{name:'Absorb',type:'Grass', pp: 35, power: 60, accuracy: 100, category: 'Physical', effects: []}, {name:'Tackle',type:'Normal', pp: 35, power: 60, accuracy: 100, category: 'Physical', effects: []}])

        })

        test('No more than 4 moves can be taught', () => {

            tD.michael.pokemon[0].teach(tD.seedBomb)
            tD.michael.pokemon[0].teach(tD.headbutt)
            tD.michael.pokemon[0].teach(tD.megaDrain)
            expect(tD.michael.pokemon[0].moves.length).toBe(4)
            
        })

        test('Battle constructor can be used to create a battle with the two trainers and Pokemon as properties', () => {

            expect(tD.battle1.trainer1).toBe(tD.michael)
            expect(tD.battle1.trainer2).toBe(tD.evilMichael)
            expect(tD.battle1.pokemon1.species).toBe(tD.shroomish)
            expect(tD.battle1.pokemon2.species).toBe(tD.slowpoke)

        })
    
    })


    describe('Michael v Evil Michael suite', () => {

        test('Both Pokemon start the battle at full health', () => {

            expect(tD.battle1.pokemon1.currentHP).toBe(tD.shroomish.hp)
            expect(tD.battle1.pokemon2.currentHP).toBe(tD.slowpoke.hp)

        })

        test("The first time the fight method is called, trainer 2's Pokemon experiences a commensurate loss in HP, taking into account type effectiveness, and the appropriate messages are displayed", () => {
        
            tD.battle1.fight()
            tD.battle1.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mShroomy the Shroomish\x1b[0m used \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mAbsorb\x1b[0m")
            expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
            expect(tD.battle1.pokemon2.currentHP).toBe(66)
            

        })

        test("The second time the fight method is called, it is now trainer 1's Pokemon being damaged and the appropriate messages are displayed, pokemon 2 retains its damage from the previous turn", () => {
            
            tD.battle1.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;255;156;188m\x1b[48;2;78;104;166m\x1b[1mPokester the Slowpoke\x1b[0m used \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m")
            expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
            expect(tD.battle1.pokemon2.currentHP).toBe(66)
            expect(tD.battle1.pokemon1.currentHP).toBe(36)

        })

        test("The third time the fight method is called, trainer 1 moves again", () => {

            tD.battle1.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mShroomy the Shroomish\x1b[0m used \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mAbsorb\x1b[0m")
            expect(consoleSpy).toHaveBeenCalledWith("It's super effective!")
            expect(tD.battle1.pokemon2.currentHP).toBe(42)
            

        })

        test("Once one Pokemon has been reduced to zero HP, it is declared dead", () => {

            tD.battle1.fight(0, -1, 0)
            tD.battle1.fight(0, -1, 0)
            tD.battle1.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;255;156;188m\x1b[48;2;78;104;166m\x1b[1mPokester the Slowpoke\x1b[0m used \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m")
            expect(consoleSpy).toHaveBeenCalledWith("It's not very effective")
            expect(consoleSpy).toHaveBeenCalledWith("Michael's \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mShroomy the Shroomish\x1b[0m has fainted! Please select another Pokemon\n1 - \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mSlugma\x1b[0m (40/40), 2 - \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mPsyduck\x1b[0m (50/50), 3 - \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mSnivy\x1b[0m (45/45), 4 - \x1b[38;2;0;0;0m\x1b[48;2;176;83;31m\x1b[1mHoundour\x1b[0m (45/45), 5 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mPorygon\x1b[0m (65/65)")

        })

        test('If the fight method is declared on a battle has been won, it returns with a message saying the battle is over and who won the battle', () => {

            tD.battle1.fight(5, -1, 0)
            tD.battle1.fight(0, -1, 0)
            tD.battle1.fight(0, -1, 0)
            tD.battle1.fight(0, -1, 0)
            tD.battle1.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("Evil Michael's last Pokemon has fainted! Michael has won the battle!")
            expect(consoleSpy).toHaveBeenCalledWith("This battle is over, Michael was the victor, create a new battle to try again")
            
        })

    })

    describe('Cool Guy v Fossilphile suite', () => {
    
        test('Fight method takes a number as a method that allows for the selection of moves', () => {

            tD.battle2.fight()
            tD.battle2.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mPaddy the Lotad\x1b[0m used \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mAbsorb\x1b[0m')
            tD.battle2.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;219;203;135m\x1b[48;2;78;104;166m\x1b[1mBenedict the Omanyte\x1b[0m used \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m')
            tD.battle2.fight(1, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mPaddy the Lotad\x1b[0m used \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m')
            tD.battle2.fight(1, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;219;203;135m\x1b[48;2;78;104;166m\x1b[1mBenedict the Omanyte\x1b[0m used \x1b[38;2;219;203;135m\x1b[48;2;130;114;46m\x1b[1mRock Slide\x1b[0m')

        })

        test('If no number is given, defaults to the first move', () => {

            tD.battle2.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mPaddy the Lotad\x1b[0m used \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mAbsorb\x1b[0m')

        })

        test('For Pokemon with multiple types, both types are accounted for when doing damage calculations', () => {

            tD.battle3.fight()
            tD.battle3.fight(0, -1, 0)
            expect(tD.battle3.pokemon2.currentHP).toBe(22)
            tD.battle3.fight(0, -1, 0)
            expect(tD.battle3.pokemon1.currentHP).toBe(29)
            tD.battle3.fight(1, -1, 0)
            expect(tD.battle3.pokemon2.currentHP).toBe(8)

        })

        test('The first time the fight method is used for a battle, the fight is initiated and the options are spelled out', () => {

            tD.battle4.fight()
            expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Cool Guy sends out \x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mPaddy the Lotad\x1b[0m and Fossilphile sends out \x1b[38;2;219;203;135m\x1b[48;2;78;104;166m\x1b[1mBenedict the Omanyte\x1b[0m!")

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[4m\x1b[1mCool Guy's turn\x1b[0m\x1b[0m")

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mPaddy the Lotad\x1b[0m (40/40) - \x1b[38;2;219;203;135m\x1b[48;2;78;104;166m\x1b[1mBenedict the Omanyte\x1b[0m (45/45)")

            expect(consoleSpy).toHaveBeenCalledWith("Attacks: 0 - \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mAbsorb\x1b[0m (35/35), 1 - \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m (35/35)")

        })

        test('On subsequent turns, the options are spelled out to the player', () => {

            tD.battle4.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[4m\x1b[1mFossilphile's turn\x1b[0m\x1b[0m")

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;219;203;135m\x1b[48;2;78;104;166m\x1b[1mBenedict the Omanyte\x1b[0m (22/45) - \x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mPaddy the Lotad\x1b[0m (40/40)")

            expect(consoleSpy).toHaveBeenCalledWith("Attacks: 0 - \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m (35/35), 1 - \x1b[38;2;219;203;135m\x1b[48;2;130;114;46m\x1b[1mRock Slide\x1b[0m (35/35)")

        })

        test('If the player inputs 4, they have the option to change to another Pokemon in the index of their third input argument', () => {

            tD.coolGuy.catch(tD.charmander, 'Charmy')
            tD.coolGuy.catch(tD.glameow, 'Ru')

            tD.fossilphile.catch(tD.kabuto, 'Ninja')
            tD.fossilphile.catch(tD.lileep, 'Rockbottom')

            tD.coolGuy.pokemon[1].teach(tD.ember)
            tD.coolGuy.pokemon[2].teach(tD.tackle)
            
            tD.fossilphile.pokemon[1].teach(tD.rockSlide)
            tD.fossilphile.pokemon[2].teach(tD.megaDrain)

            tD.battle5.fight()
            tD.battle5.fight(4, 2, 0)
            expect(tD.battle5.pokemon1.species).toBe(tD.glameow)
            tD.battle5.fight(4, 1, 0)
            expect(tD.battle5.pokemon2.species).toBe(tD.kabuto)
            tD.battle5.fight(4, 0, 0)
            expect(tD.battle5.pokemon1.species).toBe(tD.lotad)
            tD.battle5.fight(4, 2, 0)
            expect(tD.battle5.pokemon2.species).toBe(tD.lileep)

        })

    })

    describe('Glass General v Glass Colonel suite', () => {

        test('If a player has multiple Pokemon, they get to choose a second when their first dies', () => {

            tD.battleG.fight()
            tD.battleG.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("Glass General's \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mCannon A the Glass Cannon\x1b[0m has fainted! Please select another Pokemon\n1 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mGlass Cannon\x1b[0m (1/1), 2 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mGlass Cannon\x1b[0m (1/1), 3 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mGlass Cannon\x1b[0m (1/1), 4 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mGlass Cannon\x1b[0m (1/1)")
            tD.battleG.fight(2, -1, 0)
            expect(tD.battleG.pokemon2.nickname).toBe('Cannon C')
            expect(tD.battleG.turnCount).toBe(2)
            expect(tD.battleG.winner).toBe(null)
    
        })
    
        test('When selecting a Pokemon to switch into, players can only choose from living Pokemon', () => {
    
            tD.battleG.fight(0, -1, 0)
            tD.battleG.fight(1, -1, 0)
            tD.battleG.fight(0, -1, 0)
            tD.battleG.fight(3, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[4m\x1b[1mGlass General's turn\x1b[0m\x1b[0m")

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mCannon D the Glass Cannon\x1b[0m (1/1) - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mCannon G the Glass Cannon\x1b[0m (1/1)")

            expect(consoleSpy).toHaveBeenCalledWith("4 - Switch Pokemon: 1 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mGlass Cannon\x1b[0m (1/1), 4 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mGlass Cannon\x1b[0m (1/1)")

        })
    
        test("If they try to switch to Pokemon that don't exist, they get an error message", () => {
    
            tD.battleG.fight(4, 2, 0)
            expect(consoleSpy).toHaveBeenCalledWith("You don't have a valid Pokemon in that slot, please select a valid Pokemon")
            expect(tD.battleG.turnCount).toBe(4)
            
        })
    
        test("If they try to choose an attack that doesn't exist, they get an error message", () => {
    
            tD.battleG.fight(2, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("You don't have a valid move in that slot, please select a valid move")
            expect(tD.battleG.turnCount).toBe(4)
    
        })
    
        test("Once a trainer's last Pokemon is defeated, their opponent is declared victor", () => {
    
            tD.battleG.fight(0, -1, 0)
            tD.battleG.fight(2, -1, 0)
            tD.battleG.fight(0, -1, 0)
            tD.battleG.fight(1, -1, 0)
            tD.battleG.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("Glass Colonel's last Pokemon has fainted! Glass General has won the battle!")
            tD.battleG.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('This battle is over, Glass General was the victor, create a new battle to try again')
    
        })

    })

    describe('Misc suite', () => {

        test('If no nickname is inputted, defaults to using species name', () => {

            tD.battle6.fight()
            expect(consoleSpy).toHaveBeenCalledWith("The battle begins! Michael sends out \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mShroomy the Shroomish\x1b[0m and Paul sends out \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mChimchar\x1b[0m!")
            tD.battle6.fight(0, -1, 0)
            tD.battle6.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mChimchar\x1b[0m used \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mEmber\x1b[0m')

        })

        test('Moves have PP, once a move has been moved as many times as its PP, it cannot be used again', () => {

            tD.battle7.fight()
            tD.battle7.fight(0, -1, 0)
            tD.battle7.fight(0, -1, 0)
            tD.battle7.fight(0, -1, 0)
            tD.battle7.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[4m\x1b[1mMikey's turn\x1b[0m\x1b[0m")

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mEevee\x1b[0m is out of usable moves, 0 - \x1b[1mStruggle\x1b[0m")

        })

        test('Once a Pokemon has run out of PP, it can only use struggle, which inflict half damage onto itself', () => {

            tD.battle7.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mEevee\x1b[0m used \x1b[1mStruggle\x1b[0m")
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mEevee\x1b[0m is damaged by recoil")
            expect(tD.battle7.pokemon1.currentHP).toBe(7)

        })

        test('Moves can have different attack powers, defaulting at 60', () => {

            tD.battle8.fight()
            tD.battle8.fight(0, -1, 0)
            expect(tD.battle8.pokemon2.currentHP).toBe(26)

        })

        test('Moves can have different accuracies, defaulting at 100, with lower accuracy moves having a chance to miss', () => {

            jest.spyOn(global.Math, 'random').mockRestore();

            jest.spyOn(global.Math, 'random').mockReturnValue(0.24);

            tD.battle8.fight(0, -1, 0)

            expect(tD.battle8.pokemon1.currentHP).toBeLessThanOrEqual(0)

            jest.spyOn(global.Math, 'random').mockRestore();

            jest.spyOn(global.Math, 'random').mockReturnValue(0.76);

            tD.battle9.fight()
            tD.battle9.fight(0, -1, 0)
            tD.battle9.fight(0, -1, 0)

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mPorygon\x1b[0m used \x1b[38;2;255;234;130m\x1b[48;2;171;145;31m\x1b[1mZap Cannon\x1b[0m")
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mPorygon\x1b[0m's attack missed!")

            expect(tD.battle8.pokemon1.currentHP).toBe(39)

            jest.spyOn(global.Math, 'random').mockRestore();


        })

        test('Moves have a one in 8 chance of critically hitting, doing extra damage', () => {

            tD.battle10.fight()

            jest.spyOn(global.Math, 'random').mockRestore();
            
            jest.spyOn(global.Math, 'random').mockReturnValue(0.24);

            tD.battle10.fight(0, -1, 0)

            expect(tD.battle10.pokemon2.currentHP).toBe(45)

            jest.spyOn(global.Math, 'random').mockRestore();

            jest.spyOn(global.Math, 'random').mockReturnValue(0.91);

            tD.battle10.fight(0, -1, 0)

            expect(tD.battle10.pokemon1.currentHP).toBe(30)

            expect(consoleSpy).toHaveBeenCalledWith("It's a critical hit!")

        })

        test('Some types can be immune to others', () => {

            tD.battle11.fight()
            tD.battle11.fight(0, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('It had no effect')
            expect(tD.battle11.pokemon2.currentHP).toBe(49)
            tD.battle11.fight(0, -1, 0)
            expect(tD.battle11.pokemon1.currentHP).toBe(26)
            tD.battle11.fight(1, -1, 0)
            expect(tD.battle11.pokemon2.currentHP).toBe(19)
            tD.battle11.fight(1, -1, 0)
            expect(tD.battle11.pokemon1.currentHP).toBe(26)

        })

        test('Pokemon get STAB for using a move of the same type', () => {

            tD.battle12.fight()
            tD.battle12.fight(0)
            expect(tD.battle12.pokemon2.currentHP).toBe(39)
            tD.battle12.fight(0)
            expect(tD.battle12.pokemon1.currentHP).toBe(47)

            tD.battle13.fight()
            tD.battle13.fight()
            expect(tD.battle13.pokemon2.currentHP).toBe(36)

        })

        test('Moves can be special and physical and do different damage depending on attack stats', () => {

            tD.battle14.fight()
            tD.battle14.fight(0, -1, 0)
            expect(tD.battle14.pokemon2.currentHP).toBe(23)
            tD.battle14.fight(0, -1, 0)
            expect(tD.battle14.pokemon1.currentHP).toBe(43)

        })

        test('Moves can be special and physical and do different damage depending on defense stats', () => {

            tD.battle15.fight()
            tD.battle15.fight(0, -1, 0)
            expect(tD.battle15.pokemon2.currentHP).toBe(43)
            tD.battle15.fight(0, -1, 0)
            expect(tD.battle15.pokemon1.currentHP).toBe(49)
            
        })

        test('Player can select 5 to see details of moves', () => {

            tD.battle16.fight()
            expect(consoleSpy).toHaveBeenCalledWith('5 - See Move Details')
            tD.battle16.fight(5, -1, 0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1m1 - Wing Attack - Flying - 60 Power - 100 Accuracy - Physical\x1b[0m')
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1m2 - Fire Blast - Fire - 120 Power - 75 Accuracy - Special\x1b[0m')
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1m3 - Slash - Normal - 70 Power - 100 Accuracy - Physical\x1b[0m')
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;245;224;167m\x1b[48;2;156;135;78m\x1b[1m4 - Earthquake - Ground - 100 Power - 100 Accuracy - Physical\x1b[0m')
            expect(tD.battle16.turnCount).toBe(1)

        })

    })

})