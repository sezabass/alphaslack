import convert from "../src/core.js";

test('when asked to convert a space character then return 4 spaces', () => {
    const text = ' ';
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = '    ';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert an exclamation mark character then return it converted', () => {
    const text = '!';
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = ':alphabet-white-exclamation:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert a question mark character then return it converted', () => {
    const text = '?';
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = ':alphabet-white-question:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert a hash character then return it converted', () => {
    const text = '#';
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = ':alphabet-white-hash:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert an at character then return it converted', () => {
    const text = '@';
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = ':alphabet-white-at:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert any forbidden character then return nothing', () => {
    const text = `0123456789,.-=+_()*&%$;:'"<>[]{}^ˆ\|/œ∑´®†¥¨øπß∂©˙∆˚¬…æΩ≈√∫~˜µ≤≥÷Œ„‰ˇ∏”’»˝Æ¸˛◊¯˘¿]`;
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = '';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert text only then return it converted as white', () => {
    const text = 'abc';
    const convertedText = convert({
        originalSentence: text
    });
    const expectedResult = ':alphabet-white-a::alphabet-white-b::alphabet-white-c:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert text as white then return it converted as white', () => {
    const text = 'abc';
    const convertedText = convert({
        originalSentence: text,
        selectedColor: 'white',
    });
    const expectedResult = ':alphabet-white-a::alphabet-white-b::alphabet-white-c:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert text as yellow then return it converted as yellow', () => {
    const text = 'abc';
    const convertedText = convert({
        originalSentence: text,
        selectedColor: 'yellow',
    });
    const expectedResult = ':alphabet-yellow-a::alphabet-yellow-b::alphabet-yellow-c:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert text as mixed 1 then return it converted as white and yellow', () => {
    const text = 'abc';
    const convertedText = convert({
        originalSentence: text,
        selectedColor: 'mixed-1',
    });
    const expectedResult = ':alphabet-white-a::alphabet-yellow-b::alphabet-white-c:';
    expect(convertedText).toBe(expectedResult);
})

test('when asked to convert text as mixed 2 then return it converted as white and yellow', () => {
    const text = 'abc';
    const convertedText = convert({
        originalSentence: text,
        selectedColor: 'mixed-2',
    });
    const expectedResult = ':alphabet-yellow-a::alphabet-white-b::alphabet-yellow-c:';
    expect(convertedText).toBe(expectedResult);
})
