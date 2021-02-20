
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
extended: true,
    })
)

const db = require('./queries');

app.get('/', (request, response) => {
    response.status(200).send('This is the homepage');
});

app.get('/hello', (request, response) => {
    response.status(200).send('Hello');
});


app.get('/manufacturers', db.getManufacturers);

app.get('/manufacturers/:id', db.getSingleManufacturerById);

app.post('/manufacturers', db.createNewManufacturer);




app.listen(3000, () => {
    console.log('Server is Up');
})