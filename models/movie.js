let fs = require('fs');
let path = require('path');
module.exports = class MovieCreator {

    constructor(title, year, rate, poster, dec) {
        this.title = title
        this.year = year
        this.rate = rate
        this.poster = poster
        this.dec = dec
    }
    saveMovie() {

    }
    static fetchAll() {

    }

}