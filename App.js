let Express = require('express');
let fs = require('fs');
let path = require('path');
let BodyParser = require('body-parser');
let App = Express();
App.use(BodyParser.urlencoded({ extended: false }))
App.set('view engine', 'pug');
App.set('views', 'views')
App.use('', (req, res) => {
    res.send("<h1>Hello World</h1>")
})
App.listen('3000');