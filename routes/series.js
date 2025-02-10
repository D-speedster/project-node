let express = require('express');
let router = express.Router();
router.use('/', (req, res) => {
    res.render('Series')

})
module.exports = router;