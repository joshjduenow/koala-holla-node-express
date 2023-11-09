CREATE TABLE "allKoalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (20) NOT NULL,
	"age" INTEGER,
	"gender" VARCHAR (2) NOT NULL,
    "transfer" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (250) NOT NULL
    
);

INSERT INTO "allKoalas" 
	("name", "age", "gender", "transfer", "notes")
	VALUES
	('Scotty', 4, 'M', TRUE, 'Born in Guatemala'),
	('Jean', 5, 'F', TRUE, 'Allergic to lots of lava'),
	('Ororo', 7, 'F', FALSE, 'Loves listenin to Paula (Abdul)'),
	('Kleaf', 15, 'NB', FALSE, 'Never refuses a treat'),
	('Charlie', 9, 'M', TRUE, 'Favorite band is Nirvana'),
	('Betsy', 4, 'F', TRUE, 'Has a pet iguana');
	