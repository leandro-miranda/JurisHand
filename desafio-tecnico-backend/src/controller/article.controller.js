const articleService = require('../services/article.service');

const findAll = async (req, res) => {
	const articles = await articleService.findAll();

	res.status(200).json(articles);
};

const findByCategory = async (req, res) => {
	const { category } = req.params;
	const articles = await articleService.findByCategory(category);

	res.status(200).json(articles);
};

const searchArticles = async (req, res) => {
	const { searchTerm: value } = req.query;
	const articles = await articleService.searchArticles(value);

	res.status(200).json(articles);
};

module.exports = {
	findAll,
	findByCategory,
	searchArticles,
};