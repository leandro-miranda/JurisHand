CREATE DATABASE IF NOT EXISTS article;

CREATE TABLE article.article (
		id INTEGER PRIMARY KEY AUTO_INCREMENT,
		title VARCHAR(255) NOT NULL,
		author VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		published_date DATETIME NOT NULL,
		category VARCHAR(255) NOT NULL,
);

INSERT INTO article.article(title, author, content, published_date, category)
VALUES
		("Código Civil", "Fernando Henrique Cardoso", "Lei de Introdução ao código civil", 1970-10-01, "Civil"),
		("Código Penal", "Bolsonaro", "Lei de Introdução ao código penal", 1990-03-15, "Penal");
		("Código Trabalhista", "Eneas", "Lei de Introdução ao código trabalhista", 1985-07-25, "Trabalhista");
