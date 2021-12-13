const strong = 1.25
const neut = 1
const weak = 0.75
const immune = 0

const typeChart = {

    Normal: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: weak,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: immune,
        Steel: weak,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Grass: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: weak,
        Water: strong,
        Rock: strong,
        Electric: neut,
        Psychic: neut,
        Ground: strong,
        Poison: weak,
        Flying: weak,
        Bug: weak,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: neut,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Fire: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: weak,
        Rock: weak,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: strong,
        Ghost: neut,
        Steel: strong,
        Fighting: neut,
        Ice: strong,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Water: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: strong,
        Water: weak,
        Rock: strong,
        Electric: neut,
        Psychic: neut,
        Ground: strong,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Rock: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: strong,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: weak,
        Poison: neut,
        Flying: strong,
        Bug: strong,
        Ghost: neut,
        Steel: weak,
        Fighting: weak,
        Ice: strong,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Electric: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: neut,
        Water: strong,
        Rock: neut,
        Electric: weak,
        Psychic: neut,
        Ground: immune,
        Poison: neut,
        Flying: strong,
        Bug: neut,
        Ghost: neut,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: weak,
        Dark: neut,
        Fairy: neut
    },

    Psychic: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: weak,
        Ground: neut,
        Poison: strong,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: strong,
        Ice: neut,
        Dragon: neut,
        Dark: immune,
        Fairy: neut
    },

    Ground: {
        'N/A': neut,
        Normal: neut,
        Grass: weak,
        Fire: strong,
        Water: neut,
        Rock: strong,
        Electric: strong,
        Psychic: neut,
        Ground: neut,
        Poison: strong,
        Flying: immune,
        Bug: weak,
        Ghost: neut,
        Steel: strong,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Poison: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: neut,
        Water: neut,
        Rock: weak,
        Electric: neut,
        Psychic: neut,
        Ground: weak,
        Poison: weak,
        Flying: neut,
        Bug: neut,
        Ghost: weak,
        Steel: immune,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: strong
    },

    Flying: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: neut,
        Water: neut,
        Rock: weak,
        Electric: weak,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: strong,
        Ghost: neut,
        Steel: weak,
        Fighting: strong,
        Ice: neut,
        Dragon: neut,
        Dark: neut,
        Fairy: neut
    },

    Bug: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: strong,
        Ground: neut,
        Poison: weak,
        Flying: weak,
        Bug: neut,
        Ghost: weak,
        Steel: weak,
        Fighting: weak,
        Ice: neut,
        Dragon: neut,
        Dark: strong,
        Fairy: weak
    },

    Ghost: {
        'N/A': neut,
        Normal: immune,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: strong,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: strong,
        Steel: neut,
        Fighting: neut,
        Ice: neut,
        Dragon: neut,
        Dark: weak,
        Fairy: neut
    },

    Steel: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: weak,
        Water: weak,
        Rock: strong,
        Electric: weak,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: strong,
        Dragon: neut,
        Dark: neut,
        Fairy: strong
    },

    Fighting: {
        'N/A': neut,
        Normal: strong,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: strong,
        Electric: neut,
        Psychic: weak,
        Ground: neut,
        Poison: weak,
        Flying: weak,
        Bug: weak,
        Ghost: immune,
        Steel: strong,
        Fighting: neut,
        Ice: strong,
        Dragon: neut,
        Dark: strong,
        Fairy: weak
    },

    Ice: {
        'N/A': neut,
        Normal: neut,
        Grass: strong,
        Fire: weak,
        Water: weak,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: strong,
        Poison: neut,
        Flying: strong,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: weak,
        Dragon: strong,
        Dark: neut,
        Fairy: neut
    },

    Dragon: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: neut,
        Ice: neut,
        Dragon: strong,
        Dark: neut,
        Fairy: immune
    },

    Dark: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: neut,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: strong,
        Ground: neut,
        Poison: neut,
        Flying: neut,
        Bug: neut,
        Ghost: strong,
        Steel: neut,
        Fighting: weak,
        Ice: neut,
        Dragon: neut,
        Dark: weak,
        Fairy: weak
    },

    Fairy: {
        'N/A': neut,
        Normal: neut,
        Grass: neut,
        Fire: weak,
        Water: neut,
        Rock: neut,
        Electric: neut,
        Psychic: neut,
        Ground: neut,
        Poison: weak,
        Flying: neut,
        Bug: neut,
        Ghost: neut,
        Steel: weak,
        Fighting: strong,
        Ice: neut,
        Dragon: strong,
        Dark: strong,
        Fairy: neut
    }

}

module.exports = { typeChart }