var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/problems', getProblems);
//router.get('/problem/:id', getProblem);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getProblems(req, res, next) {
		console.log('sending 200 back to client - data.problems: ', data.problems);
    res.status(200).send(data.problems);
}
