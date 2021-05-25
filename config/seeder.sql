CREATE DATABASE kings;

USE kings;

CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
price FLOAT NOT NULL,
category VARCHAR(20) NOT NULL,
description VARCHAR(50) NOT NULL
);

CREATE TABLE categories(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
)

INSERT INTO categories(name) VALUES('Electronics'),
('')

INSERT INTO products(name, price, category, description) VALUES('Watch', 1, 'Electronics', 'Lorem ipsum dolor sit amet'),
