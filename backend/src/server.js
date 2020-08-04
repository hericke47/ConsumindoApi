const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (request, response) => {
    return response.json([
        {name: 'herick'},
        {name: 'Diego'}
    ])
});

app.listen('3333');