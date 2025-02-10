let fs = require('fs');
const path = require('path');
let path = require('path');
let ListArray = []
module.exports = class MovieCreator {

    constructor(title, year, rate, poster, dec) {
        this.title = title
        this.year = year
        this.rate = rate
        this.poster = poster
        this.dec = dec
    }
    saveMovie() {
        let p = path.join(path.dirname(process.mainModule.filename), 'data', 'movie.json');
        fs.readFile(p, (err, fileContent) => {
            if (!err && fileContent.length > 0) {

                try {
                    ListArray = JSON.parse(fileContent)
                }
                catch {
                    console.log("We Have a problem")

                }
                ListArray.push(this)
            }
        })

    }
    static fetchAll() {

    }

}