// gives random integer within given range (inclusive)

randomInt = function (min, max) {
    if (Number.isInteger(min && max)){
        return Math.floor(Math.random()) * ((Math.max(max, min)+1) - Math.min(min, max)) + min
    } else{
        throw new TypeError('Arguments must be integer.')
    }
}

module.exports = randomInt
