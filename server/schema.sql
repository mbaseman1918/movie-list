CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie TEXT,
  watched BOOLEAN
);

INSERT INTO movies (id, movie, watched) VALUES (DEFAULT, 'Face Off', true), (DEFAULT, 'El Cid', false), (DEFAULT, 'Aliens', true), (DEFAULT, 'Fiddler on the Roof', false)