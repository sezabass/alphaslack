// import convert from "/assets/core.js";
// JEST can't read this?
const latinise = require("../assets/latinise.js");
const convert = require("../assets/core.js");

test('when asked to convert text only then return it converted as white', () => {
    const text = 'abc';
    const convertedText = convert({originalSentence: text});
    const expectedResult = ':alphabet-white-a::alphabet-white-b::alphabet-white-c:';
    expect(convertedText).toBe(expectedResult);
})