// sorts array according to given sort type

arrSort = function (arr, sortType) {
    if(Array.isArray(arr)){
        switch(sortType){
            case ('a' || 'ascending'): return arr.sort((x,y) => isNaN(x)-isNaN(y) || x-y); break;
            case ('d' || 'descending'): return arr.sort((x,y) => isNaN(y)-isNaN(x) || y-x); break;
            case ('Mm' || 'maxmin'):
                let b=arr.sort((x,y) => y-x).slice(0,Math.ceil(arr.length/2));
                arr.slice(Math.ceil(arr.length/2),arr.length).sort((x,y) => x-y).map((x,y) => b.splice(2*y+1,0,x));
                return b;
                break;
            case ('mM' || 'minmax'):
                let c=arr.sort((x,y) => x-y).slice(0,Math.ceil(arr.length/2));
                arr.slice(Math.ceil(arr.length/2),arr.length).sort((x,y) => y-x).map((x,y) => c.splice(2*y+1,0,x));
                return c;
                break;
            default: throw new TypoError('Sort type must be a | d | Mm');
        }
    } throw new TypeError('Argument must be an array.')
}

module.exports = arrSort
