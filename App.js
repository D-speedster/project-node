let Express = require('express');
let fs = require('fs');
let path = require('path');
let BodyParser = require('body-parser');
let App = Express();
let series = require('./routes/series');
let movies = require('./routes/movies');
let Admin = require('./routes/admin')
App.use(BodyParser.urlencoded({ extended: false }))
App.use(Express.static(path.join(__dirname, 'public')))
App.set('view engine', 'pug');
App.set('views', 'views')

App.get('', (req, res) => {
    res.render('index')
})
App.use('/Movies', movies)
App.use('/Series', series)
App.use('/admin', Admin)
App.use('/', (req, res) => {
    res.status(404).send('<h1><center>404 Not Found 😣</center></h1>')
})
App.listen('3000');