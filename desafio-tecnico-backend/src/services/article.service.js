const articleModel = require('../database/models/article.model');

const findAll = async () => {
	const articles = await articleModel.findAll();

	return articles;
};

const findByCategory = async (category) => {
	const articles = await articleModel.findByCategory(category);

	return articles;
};

const searchArticles = async (searchTerm) => {
	const articles = await articleModel.searchArticles(searchTerm);

	return articles;
};

module.exports = {
	findAll,
	findByCategory,
	searchArticles,
};