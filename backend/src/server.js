const cors = require('cors');
const express = require('express');
const app = express();
const axios = require ('axios');

app.use(cors());

app.get('/', async(request, response) => {

    try {
    // response é a responsta do axios mas eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return response.json(data)
    } catch (error) {
        console.log(error);        
    }


});

app.listen('3333');