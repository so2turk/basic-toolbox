// rounds number with given precision

round = function (num, precision) {
    if(!isNaN(num && precision)) return Math.round(num*Math.pow(10,precision))/Math.pow(10,precision)
    throw new TypeError('Arguments must be number.')
}

module.exports = round
