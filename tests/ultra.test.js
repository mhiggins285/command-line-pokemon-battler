const { Pokemon } = require('../classes/Pokemon')
const { Move } = require('../classes/Move')
const { Trainer } = require('../classes/Trainer')
const { Battle } = require('../classes/Battle')

const tD = require('./testData')


// \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mShro... Shroomish!\x1b[0m'

// \x1b[38;2;255;156;188m\x1b[48;2;78;104;166m\x1b[1mPokester!\x1b[0m'

// \x1b[38;2;167;193;255m\x1b[48;2;78;104;166m\x1b[1mWater Gun\x1b[0m'

// \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mSlugma\x1b[0m'

// \x1b[38;2;0;0;0m\x1b[48;2;176;83;31m\x1b[1mHoundour\x1b[0m'

// \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mPorygon\x1b[0m'

// \x1b[38;2;177;229;151m\x1b[48;2;78;104;166m\x1b[1mLotad\x1b[0m'

// \x1b[38;2;219;203;135m\x1b[48;2;78;104;166m\x1b[1mOmanyte\x1b[0m'

// \x1b[38;2;219;203;135m\x1b[48;2;130;114;46m\x1b[1mRock Slide\x1b[0m'

// \x1b[38;2;255;234;130m\x1b[48;2;171;145;31m\x1b[1mZap Cannon\x1b[0m'

// \x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mWing Attack\x1b[0m'

// \x1b[38;2;245;224;167m\x1b[48;2;156;135;78m\x1b[1mEarthquake\x1b[0m'

// \x1b[38;2;203;141;203m\x1b[48;2;114;52;114m\x1b[1mSludge Bomb\x1b[0m'

// \x1b[38;2;203;141;203m\x1b[48;2;88;140;62m\x1b[1mVenusaur\x1b[0m'

// \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m'

// \x1b[38;2;255;142;110m\x1b[48;2;135;41;36m\x1b[1mFainted\x1b[0m'

// \x1b[38;2;245;224;167m\x1b[48;2;130;114;46m\x1b[1mRhydon\x1b[0m'

// \x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m'

// \x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m'

// \x1b[38;2;203;141;203m\x1b[48;2;119;130;31m\x1b[1mBeedrill\x1b[0m 

beforeEach(function () {

    consoleSpy = jest.spyOn(console, 'log')

    jest.spyOn(global.Math, 'random').mockReturnValue(0.1)

})

afterEach(function () {

    consoleSpy.mockRestore()

    jest.spyOn(global.Math, 'random').mockRestore()

})

