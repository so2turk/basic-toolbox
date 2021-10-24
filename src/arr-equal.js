// compares two arrays whether they are equal or not

arrEqual = function (arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr1)){
        if(
            arr1.length == arr2.length &&
            arr1.every((el, i) => arr2.i === arr1.i) &&
            JSON.stringify(arr1) == JSON.stringify(arr2)
        ){
            return true
        } else return false
    } else{
        throw new TypeError('Arguments must be array.')
    }
}

module.exports = arrEqual
