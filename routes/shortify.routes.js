const express = require('express');
const ShortifyController = require('../controllers/shortify');
const routeUrls = require('../static-data/static-data.json');

const router = express.Router();

router.post(routeUrls.routes.shortify.routes.shortify, ShortifyController.shortifyUrl);

module.exports = router;
