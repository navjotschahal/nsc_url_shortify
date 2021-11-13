const express = require('express');
const RedirectController = require('../controllers/redirect');
const routeUrls = require('../static-data/static-data.json');

const router = express.Router();

router.get(routeUrls.routes.redirect.routes.redirect, RedirectController.redirectToOriginalURL);

module.exports = router;
