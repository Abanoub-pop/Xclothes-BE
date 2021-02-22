const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    database: 'xclothes',
    port: 5432
});

//////////////////////*****Manufacturers*******\\\\\\\\\\\\\\\\\\\

// Get or fetch manufacturers data
const getManufacturers = (request, response) => {
    pool.query('SELECT * FROM manufacturers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    })
}

// Get or fetch manufacturers  (single) data by ID
const getSingleManufacturerById = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM manufacturers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    })
}

// Create or insert manufacturers data
const createNewManufacturer = (request, response) => {
    const { name, country, photo_link_one, photo_link_two, short_description, description } = request.body;
    
    pool.query('INSERT INTO manufacturers (name, country, photo_link_one, photo_link_two, short_description, description) VALUES ($1, $2, $3, $4, $5, $6)', [name, country, photo_link_one, photo_link_two, short_description, description], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(201).json({ 'status': 'success', 'id': results.insertId });
    })
}

// Update manufacturers data
const updateManufacturer = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, country, photo_link_one, photo_link_two, short_description, description } = request.body;

    pool.query('UPDATE manufacturers SET name = $1, country = $2, photo_link_one = $3, photo_link_two = $4, short_description = $5, description = $6 WHERE id = $7', [name, country, photo_link_one, photo_link_two, short_description, description, id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Manufacturer with id ${id} was modified successfully` });
    })
}

// Delete manufacturers data
const deleteManufacturer = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM manufacturers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Manufacturer with id ${id} was deleted successfully`});
    })
}


//////////////////////*****Cloths*******\\\\\\\\\\\\\\\\\\\

// Get or fetch Cloths data
const getCloths = (request, response) => {
    pool.query('SELECT * FROM cloths ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    })
}

// Get or fetch Cloths  (single) data by ID
const getSingleClothById = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM cloths WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    })
}

// Create or insert Cloths data
const createNewCloth = (request, response) => {
    const { code, image_filename, manufacturer_id, short_description, description, promo } = request.body;
    
    pool.query('INSERT INTO cloths (code, image_filename, manufacturer_id, short_description, description, promo) VALUES ($1, $2, $3, $4, $5, $6)', [code, image_filename, manufacturer_id, short_description, description, promo], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(201).json({ 'status': 'success', 'id': results.insertId });
    })
}

// Update Cloths data
const updateCloth = (request, response) => {
    const id = parseInt(request.params.id);
    const { code, image_filename, manufacturer_id, short_description, description, promo } = request.body;

    pool.query('UPDATE cloths SET code = $1, image_filename = $2, manufacturer_id = $3, short_description = $4, description = $5, promo = $6 WHERE id = $7', [code, image_filename, manufacturer_id, short_description, description, promo], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Cloth with id ${id} was modified successfully` });
    })
}

// Delete Cloths data
const deleteCloth = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM cloths WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Cloth with id ${id} was deleted successfully`});
    })
}


//////////////////////*****Orders*******\\\\\\\\\\\\\\\\\\\

// Get or fetch Orders data
const getOrders = (request, response) => {
    pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    })
}

// Get or fetch Orders  (single) data by ID
const getSingleOrderById = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    })
}

// Create or insert Orders data
const createNewOrder = (request, response) => {
    const { order_date, cloth_id, quantity, customer_code } = request.body;
    
    pool.query('INSERT INTO orders (order_date, cloth_id, quantity, customer_code) VALUES ($1, $2, $3, $4, $5, $6)', [order_date, cloth_id, quantity, customer_code], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(201).json({ 'status': 'success', 'id': results.insertId });
    })
}

// Update Orders data
const updateOrder = (request, response) => {
    const id = parseInt(request.params.id);
    const { order_date, cloth_id, quantity, customer_code } = request.body;

    pool.query('UPDATE orders SET order_date = $1, cloth_id = $2, quantity = $3, customer_code = $4, WHERE id = $5', [order_date, cloth_id, quantity, customer_code], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Order with id ${id} was modified successfully` });
    })
}

// Delete Orders data
const deleteOrder = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Order with id ${id} was deleted successfully`});
    })
}










// export to app.js
module.exports = {
    //Manfaurers
    getManufacturers,
    getSingleManufacturerById,
    createNewManufacturer,
    updateManufacturer,
    deleteManufacturer,

    //Cloths
    getCloths,
    getSingleClothById,
    createNewCloth,
    updateCloth,
    deleteCloth,

    //Orders
    getOrders,
    getSingleOrderById,
    createNewOrder,
    updateOrder,
    deleteOrder,
}