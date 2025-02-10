let express = require('express');
const { SuccessMessage, Addmovie, getMovie, SuccessMessage2 } = require('../controllers/movie');

let router = express.Router();
router.get('/', getMovie);
router.post('/', Addmovie);
router.get('/success', SuccessMessage);
router.post('/success', SuccessMessage2)
module.exports = router;