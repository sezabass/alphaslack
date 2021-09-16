import convert from "./core.js";
import express from 'express';
const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.contentType('application/json');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/convert', (req, res) => {

    console.log('\n--- Request start ---');
    console.log(`URL: ${req.url}`);

    console.log(req.query);
    const hasValidText = (req.query.text !== undefined && req.query.text.length > 0);
    const reqText = hasValidText ? req.query.text : null;

    if (reqText != null) {
        const convertedText = convert({originalSentence: reqText});
        const response = {
            'result': convertedText
        }
        const json = JSON.stringify(response);
        console.log(`Original text: ${reqText}`);
        console.log(`Converted text: ${convertedText}`);
        res.send(json);
    } else {
        const errorText = 'No text was provided for conversion';
        const errorResponse = {
            'error': errorText
        }
        const json = JSON.stringify(errorResponse);
        console.log(`Error: ${errorText}Retornando todos os cavaleiros.`);
        res.status(422).send(json);
    }

    console.log('--- Request end ---\n');

})

app.listen(port, () => {
    console.log(`Alphaslack API listening at http://localhost:${port}`);
})