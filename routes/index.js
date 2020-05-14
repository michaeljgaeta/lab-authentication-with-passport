'use strict';

const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

module.exports = indexRouter;
