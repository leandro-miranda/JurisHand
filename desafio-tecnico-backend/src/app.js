const express = require('express');
const swaggerUi = require('swagger-ui-express');

const articleRouter = require('./routes/article.routes');

const swaggerDocs = require('./swagger.json');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/articles', articleRouter);

module.exports = app;