let Express = require('express');
let fs = require('fs');
let path = require('path');
let BodyParser = require('body-parser');
let App = Express();
App.use(BodyParser.urlencoded({ extended: false }))
App.use(Express.static(path.join(__dirname, 'public')))
App.set('view engine', 'pug'); 
App.set('views' , 'views')

App.use('', (req, res) => {
   res.render('index')
})
App.listen('3000');