function hashTag(str) {
    let result = '#'
    const words = str.split(' ')
    /*for (let i = 0; i < words.length; i++) {
        result = result + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }*/

    /*words.forEach(function(item){
        result = result + item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    })*/

    for(const word of words){
        result = result + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
    return result;
}

console.log(hashTag('javascript is awesome')) //#JavascriptIsAwesome
console.log(hashTag('make in india')) //#MakeInIndia