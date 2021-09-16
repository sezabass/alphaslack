import convert from './core.js'

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