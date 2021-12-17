const bgColours = {

    Normal: {R: 119, G: 119, B: 88},
    Fire: {R: 176, G: 83, B: 31},
    Water: {R: 78, G: 104, B: 166},
    Grass: {R: 88, G: 140, B: 62},
    Electric: {R: 171, G: 145, B: 31},
    Psychic: {R: 171, G: 67, B: 94},
    Ice: {R: 109, G: 151, B: 151},
    Dragon: {R: 83, G: 46, B: 171},
    Dark: {R: 73, G: 67, B: 57},
    Fairy: {R: 165, G: 110, B: 117},
    Fighting: {R: 135, G: 41, B: 36},
    Flying: {R: 119, G: 104, B: 166},
    Poison: {R: 114, G: 52, B: 114},
    Ground: {R: 156, G: 135, B: 78},
    Rock: {R: 130, G: 114, B: 46},
    Bug: {R: 119, G: 130, B: 31},
    Ghost: {R: 83, G: 67, B: 109},
    Steel: {R: 125, G: 125, B: 140},

}

const textColours = {

    Normal: {R: 213, G: 213, B: 182},
    Fire: {R: 255, G: 142, B: 110},
    Water: {R: 167, G: 193, B: 255},
    Grass: {R: 177, G: 229, B: 151},
    Electric: {R: 255, G: 234, B: 130},
    Psychic: {R: 255, G: 156, B: 188},
    Ice: {R: 198, G: 240, B: 240},
    Dragon: {R: 182, G: 130, B: 255},
    Dark: {R: 0, G: 0, B: 0},
    Fairy: {R: 254, G: 199, B: 211},
    Fighting: {R: 224, G: 120, B: 75},
    Flying: {R: 208, G: 193, B: 255},
    Poison: {R: 203, G: 141, B: 203},
    Ground: {R: 245, G: 224, B: 167},
    Rock: {R: 219, G: 203, B: 135},
    Bug: {R: 208, G: 219, B: 120},
    Ghost: {R: 177, G: 146, B: 208},
    Steel: {R: 219, G: 219, B: 234},

}

function typeColourise (string, type1, type2) {

    const bgColour = bgColours[type1]
    const bgPrefix = `\x1b[48;2;${bgColour.R};${bgColour.G};${bgColour.B}m`

    let colourisedString = bgPrefix + '\x1b[1m' + string + '\x1b[0m'

    if (type2 !== undefined && type2 !== 'N/A') {

        const textColour = textColours[type2]
        const textPrefix = `\x1b[38;2;${textColour.R};${textColour.G};${textColour.B}m`

        colourisedString = textPrefix + colourisedString

    } else {

        const textColour = textColours[type1]
        const textPrefix = `\x1b[38;2;${textColour.R};${textColour.G};${textColour.B}m`

        colourisedString = textPrefix + colourisedString

    }

    return colourisedString

}

function bolden(string) {

    return '\x1b[1m' + string + '\x1b[0m'

}

function underline(string) {

    return '\x1b[4m' + string + '\x1b[0m'

}

function statusMenu(statusObject) {

    if (Object.keys(statusObject).length === 0) {

        return ''

    }

    const status = Object.keys(statusObject)[0]

    if (status === 'poisoned') {

        return ' ' + typeColourise('PSN', 'Poison')

    }

    if (status === 'badly poisoned') {

        return ' ' + typeColourise('PSN', 'Poison', 'Dark')

    }

    if (status === 'paralyzed') {

        return ' ' + typeColourise('PRZ', 'Electric')

    }

}

// const keys = Object.keys(bgColours)
// const typeQuant = keys.length

// for (let i = 0; i < 18; i++) {

//     const type1 = keys[i]

//     for (let j = 0; j < 18; j++) {

//         const type2 = keys[j]

//         console.log(typeColourise(`${type1}/${type2}`, type1, type2))

//     }

// }

module.exports = { typeColourise, bolden, underline, statusMenu }