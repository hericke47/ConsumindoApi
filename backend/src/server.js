const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return res.json({message: 'Ok'})
});

app.listen('3333');