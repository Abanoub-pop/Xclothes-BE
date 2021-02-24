# First Step (Create Database)

# DDL (Data Definition Language)

CREATE DATABASE xclothes;

# Second Step (Select/Connect to database)

\c xclothes

# Third Step (Create Tables)

CREATE TABLE manufacturers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(3) NOT NULL,
    photo_link_one VARCHAR(255) NOT NULL,
    photo_link_two VARCHAR(255) NOT NULL,
    short_description TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE cloths(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) UNIQUE NOT NULL,
    image_filename VARCHAR(255) NOT NULL,
    manufacturer_id INT references manufacturers(id),
    short_description TEXT NOT NULL,
    description TEXT NOT NULL,
    promo BOOLEAN DEFAULT false
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    cloth_id INT references cloths(id),
    quantity INT CHECK(quantity > 0) NOT NULL,
    customer_code VARCHAR(10) NOT NULL
);

# DML (Data Manipulation Language)

C (Create)

# Create One Row

INSERT INTO manufactureres (name, country, photo_link_one, photo_link_two, short_description, description) VALUES ('Puma', 'GER', 'images/puma(1).png', 'images/puma(2).png', 'Puma short desc', 'Puma full description');

# Create Multiple Rows

INSERT INTO manufactureres (name, country, photo_link_one, photo_link_two, short_description, description) VALUES ('Adidas', 'GER', 'images/adidas(1).png', 'images/adidas(2).png', 'Adidas short desc', 'Adidas full description'), ('Nike', 'USA', 'images/nike(1).png', 'images/nikes(2).png', 'Nike short desc', 'Nike full description'), ('La Coste', 'FRA', 'images/lacoste(1).png', 'images/lacoste(2).png', 'La Coste short desc', 'La Coste full description');

R (Read)

# Fetch all data

SELECT * FROM manufactureres;

# Fetch some columns

SELECT id, name, short_description FROM manufactureres;

# Fetch rows with conditions

SELECT * from manufactureres WHERE id = 2;

SELECT id, name from manufactureres WHERE country = 'GER';

U (Update)

UPDATE manufacurers SET country = 'USA' WHERE id = 3;

D (Delete)

DELETE FROM (name of table) WHERE id = 5;

# Insert First Cloth

INSERT INTO cloths (code, image_filename, manufacturer_id, short_description, description) VALUES ('askdnmjhn2q8u3a', 'images/clothes/puma-1.png', 1, 'Puma first cloth', 'Puma first cloth long description'),('askdnmjhn2q8u3b', 'images/clothes/adidas-1.png', 2, 'Adidas first cloth', 'Adidas first cloth long description'),('askdnmjhn2q8u3c', 'images/clothes/nike-1.png', 3, 'Nike first cloth', 'Nike first cloth long description'),('askdnmjhn2q8u3d', 'images/clothes/ LaCoste-1.png', 4, ' La Coste first cloth', ' La Coste first cloth long description');



INSERT INTO orders(order_date, cloth_id, quantity, customer_code) VALUES ('2021-01-25', 1, 10, 'abababab01'), ('2021-01-25', 2, 5, 'abababab02'), ('2021-01-25', 3, 50, 'abababab03'), ('2021-01-25', 4, 15, 'abababab04');


/*
To rename table or database
===>  ALTER TABLE [old table or database name] RENAME TO [new table or database name];
Ahmed sent Today at 5:40 PM
TABLE in case of table and DATABASE in case of database

To delete all data
=> DROP DATABASE [database name]