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

beforeEach(function () {

    consoleSpy = jest.spyOn(console, 'log')

    jest.spyOn(global.Math, 'random').mockReturnValue(0.1)

})

afterEach(function () {

    consoleSpy.mockRestore()

    jest.spyOn(global.Math, 'random').mockRestore()

})

describe('Super advanced tests', () => {

    describe('Testing basic stat change functionality', () => {

        test('Stat changing moves can be used to raise stats by one level', () => {

            tD.battleSM1.fight()
            tD.battleSM1.fight(3)
            expect(tD.battleSM1.pokemon2.currentHP).toBe(253)
            tD.battleSM1.fight(2)
            tD.battleSM1.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Special Attack increased")
            tD.battleSM1.fight(2)
            tD.battleSM1.fight(3)
            expect(tD.battleSM1.pokemon2.currentHP).toBe(230)

            tD.battleSM2.fight()
            tD.battleSM2.fight(2)
            expect(tD.battleSM2.pokemon2.currentHP).toBe(265)
            tD.battleSM2.fight(2)
            tD.battleSM2.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack increased")
            tD.battleSM2.fight(2)
            tD.battleSM2.fight(2)
            expect(tD.battleSM2.pokemon2.currentHP).toBe(219)

            tD.battleSM3.fight()
            tD.battleSM3.fight(3)
            expect(tD.battleSM3.pokemon2.currentHP).toBe(274)
            tD.battleSM3.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Special Defense increased")
            tD.battleSM3.fight(3)
            expect(tD.battleSM3.pokemon2.currentHP).toBe(260)

            tD.battleSM4.fight()
            tD.battleSM4.fight(2)
            expect(tD.battleSM4.pokemon2.currentHP).toBe(249)
            tD.battleSM4.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Defense increased")
            tD.battleSM4.fight(2)
            expect(tD.battleSM4.pokemon2.currentHP).toBe(237)

        })

        test('Stat changing moves can be used to lower stats by one level', () => {

            tD.battleSM5.fight()
            tD.battleSM5.fight(2)
            expect(tD.battleSM5.pokemon2.currentHP).toBe(274)
            tD.battleSM5.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Special Attack decreased")
            tD.battleSM5.fight(2)
            expect(tD.battleSM5.pokemon2.currentHP).toBe(260)

            tD.battleSM6.fight()
            tD.battleSM6.fight(1)
            expect(tD.battleSM6.pokemon2.currentHP).toBe(265)
            tD.battleSM6.fight(1)
            tD.battleSM6.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Defense decreased")
            tD.battleSM6.fight(1)
            tD.battleSM6.fight(1)
            expect(tD.battleSM6.pokemon2.currentHP).toBe(219)
            
        })

        test('There are six different levels of stat modification', () => {

            tD.battleSM7.fight()
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(274)
            tD.battleSM7.fight(0)
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(260)
            tD.battleSM7.fight(0)
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(250)
            tD.battleSM7.fight(0)
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(242)
            tD.battleSM7.fight(0)
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(235)
            tD.battleSM7.fight(0)
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(229)
            tD.battleSM7.fight(0)
            tD.battleSM7.fight(2)
            expect(tD.battleSM7.pokemon2.currentHP).toBe(224)

        })

        test('Stat changes on each Pokemon are taken into account', () => {

            tD.battleSM8.fight()
            tD.battleSM8.fight(0)
            tD.battleSM8.fight(0)
            tD.battleSM8.fight(3)
            tD.battleSM8.fight(2)
            expect(tD.battleSM8.pokemon1.currentHP).toBe(285)

        })

    })

    describe('Testing advanced stat change functionality', () => {

        test('Stat changing moves can be used to raise stats by multiple levels', () => {

            tD.battleSM9.fight()
            tD.battleSM9.fight(2)
            expect(tD.battleSM9.pokemon2.currentHP).toBe(265)
            tD.battleSM9.fight(0)
            tD.battleSM9.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack sharply increased")
            tD.battleSM9.fight(0)
            tD.battleSM9.fight(2)
            expect(tD.battleSM9.pokemon2.currentHP).toBe(204)

            tD.battleSM10.fight()
            tD.battleSM10.fight(3)
            expect(tD.battleSM10.pokemon2.currentHP).toBe(274)
            tD.battleSM10.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Special Defense sharply increased")
            tD.battleSM10.fight(3)
            expect(tD.battleSM10.pokemon2.currentHP).toBe(264)
            
        })

        test('Stats cannot be increased by more than six levels', () => {

            tD.battleSM11.fight()
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack cannot go any higher")
            tD.battleSM11.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Special Defense cannot go any higher")
            tD.battleSM11.fight(3)
            expect(tD.battleSM11.pokemon2.currentHP).toBe(290)
            tD.battleSM11.fight(0)
            tD.battleSM11.fight(2)
            expect(tD.battleSM11.pokemon2.currentHP).toBe(167)
            
        })

        test('Stat changing moves can be used to raise multiple stats at once', () => {

            tD.battleSM12.fight()
            tD.battleSM12.fight(3)
            tD.battleSM12.fight(2)
            tD.battleSM12.fight(2)
            expect(tD.battleSM12.pokemon2.currentHP).toBe(259)
            tD.battleSM12.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Defense increased")
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Special Defense increased")
            tD.battleSM12.fight(2)
            tD.battleSM12.fight(2)
            tD.battleSM12.fight(3)
            expect(tD.battleSM12.pokemon2.currentHP).toBe(233)

            tD.battleSM13.fight()
            tD.battleSM13.fight(2)
            tD.battleSM13.fight(1)
            tD.battleSM13.fight(3)
            expect(tD.battleSM13.pokemon2.currentHP).toBe(244)
            tD.battleSM13.fight(1)
            tD.battleSM13.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack increased")
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Special Attack increased")
            tD.battleSM13.fight(1)
            tD.battleSM13.fight(2)
            tD.battleSM13.fight(1)
            tD.battleSM13.fight(3)
            expect(tD.battleSM13.pokemon2.currentHP).toBe(167)
            
        })

        test('Stat changing moves can be used to lower multiple stats at once, or lower a stat by multiple stage', () => {

            tD.battleSM14.fight()
            tD.battleSM14.fight(3)
            tD.battleSM14.fight(2)
            tD.battleSM14.fight(2)
            expect(tD.battleSM14.pokemon2.currentHP).toBe(259)
            tD.battleSM14.fight(3)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack decreased")
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Special Attack decreased")
            tD.battleSM14.fight(2)
            tD.battleSM14.fight(2)
            tD.battleSM14.fight(3)
            expect(tD.battleSM14.pokemon2.currentHP).toBe(233)

            tD.battleSM15.fight()
            tD.battleSM15.fight(2)
            expect(tD.battleSM15.pokemon2.currentHP).toBe(265)
            tD.battleSM15.fight(2)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack sharply decreased")
            tD.battleSM15.fight(2)
            expect(tD.battleSM15.pokemon2.currentHP).toBe(250)
            
        })


        
    })

    describe('Testing stat change functionality on damaging move', () => {

        test('Moves can increase a stat while doing damage', () => {

            tD.battleSM16.fight()
            tD.battleSM16.fight(0)
            expect(tD.battleSM16.pokemon2.currentHP).toBe(265)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack increased")
            tD.battleSM16.fight(1)
            tD.battleSM16.fight(0)
            expect(tD.battleSM16.pokemon2.currentHP).toBe(219)
            
        })

        test('Moves can have a chance to increase a stat while doing damage', () => {

            tD.battleSM17.fight()
            tD.battleSM17.fight(1)
            expect(tD.battleSM17.pokemon2.currentHP).toBe(270)
            tD.battleSM17.fight(1)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.1).mockReturnValue(0.95)

            tD.battleSM17.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Attack increased")
            expect(tD.battleSM17.pokemon2.currentHP).toBe(245)
            tD.battleSM17.fight(1)
            tD.battleSM17.fight(1)
            expect(tD.battleSM17.pokemon2.currentHP).toBe(207)
            
        })

        test('Moves can have a chance to decrease a stat while doing damage', () => {

            tD.battleSM18.fight()
            tD.battleSM18.fight(2)
            expect(tD.battleSM18.pokemon2.currentHP).toBe(257)
            tD.battleSM18.fight(1)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.1).mockReturnValue(0.95)

            tD.battleSM18.fight(2)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Defense decreased")
            expect(tD.battleSM18.pokemon2.currentHP).toBe(219)
            tD.battleSM18.fight(1)
            tD.battleSM18.fight(2)
            expect(tD.battleSM18.pokemon2.currentHP).toBe(162)

        })
        
    })

    describe('Testing special case stat-changing moves', () => {

        test('Moves can have a chance to raise all the users stats', () => {

            tD.battleSM19.fight(0)
            expect(tD.battleSM19.pokemon1.statModifications).toEqual([0, 0, 0, 0])
            tD.battleSM19.fight(0)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.1).mockReturnValue(0.95)

            tD.battleSM19.fight(0)
            expect(tD.battleSM19.pokemon1.statModifications).toEqual([1, 1, 1, 1])
            
        })

        test('Moves can eradicate all stat changes', () => {

            expect(tD.battleSM20.pokemon1.statModifications).toEqual([0, 0, 0, 0])
            expect(tD.battleSM20.pokemon2.statModifications).toEqual([0, 0, 0, 0])
            tD.battleSM20.fight(0)
            tD.battleSM20.fight(2)
            expect(tD.battleSM20.pokemon2.statModifications).toEqual([0, 1, 0, 0])
            tD.battleSM20.fight(1)
            expect(tD.battleSM19.pokemon1.statModifications).toEqual([0, 0, 1, 3])
            tD.battleSM20.fight(1)
            expect(tD.battleSM20.pokemon1.statModifications).toEqual([0, 0, 0, 0])
            expect(tD.battleSM20.pokemon2.statModifications).toEqual([0, 0, 0, 0])
            
        })

    })

    describe('Testing accuracy/evasion changing moves', () => {

        test("Moves can decrease an opponent's accuracy", () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.8)

            tD.battleSM21.fight()
            tD.battleSM21.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's Accuracy decreased")
            tD.battleSM21.fight(3)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's attack missed")
            expect(tD.battleSM21.pokemon1.currentHP).toBe(295)
            
        })

        test("Moves can increase a Pokemon's evasiveness", () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.8)

            tD.battleSM22.fight()
            tD.battleSM22.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;254;199;211m\x1b[48;2;165;110;117m\x1b[1mClefable\x1b[0m's Evasiveness increased")
            tD.battleSM22.fight(3)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;224;120;75m\x1b[48;2;171;67;94m\x1b[1mGallade\x1b[0m's attack missed")
            expect(tD.battleSM22.pokemon1.currentHP).toBe(295)
            
        })

        test("Moves can decrease a Pokemon's evasiveness", () => {

            tD.battleSM23.fight()
            tD.battleSM23.fight(1)
            tD.battleSM23.fight(0)
            tD.battleSM23.fight(0)
            tD.battleSM23.fight(0)
            tD.battleSM23.fight(2)
            tD.battleSM23.fight(3)
            expect(tD.battleSM23.pokemon1.currentHP).toBe(265)
            
        })

        test("Moves can affect accuracy while have other effects", () => {

            tD.battleSM24.fight()
            tD.battleSM24.fight(0)
            tD.battleSM24.fight(1)
            tD.battleSM24.fight(2)
            tD.battleSM24.fight(3)
            expect(tD.battleSM24.pokemon1.currentHP).toBe(249)
            
        })

        test("Moves can bypass accuracy checks", () => {

            tD.battleSM25.fight()
            tD.battleSM25.fight(0)
            tD.battleSM25.fight(3)
            expect(tD.battleSM25.pokemon1.currentHP).toBe(295)
            tD.battleSM25.fight(0)
            tD.battleSM25.fight(2)
            expect(tD.battleSM25.pokemon1.currentHP).toBe(265)
            
        })
        
    })
    
})