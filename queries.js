const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    database: 'xclothes',
    port: 5432
});


const getManufacturers = (request, response) => {
    pool.query('SELECT * FROM manufacturers ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results.rows);
    })
}

const getSingleManufacturerById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM manufacturers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results.rows);
    })
}

const createNewManufacturer = (request, response) => {
    const { name, country, photo_link_one, photo_link_two, short_description, description } = request.body;

    pool.query('INSERT INTO manufacturers (name, country, photo_link_one, photo_link_two, short_description, description) VALUES ($1, $2, $3, $4, $5, $6)', [name, country, photo_link_one, photo_link_two, short_description, description], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(201).json({'status': 'success' , 'id': results.insertId})
    })
}


module.exports = {
    getManufacturers,
    getSingleManufacturerById,
    createNewManufacturer,
}