describe('Non-volatile status condition tests', () => {

    describe('Testing "Poisoned" functionality', () => {

        test("Moves can change user's status to poisoned", () => {

            tD.battleP1.fight()
            tD.battleP1.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m was poisoned")
            expect(tD.battleP1.pokemon2.status).toEqual({'poisoned': 'poisoned'})

        })

        test("Pokemon take damage from poison at the end of their turn", () => {

            tD.battleP2.fight()
            tD.battleP2.fight(0)
            tD.battleP2.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m was hurt by poison")
            expect(tD.battleP2.pokemon2.currentHP).toBe(58)

        })

        test("Battle procedes as normal if a Pokemon dies from poison", () => {

            tD.battleP3.fight()
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(2)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(0)
            tD.battleP3.fight(1)
            expect(tD.battleP3.pokemon2).toBe(tD.battleP3.trainer2.pokemon[1])

        })

        test("Damaging moves can have a chance to poison a Pokemon", () => {

            tD.battleP4.fight()
            tD.battleP4.fight(1)
            expect(tD.battleP4.pokemon2.status).toEqual({})
            tD.battleP4.fight(2)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.1).mockReturnValue(0.95)

            tD.battleP4.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m was poisoned")
            expect(tD.battleP4.pokemon2.status).toEqual({'poisoned': 'poisoned'})

        })

        test("Poison type Pokemon cannot be poisoned", () => {

            tD.battleP5.fight()
            tD.battleP5.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("It had no effect")
            expect(tD.battleP5.pokemon2.status).toEqual({})

        })

        test("Poison is displayed on the battle screen and the team screen", () => {

            tD.battleP6.fight()
            tD.battleP6.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m (62/62) \x1b[38;2;203;141;203m\x1b[48;2;114;52;114m\x1b[1mPSN\x1b[0m - \x1b[38;2;203;141;203m\x1b[48;2;119;130;31m\x1b[1mBeedrill\x1b[0m (65/65)")
            tD.battleP6.fight(6)
            expect(consoleSpy).toHaveBeenCalledWith('1 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mNormal\x1b[0m (62/62) \x1b[38;2;203;141;203m\x1b[48;2;114;52;114m\x1b[1mPSN\x1b[0m')

        })

        test('Status effect moves are affected by accuracy', () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.8)

            tD.battleP7.fight()
            tD.battleP7.fight(1)
            tD.battleP7.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;203;141;203m\x1b[48;2;119;130;31m\x1b[1mBeedrill\x1b[0m's attack missed!")
            expect(tD.battleP7.pokemon1.status).toEqual({})

        })

    })

    describe('Testing "Badly Poisoned" functionality', () => {

        test("Moves can change user's status to badly poisoned", () => {

            tD.battleP8.fight()
            tD.battleP8.fight(3)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m was badly poisoned")
            expect(tD.battleP8.pokemon2.status).toEqual({'badly poisoned': 1})

        })

        test("Pokemon take increasing damage from being badly poisoned at the end of their turn", () => {

            tD.battleP9.fight()
            tD.battleP9.fight(3)
            tD.battleP9.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m was hurt by poison")
            expect(tD.battleP9.pokemon2.currentHP).toBe(58)
            tD.battleP9.fight(3)
            expect(tD.battleP9.pokemon2.status).toEqual({'badly poisoned': 2})
            tD.battleP9.fight(0)
            expect(tD.battleP9.pokemon2.currentHP).toBe(50)
            tD.battleP9.fight(3)
            expect(tD.battleP9.pokemon2.status).toEqual({'badly poisoned': 3})
            tD.battleP9.fight(0)
            expect(tD.battleP9.pokemon2.currentHP).toBe(38)

        })

        test("If a Pokemon is switched out, their 'badly poisoned' status becomes 'poisoned'", () => {

            tD.battleP10.fight()
            tD.battleP10.fight(3)
            tD.battleP10.fight(4, 1)
            expect(tD.battleP10.trainer2.pokemon[0].status).toEqual({'poisoned': 'poisoned'})

        })

        test("Poison type Pokemon cannot be badly poisoned", () => {

            tD.battleP11.fight()
            tD.battleP11.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("It had no effect")
            expect(tD.battleP11.pokemon2.status).toEqual({})

        })

        test("'Badly Poisoned' is displayed on the battle screen and the team screen", () => {

            tD.battleP12.fight()
            tD.battleP12.fight(3)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m (62/62) \x1b[38;2;0;0;0m\x1b[48;2;114;52;114m\x1b[1mPSN\x1b[0m - \x1b[38;2;203;141;203m\x1b[48;2;119;130;31m\x1b[1mBeedrill\x1b[0m (65/65)")
            tD.battleP12.fight(6)
            expect(consoleSpy).toHaveBeenCalledWith('1 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mWhismur\x1b[0m - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mNormal\x1b[0m (62/62) \x1b[38;2;0;0;0m\x1b[48;2;114;52;114m\x1b[1mPSN\x1b[0m')

        })

    })

    describe('Testing "Paralysed" functionality', () => {

        test("Moves can change user's status to paralysed", () => {



        })

        test("Pokemon can have a chance to miss their turn if paralysed", () => {



        })

        test("Damaging moves can have a chance to paralyse a Pokemon", () => {



        })

        test("Electric type Pokemon cannot be paralysed", () => {



        })

        test("Paralysis is displayed on the battle screen and the team screen", () => {



        })

        test("Pokemon cannot be given a status condition if they already have another one", () => {



        })

    })

    describe('Testing "Burned" functionality', () => {

        test("Moves can change user's status to burned", () => {



        })

        test("Pokemon take damage from burn at the end of their turn", () => {



        })

        test("Pokemon's attack is reduced if they have a burn", () => {



        })

        test("Damaging moves can have a chance to burn a Pokemon", () => {



        })

        test("Fire type Pokemon cannot be burned", () => {



        })

        test("Burn is displayed on the battle screen and the team screen", () => {



        })

    })

    describe('Testing "Frozen" functionality', () => {

        test("Damaging moves can have a chance to freeze a Pokemon", () => {



        })

        test("Pokemon cannot move when frozen", () => {



        })

        test("Pokemon have a 20% chance to thaw out every turn", () => {



        })

        test("Ice type Pokemon cannot be frozen", () => {



        })

        test("Frozen is displayed on the battle screen and the team screen", () => {



        })

    })

    describe('Testing "Asleep" functionality', () => {

        test("Moves can change user's status to asleep", () => {



        })

        test("Pokemon cannot move when asleep", () => {



        })

        test("Sleep can last 1-5 turns", () => {



        })

        test("Switching out doesn't effect a Pokemon's sleep counter", () => {



        })

        test("Pokemon can attack on the turn they wake up", () => {



        })

        test("Sleep is displayed on the battle screen and the team screen", () => {



        })

    })

    describe('Testing particular status-effecting moves', () => {

        test("Heal Bell can cure all the status conditions of Pokemon on the user's team", () => {



        })

        test('Snore allows a Pokemon to attack when asleep', () => {


            
        })

        test('Snore fails when awake', () => {


            
        })

        test("Rest fully restores the user's health but puts it to sleep", () => {


            
        })

        test("Sleep from rest always lasts three turns", () => {


            
        })

        test("Rest cannot be used if a Pokemon has an existing status condition", () => {


            
        })

    })

})