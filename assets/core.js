'use strict';

// DOM elements
const $originalSentence = document.querySelector('#original-sentence')
const $transformedSentence = document.querySelector('#transformed-sentence')

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

const writeLetters = (sentence) => {

    const color = document.querySelector('input[name="color"]:checked').value
    let fullSentence = ''

    sentence.split('').forEach(e => {
        let newChar;
        switch(e) {
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
        
        fullSentence += `:alphabet-${color}-${newChar}:`
    });

    return fullSentence
}

const triggerConversion = (event) => {
    let result = writeLetters($originalSentence.value)
    $transformedSentence.value = result
}

document.querySelector('#original-sentence').addEventListener('keyup', triggerConversion)
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('click', triggerConversion)    
});