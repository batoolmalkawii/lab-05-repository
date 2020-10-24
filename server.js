'use strict';

const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const PORT = process.env.PORT || 3000,


app.use(express.static('./public'));
app.get('/', (request, response)=>{
    response.status(200).send('Hello');
});

app.listen(PORT, ()=>{
    console.log(`Listening to port: ${PORT}`);
});
