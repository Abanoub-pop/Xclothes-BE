
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
extended: true,
    })
)

const db = require('./queries');   // import from database

//////////////////////*****Manufacturers*******\\\\\\\\\\\\\\\\\\\

 // Get or fetch manufacturers data
app.get('/manufacturers', db.getManufacturers);

// Get or fetch manufacturers  (single) data by ID
app.get('/manufacturers/:id', db.getSingleManufacturerById);      

// Create or insert manufacturers data
app.post('/manufacturers', db.createNewManufacturer);

// Update manufacturers data
app.put('/manufacturers/:id', db.updateManufacturer);

// Delete manufacturers data
app.delete('/manufacturers/:id', db.deleteManufacturer);


//////////////////////*****Cloths*******\\\\\\\\\\\\\\\\\\\

// Get or fetch Cloths data
app.get('/cloths', db.getCloths);

// Get or fetch Cloths  (single) data by ID
app.get('/cloths/:id', db.getSingleClothById);      

// Create or insert Cloths data
app.post('/cloths', db.createNewCloth);

// Update Cloths data
app.put('/cloths/:id', db.updateCloth);

// Delete Cloths data
app.delete('/cloths/:id', db.deleteCloth);


//////////////////////*****Orders*******\\\\\\\\\\\\\\\\\\\

// Get or fetch Orders data
app.get('/orders', db.getOrders);

// Get or fetch Orders  (single) data by ID
app.get('/orders/:id', db.getSingleOrderById);      

// Create or insert Orders data
app.post('/orders', db.createNewOrder);

// Update Orders data
app.put('/orders/:id', db.updateOrder);

// Delete Orders data
app.delete('/orders/:id', db.deleteOrder);










app.listen(3000, () => {
    console.log('Server is Up');
})