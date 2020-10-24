'use strict';

const
    express = require('express'),
    PORT = process.env.PORT || 3000,
    app = express();


app.use(express.static('./public'));

app.get('/', (request, response) => {
    response.status(200).send('Hello');
});


app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});
