const express = require('express');
const { findAll, findByCategory, searchArticles } = require('../controller/article.controller');

const router = express.Router();

// Lista todos os artigos jurídicos ordenados por data de publicação
router.get('/', findAll);

// Buscar os artigos jurídicos por termo-chave no título ou conteúdo
router.get('/search', searchArticles);

// Filtra todos os artigos jurídicos por categoria
router.get('/:category', findByCategory);

module.exports = router;