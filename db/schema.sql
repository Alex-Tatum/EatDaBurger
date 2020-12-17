-- Create the burgers database and specify it for use
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);