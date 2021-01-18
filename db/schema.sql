DROP DATABASE IF EXISTS inSolez_db;

CREATE DATABASE inSolez_db;

USE inSolez_db;
CREATE TABLE sneakers
(
    id INT NOT NULL AUTO_INCREMENT,
    sneaker_name VARCHAR(100) NOT NULL,
    owned BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);