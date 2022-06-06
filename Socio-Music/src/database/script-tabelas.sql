CREATE DATABASE sociomusic;

USE sociomusic;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE estilo (
	fkId INT,
	FOREIGN KEY (fkId) REFERENCES usuario (id),
	idEstilo INT PRIMARY KEY AUTO_INCREMENT,
	estilo VARCHAR(40)
);

INSERT INTO usuario VALUES 
(1, 'João', 'joao@gmail.com', 'z1z2z3'),
(2, 'Rafael', 'rafael@gmail.com', 'x1x2x3'),
(3, 'Brayan', 'brayan@gmail.com', 'c1c2c3'),
(4, 'Guilherme', 'guilherme@gmail.com', 'v1v2v3'),
(5, 'Isabela', 'isabela@gmail.com', 'b1b2b3'),
(6, 'Fernanda', 'fernanda@gmail.com', 'n1n2n3'),
(7, 'Roberta', 'roberta@gmail.com', 'r1r2r3'),
(8, 'Gabriela', 'gabriela@gmail.com', 'g1g2g3');

INSERT INTO estilo VALUES
(1, null, 'Eletronica'),
(1, null, 'Hip Hop'),
(1, null, 'Rock'),
(2, null, 'Classica'),
(2, null, 'Indie'),
(2, null, 'Pop'),
(3, null, 'Rock'),
(3, null, 'Indie'),
(3, null, 'Country'),
(4, null, 'Eletronica'),
(4, null, 'Rap'),
(4, null, 'Funk'),
(5, null, 'Classica'),
(5, null, 'Pop'),
(5, null, 'Lo Fi'),
(6, null, 'Funk'),
(6, null, 'Reggae'),
(6, null, 'Rap'),
(7, null, 'Forro'),
(7, null, 'Eletronica'),
(7, null, 'Indie'),
(8, null, 'Eletronica'),
(8, null, 'Funk'),
(8, null, 'Indie');

SELECT * FROM (SELECT count(estilo) as 'ranking', estilo FROM estilo group by estilo limit 5)as estilo order by ranking desc limit 5;