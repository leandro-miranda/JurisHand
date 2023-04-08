const sinon = require('sinon');
const { expect } = require('chai');
const articleServices = require('../../../services/article.service');
const articleModel = require('../../../database/models/article.model');

describe('Buscando todos os artigos', function () {
	beforeEach(() => {
		const articles = [
			{
				"id": 2,
				"title": "Código Penal",
				"author": "Bolsonaro",
				"content": "Lei de Introdução ao código penal",
				"published_date": "1990-03-15T03:00:00.000Z",
				"category": "Penal"
			}
		];
		sinon.stub(articleModel, 'findAll').resolves(articles);
	})
	afterEach(sinon.restore);

	it('Deve retornar todos os artigos', async function () {
		const articles = await articleServices.findAll();
		expect(articles).to.be.an('array');
		expect(articles[0]).to.have.property('id');
		expect(articles[0]).to.have.property('title');
		expect(articles[0]).to.have.property('author');
		expect(articles[0]).to.have.property('content');
		expect(articles[0]).to.have.property('published_date');
		expect(articles[0]).to.have.property('category');
	});

	it('Deve retornar artigos por categoria', async function () {
		const articles = await articleServices.findByCategory('Penal');
		expect(articles).to.be.an('array');
		expect(articles[0]).to.have.property('id');
		expect(articles[0]).to.have.property('title');
		expect(articles[0]).to.have.property('author');
		expect(articles[0]).to.have.property('content');
		expect(articles[0]).to.have.property('published_date');
		expect(articles[0]).to.have.property('category');
	});

	it('Deve retornar artigos por termo-chave de busca por título', async function () {
		const articles = await articleServices.searchArticles('código');
		expect(articles).to.be.an('array');
		expect(articles[0]).to.have.property('id');
		expect(articles[0]).to.have.property('title');
		expect(articles[0]).to.have.property('author');
		expect(articles[0]).to.have.property('content');
		expect(articles[0]).to.have.property('published_date');
		expect(articles[0]).to.have.property('category');
	});

	it('Deve retornar artigos por termo-chave de busca por conteúdo', async function () {
		const articles = await articleServices.searchArticles('Lei');
		expect(articles).to.be.an('array');
		expect(articles[0]).to.have.property('id');
		expect(articles[0]).to.have.property('title');
		expect(articles[0]).to.have.property('author');
		expect(articles[0]).to.have.property('content');
		expect(articles[0]).to.have.property('published_date');
		expect(articles[0]).to.have.property('category');
	});
});
