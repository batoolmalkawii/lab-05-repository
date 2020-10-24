'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000,
const app = express();


app.use(express.static('./public'));

app.get('/', (request, response)=>{
    response.status(200).send('Hello');
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

app.listen(PORT, ()=>{
    console.log(`Listening to port: ${PORT}`);
});
