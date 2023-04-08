const connection = require('./connection');

const findAll = async () => {
	const [articles] = await connection.execute(
		'SELECT * FROM JurisHand.article ORDER BY published_date DESC',
	);

	return articles;
};

const findByCategory = async (category) => {
	const [articles] = await connection.execute(
		'SELECT * FROM JurisHand.article WHERE `category` = ? ORDER BY published_date DESC',
		[category],
	);

	return articles;
};

const searchArticles = async (searchTerm) => {
	const [articles] = await connection.execute(
		`SELECT * FROM JurisHand.article WHERE title LIKE ? OR content LIKE ? ORDER BY published_date DESC`,
		[`%${searchTerm}%`, `%${searchTerm}%`],
	);
	
	return articles;
}

module.exports = {
	findAll,
	findByCategory,
	searchArticles,
};
	