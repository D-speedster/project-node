let express = require('express');
let router = express.Router();
let ADdmovie = require('./add-movie');

router.get('/', (req, res) => {
    res.render('admin')
})
router.use('/add-movies', ADdmovie)
module.exports = router;