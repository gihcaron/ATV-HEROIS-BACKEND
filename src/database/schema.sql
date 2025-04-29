CREATE DATABASE superherois;

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200)
);


CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200),
    editoras_id INTEGER REFERENCES editoras(id) ON DELETE SET NULL
);

INSERT INTO editoras (nome) VALUES 
('Marvel'),
 ('DC Comics'), 
 ('Image Comics'), 
 ('Dark Horse Comics'),
 ('IDW Publishing'), 
('Dynamite Entertainment'),
('Valiant Comics'), 
('BOOM! Studios');

INSERT INTO herois (nome, editoras_id) VALUES
('Superman', 2),
('Batman', 2),
('Wonder Woman', 2),
('Flash', 2),
('Green Lantern', 2),
('Aquaman', 2),
('Cyborg', 2),
('Spider-Man', 1),
('Iron Man', 1),
('Thor', 1),
('Hulk', 1),
('Black Widow', 1),
('Wolverine', 1),
('Deadpool', 1),
('Captain America', 1),
('Doctor Strange', 1),
('Black Panther', 1),
('Daredevil', 1),
('Green Arrow', 2),
('Shazam', 2),
('Nightwing', 2),
('Hawkeye', 1);

