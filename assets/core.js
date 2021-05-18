'use strict';

// CORE FUNCTIONS ---------

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
const forbiddenCharactersRegex = /[,\.\-\=\+_\(\)\*&%\$;:'"\<\>\[\]\{\}]/

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

const _getColorCode = (selectedColor, index) => {
    switch (selectedColor) {
        case 'mixed-1':
            return index % 2 == 0 ? 'white' : 'yellow'
        case 'mixed-2':
            return index % 2 == 0 ? 'yellow' : 'white'
        default:
            return selectedColor
    }
}

// UI Functions ---------

// Texts
const feedbackTextCopied = 'O texto foi copiado! ;D'

// DOM elements
const $originalSentence = document.querySelector('#original-sentence')
const $transformedSentence = document.querySelector('#transformed-sentence')
const $textareaFeedback = document.querySelector('#textarea-feedback')
const $copyButton = document.querySelector('#copy-button')
const $availableColors = document.querySelectorAll('input[name="color"]')

const triggerConversion = () => {
    const selectedColor = Array.from($availableColors).filter((el) => el.checked)[0].value
    const params = {
        'selectedColor': selectedColor,
        'originalSentence': $originalSentence.value,
    }

    const result = convert(params)
    $transformedSentence.value = result

    clearFeedback()
}

const copyTextToClipboard = () => {
    const text = $transformedSentence.value

    const newTextArea = document.createElement('textarea');
    newTextArea.value = text;
    document.body.appendChild(newTextArea);
    newTextArea.select();

    newTextArea.select()
    newTextArea.setSelectionRange(0, text.length)
    document.execCommand('copy');
    newTextArea.blur()
    document.body.removeChild(newTextArea);

    $textareaFeedback.textContent = feedbackTextCopied
}

const clearFeedback = () => {
    $textareaFeedback.textContent = ''
}

// assign input commands
$originalSentence.addEventListener('keyup', triggerConversion)
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('click', triggerConversion)
});
$copyButton.addEventListener('click', copyTextToClipboard)