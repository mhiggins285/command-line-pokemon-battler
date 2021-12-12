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

            expect(consoleSpy).toHaveBeenCalledWith('1 - \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m (78/78)')

            expect(consoleSpy).toHaveBeenCalledWith('Attack - 84, Defense - 78, Special Attack - 109, Special Defense - 85')

            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;208;193;255m\x1b[48;2;119;104;166m\x1b[1mWing Attack\x1b[0m (35/35), \x1b[38;2;255;142;110m\x1b[48;2;176;83;31m\x1b[1mFire Blast\x1b[0m (15/15), \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mSlash\x1b[0m (20/20), \x1b[38;2;245;224;167m\x1b[48;2;156;135;78m\x1b[1mEarthquake\x1b[0m (5/5)')

            expect(consoleSpy).toHaveBeenCalledWith('2 - \x1b[38;2;203;141;203m\x1b[48;2;88;140;62m\x1b[1mVenusaur\x1b[0m (80/80)')

            expect(consoleSpy).toHaveBeenCalledWith('Attack - 82, Defense - 83, Special Attack - 100, Special Defense - 100')

            expect(consoleSpy).toHaveBeenCalledWith('\x1b[38;2;203;141;203m\x1b[48;2;114;52;114m\x1b[1mSludge Bomb\x1b[0m (10/10), \x1b[38;2;177;229;151m\x1b[48;2;88;140;62m\x1b[1mSolar Beam\x1b[0m (10/10), \x1b[38;2;213;213;182m\x1b[48;2;119;119;88m\x1b[1mHyper Beam\x1b[0m (5/5)')

        })

        test('When a Pokemon has fainted, their HP displays in red on the Check Pokemon screen', () => {

            tD.battle17.fight(0)

            tD.battle17.fight(0)

            tD.battle17.fight(1)

            tD.battle17.fight(6)

            expect(consoleSpy).toHaveBeenCalledWith('1 - \x1b[38;2;208;193;255m\x1b[48;2;176;83;31m\x1b[1mCharizard\x1b[0m \x1b[38;2;255;142;110m\x1b[48;2;135;41;36m\x1b[1m(0/78)\x1b[0m')

        })

    })

})