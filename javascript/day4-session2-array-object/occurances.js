const str = 'dddcctt'
const alphabet = []
function occurances(str){
    const result = {}
    /*for(let i=0;i<str.length;i++){
        if(result[str[i]]){
            //add
            result[str[i]] += 1
        }else{
            result[str[i]] = 1
        }
    }*/
    for(const char of str){
        if(result[char]){
            result[char] += 1
        }else{
            result[char] = 1
        }
    }
    return result
}

console.log(occurances(str)) //{d: 3,c: 2,t: 2}
//console.log(occurances())