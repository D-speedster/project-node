let express = require('express');
let router = express.Router();
router.use('/', (req, res) => {
    res.render('admin')
})

router.use('/add-movies', (req, res) => {
    res.send('<h1>Create Movie</h1>')

})
module.exports = router;