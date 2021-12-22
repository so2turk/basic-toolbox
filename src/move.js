// move specified element to given place within the array/string

moveIt = function (arg, element, ofWhich, tIndex) {
  if(Array.isArray(arg) || typeof arg == 'string'){
    if((Array.isArray(arg) && arg.some(x=>x==element)) || (typeof arg == 'string' && arg.indexOf(element)!=-1)){
      if(Number.isInteger(ofWhich) && ofWhich!=0){
        if(Number.isInteger(tIndex)){
          occurence=[]
          if(typeof arg == 'string'){
            occurence.push(arg.indexOf(element))
            while (occurence[occurence.length-1]<arg.lastIndexOf(element)){
              occurence.push(arg.indexOf(element,occurence[occurence.length-1]+1))
            } 
          } 
          else{
            arg.forEach((a,i) => {
              if(a===element) occurence.push(i)
            })
          }
          
          if(Math.abs(ofWhich)>occurence.length) ofWhich=Math.sign(ofWhich)*occurence.length
          if(ofWhich<0) ofWhich+=occurence.length
          else ofWhich-=1
          
          if(tIndex<0){
            if(tIndex<-arg.length) tIndex=Math.sign(tIndex)*arg.length
            if(tIndex>=-arg.length) tIndex+=arg.length
          }
          else if(tIndex>arg.length-1) tIndex=arg.length
          if(typeof arg == 'string' && tIndex>arg.length-1-element.length) tIndex-=element.length-1

          if(typeof arg == 'string'){
            arg=arg.split('')
            for(let i=0;i<element.length;i++){
              arg.splice(occurence[ofWhich],1,)
            }
            arg.splice(tIndex,0,element)
            arg=arg.join('')
          }
          else{
            arg.splice(occurence[ofWhich],1,)
            arg.splice(tIndex,0,element)
          }

          return arg

        } throw new TypeError('The intex of the element to be moved must be an integer.')
      } throw new TypeError('The order of the element to be moved must be an integer except zero.')
    } throw new TypeError('Element must exist in the array/string.')
  } throw new TypeError('Argument must be an array or string.')
}

module.exports = moveIt
