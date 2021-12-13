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


    // \x1b[38;2;245;224;167m\x1b[48;2;130;114;46m\x1b[1mRhydon\x1b[0m
    

describe('Advanced tests', () => {

    beforeEach(function () {

        consoleSpy = jest.spyOn(console, 'log')

        jest.spyOn(global.Math, 'random').mockReturnValue(0.1)

    })
    
    afterEach(function () {

        consoleSpy.mockRestore()

        jest.spyOn(global.Math, 'random').mockRestore()

    })

    describe('Testing "Check Pokemon" functionality', () => {

        test('Option to check Pokemon appears correctly', () => {

            tD.battle17.fight()

            expect(consoleSpy).toHaveBeenCalledWith('6 - See Pokemon Details')

        })

        test('When selected, details of full party are shown correctly', () => {

            tD.battle17.fight(6)

            expect(consoleSpy).toHaveBeenCalledWith('1 - \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m - \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mFire\x1b[0m/\x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mFlying\x1b[0m (78/78)')

            expect(consoleSpy).toHaveBeenCalledWith('Attack - 84, Defense - 78, Special Attack - 109, Special Defense - 85')

            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mWing Attack\x1b[0m (35/35), \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mFire Blast\x1b[0m (15/15), \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mSlash\x1b[0m (20/20), \x1b[38;2;245;224;167m\x1b[48;2;156;135;78m\x1b[1mEarthquake\x1b[0m (5/5)')

            expect(consoleSpy).toHaveBeenCalledWith('2 - \x1b[38;2;203;141;203m\x1b[48;2;88;140;62m\x1b[1mVenusaur\x1b[0m - \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mGrass\x1b[0m/\x1b[38;2;203;141;203m\x1b[48;2;114;52;114m\x1b[1mPoison\x1b[0m (80/80)')

            expect(consoleSpy).toHaveBeenCalledWith('Attack - 82, Defense - 83, Special Attack - 100, Special Defense - 100')

            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;203;141;203m\x1b[48;2;114;52;114m\x1b[1mSludge Bomb\x1b[0m (10/10), \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mSolar Beam\x1b[0m (10/10), \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mHyper Beam\x1b[0m (5/5)')

            expect(consoleSpy).toHaveBeenCalledWith('3 - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mPorygon\x1b[0m - \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mNormal\x1b[0m (65/65)')


        })

        test('When a Pokemon has fainted, their HP displays in red on the Check Pokemon screen', () => {

            tD.battle17.fight(0)

            tD.battle17.fight(0)

            tD.battle17.fight(1)

            tD.battle17.fight(6)

            expect(consoleSpy).toHaveBeenCalledWith('1 - \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m - \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mFire\x1b[0m/\x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mFlying\x1b[0m \x1b[38;2;255;142;110m\x1b[48;2;135;41;36m\x1b[1m(0/78)\x1b[0m')

        })

    })

    describe('Testing "Charge/Recharge" Attacks', () => {

        test('When a charge attack is used, no damage is done on the first turn', () => {

            tD.battleC1.fight()
            tD.battleC1.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mSky Attack\x1b[0m is charging')
            expect(tD.battleC1.pokemon2.currentHP).toBe(80)

        })

        test("Trainer's next move is sacrificed and damage is done, it then reverts to being the opponent's turn", () => {

            tD.battleC1.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("Pyromaniac's \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m unleashed its \x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mSky Attack\x1b[0m")
            expect(tD.battleC1.pokemon2.currentHP).toBe(15)
            expect(tD.battleC1.turnCount % 2).toBe(0)

        })

        test("If charging Pokemon is killed, normal process resumes", () => {

            tD.battleC2.fight()
            tD.battleC2.fight(0)
            tD.battleC2.fight(0)
            tD.battleC2.fight(1)
            expect(tD.battleC2.pokemon1.species).toBe(tD.slugma)
            tD.battleC2.fight(0)
            expect(tD.battleC2.turnCount % 2).toBe(0)

        })

        test("On first turn of fly or dig, Pokemon is invulnerable", () => {

            tD.battleC3.fight()
            tD.battleC3.fight(2)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m flew up in the air")
            expect(tD.battleC3.pokemon2.currentHP).toBe(80)
            tD.battleC3.fight(0)
            expect(tD.battleC3.pokemon1.currentHP).toBe(78)
            expect(tD.battleC3.pokemon2.currentHP).toBe(54)

            tD.battleC4.fight()
            tD.battleC4.fight(3)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m dug underground")
            expect(tD.battleC4.pokemon2.currentHP).toBe(80)
            tD.battleC4.fight(0)
            expect(tD.battleC4.pokemon1.currentHP).toBe(78)
            expect(tD.battleC4.pokemon2.currentHP).toBe(54)

        })

        test("Certain moves can hit Pokemon using fly or dig for double damage", () => {

            tD.battleC5.fight()
            tD.battleC5.fight(2)
            tD.battleC5.fight(1)
            expect(tD.battleC5.pokemon1.currentHP).toBe(6)

            tD.battleC6.fight()
            tD.battleC6.fight(3)
            tD.battleC6.fight(2)
            expect(tD.battleC6.pokemon1.currentHP).toBe(6)

        })

        test("When a recharge move is used, the user sacrifices their next turn", () => {

            tD.battleC7.fight()
            tD.battleC7.fight(1)
            expect(tD.battleC7.pokemon2.currentHP).toBe(15)
            tD.battleC7.fight(1)
            expect(consoleSpy).toHaveBeenCalledWith("Pyromaniac's \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m needs to recharge")
            expect(tD.battleC7.turnCount % 2).toBe(0)
            tD.battleC7.fight(1)
            expect(tD.battleC7.pokemon1.currentHP).toBe(6)
            expect(tD.battleC7.turnCount % 2).toBe(1)

        })

        test("If recharging Pokemon is killed, normal process resumes", () => {

            tD.battleC8.fight()
            tD.battleC8.fight(1)
            tD.battleC8.fight(0)
            tD.battleC8.fight(1)
            expect(tD.battleC8.pokemon1.species).toBe(tD.slugma)
            tD.battleC8.fight(0)
            expect(tD.battleC8.turnCount % 2).toBe(0)

        })

    })

    describe('Testing "Recovery/Draining" Moves', () => {

        test('Recovery moves restore half of total HP', () => {

            tD.battleR1.fight()
            tD.battleR1.fight(0)
            tD.battleR1.fight(3)
            tD.battleR1.fight(0)
            tD.battleR1.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;255;156;188m\x1b[48;2;88;140;62m\x1b[1mCelebi\x1b[0m recovered health')
            expect(tD.battleR1.pokemon2.currentHP).toBe(82)

        })

        test('Recovery moves restore to max health when health is more than half full', () => {

            tD.battleR2.fight()
            tD.battleR2.fight(0)
            tD.battleR2.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;255;156;188m\x1b[48;2;88;140;62m\x1b[1mCelebi\x1b[0m recovered health')
            expect(tD.battleR2.pokemon2.currentHP).toBe(100)
            
        })

        test('Recovery moves fail when used with max health', () => {

            tD.battleR3.fight()
            tD.battleR3.fight(0)
            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;255;156;188m\x1b[48;2;88;140;62m\x1b[1mCelebi\x1b[0m is already at full health - move failed')
            expect(tD.battleR3.pokemon1.currentHP).toBe(100)

        })

        test('Draining moves recover half the damage dealt', () => {

            tD.battleR4.fight()
            tD.battleR4.fight(0)
            tD.battleR4.fight(1)
            expect(tD.battleR4.pokemon1.currentHP).toBe(48)
            expect(tD.battleR4.pokemon2.currentHP).toBe(79)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;255;156;188m\x1b[48;2;88;140;62m\x1b[1mCelebi\x1b[0m drained some of \x1b[38;2;219;203;135m\x1b[48;2;130;114;46m\x1b[1mLycanroc\x1b[0m's health")
            
        })

        test('Draining moves recover to max health when recovery would have increased above max HP', () => {

            tD.battleR5.fight()
            tD.battleR5.fight(1)
            tD.battleR5.fight(1)
            expect(tD.battleR5.pokemon1.currentHP).toBe(48)
            expect(tD.battleR5.pokemon2.currentHP).toBe(100)
            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;255;156;188m\x1b[48;2;88;140;62m\x1b[1mCelebi\x1b[0m drained some of \x1b[38;2;219;203;135m\x1b[48;2;130;114;46m\x1b[1mLycanroc\x1b[0m's health")
            
        })

        test('Amount of HP drained scales with other factors', () => {

            tD.battleR6.fight()
            tD.battleR6.fight(0)
            tD.battleR6.fight(3)
            tD.battleR6.fight(0)
            tD.battleR6.fight(2)
            expect(tD.battleR6.pokemon1.currentHP).toBe(24)
            expect(tD.battleR6.pokemon2.currentHP).toBe(57)
            
        })

    })

    describe('Testing "High-Crit Ratio" moves', () => {

        test('Moves with a high critical hit ratio produce critical hits for critical check ratios for which standard moves do not', () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.8)

            tD.battleCrit1.fight()
            tD.battleCrit1.fight(1)

            expect(consoleSpy).toHaveBeenCalledWith("It's a critical hit!")
            expect(tD.battleCrit1.pokemon2.currentHP).toBe(17)

            tD.battleCrit2.fight()
            tD.battleCrit2.fight(0)

            expect(tD.battleCrit2.pokemon2.currentHP).toBe(49)

        })

    })

    describe('Testing "Set Damage" moves', () => {

        test('Moves with set damage always do the same amount of damage', () => {

            tD.battleF1.fight()
            tD.battleF1.fight(0)
            expect(tD.battleF1.pokemon2.currentHP).toBe(38)
            tD.battleF1.fight(0)
            expect(tD.battleF1.pokemon1.currentHP).toBe(51)
            
        })

        test("Moves don't work if opponent has type immunity", () => {

            tD.battleF2.fight()
            tD.battleF2.fight(0)
            expect(tD.battleF2.pokemon2.currentHP).toBe(78)
            expect(consoleSpy).toHaveBeenCalledWith('It had no effect')
            
        })

    })

    describe('Testing "Multi-Hit" moves', () => {

        test('Standard multi-hit moves can hit between two and five times', () => {

            tD.battleM1.fight()
            tD.battleM1.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 2 times')
            expect(tD.battleM1.pokemon2.currentHP).toBe(97)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.2)

            tD.battleM2.fight()
            tD.battleM2.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 3 times')
            expect(tD.battleM2.pokemon2.currentHP).toBe(93)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

            tD.battleM3.fight()
            tD.battleM3.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 4 times')
            expect(tD.battleM3.pokemon2.currentHP).toBe(89)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValue(0.86)

            tD.battleM4.fight()
            tD.battleM4.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 5 times')
            expect(tD.battleM4.pokemon2.currentHP).toBe(85)

        })

        test('Standard multi-hit moves can miss altogether', () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.9)

            tD.battleM5.fight()
            tD.battleM5.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith("\x1b[38;2;245;224;167m\x1b[48;2;130;114;46m\x1b[1mRhydon\x1b[0m's attack missed!")
            expect(tD.battleM5.pokemon2.currentHP).toBe(105)
            
        })

        test('Criticals on multi-hit moves are treated separately for each hit', () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.6).mockReturnValueOnce(0.6).mockReturnValueOnce(0.9).mockReturnValue(0.6)

            tD.battleM6.fight()
            tD.battleM6.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 4 times')
            expect(consoleSpy).toHaveBeenCalledWith("It's a critical hit!")
            expect(tD.battleM6.pokemon2.currentHP).toBe(85)
            
        })

        test('Some multi-hit moves alway hit a specific number of times', () => {

            tD.battleM7.fight()
            tD.battleM7.fight(1)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 2 times')
            expect(tD.battleM7.pokemon2.currentHP).toBe(81)

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

            tD.battleM8.fight()
            tD.battleM8.fight(1)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 2 times')
            expect(tD.battleM8.pokemon2.currentHP).toBe(81)
            
        })

        test('Multi-hit moves cannot hit more times than is neccesary to kill the Pokemon', () => {

            jest.spyOn(global.Math, 'random').mockRestore()

            jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

            tD.battleM9.fight()
            tD.battleM9.fight(0)

            expect(consoleSpy).toHaveBeenCalledWith('It hit 3 times')

            tD.battleM10.fight()
            tD.battleM10.fight(1)

            expect(consoleSpy).toHaveBeenCalledWith('It hit once')
            
        })

    })

    describe('Testing "Self-Damaging" moves', () => {


        
    })

    describe('Testing "Forced Switch" moves', () => {


        
    })

})