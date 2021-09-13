'use strict';

// Conversion characters
const spacesChar = ' '
const spacesCode = '    '
const exclamationChar = '!'
const exclamationCode = 'exclamation'
const questionChar = '?'
const questionCode = 'question'
const hashChar = '#'
const hashCode = 'hash'
const atChar = '@'
const atCode = 'at'
const forbiddenCharactersRegex = /[0-9,\.\-\=\+_\(\)\*&%\$;:'"\<\>\[\]\{\}\^\ˆ\\\|\/œ∑´®†¥¨øπß∂©˙∆˚¬…æΩ≈√∫~˜µ≤≥÷Œ„‰ˇ∏”’»˝Æ¸˛◊¯˘¿]/

/**
 * Converts text.
 * @constructor
 * @param {object} params: can receive [originalSentence|selectedColor]
 *  - originalSentence: The non-converted text.
 *  - selectedColor: The target color name. [white|yellow|mixed-1|mixed-2]
 */
const convert = (params) => {

    const originalSentence = params.originalSentence || ''

    const selectedColor = params.selectedColor || 'white'

    let fullSentence = ''

    originalSentence.split('').forEach((e, i) => {
        let newChar;
        switch (e) {
            case spacesChar:
                fullSentence += spacesCode
                return
            case exclamationChar:
                newChar = exclamationCode
                break
            case questionChar:
                newChar = questionCode
                break
            case hashChar:
                newChar = hashCode
                break
            case atChar:
                newChar = atCode
                break
            default:
                if (e.match(forbiddenCharactersRegex)) return
                newChar = e.latinise()
                break
        }

        const selectedColorCode = _getColorCode(selectedColor, i)
        fullSentence += `:alphabet-${selectedColorCode}-${newChar}:`
    });

    return fullSentence
}

const Colors = Object.freeze({
    'white': 'white',
    'yellow': 'yellow',
})

const _getColorCode = (selectedColor, index) => {
    if (selectedColor == null || selectedColor == undefined) {
        return Colors.white
    }
    switch (selectedColor) {
        case 'mixed-1':
            return index % 2 == 0 ? Colors.white : Colors.yellow
        case 'mixed-2':
            return index % 2 == 0 ? Colors.yellow : Colors.white
        default:
            return selectedColor
    }
}

module.exports = convert
// export default convert
// JEST can't read this?