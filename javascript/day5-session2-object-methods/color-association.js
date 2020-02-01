/**/ 

const arr = [["white","goodness"],["blue","tranquility"]]

function associate(arr){
    const result = {}
    arr.forEach(function(item){
        result[item[0]] = item[1]
    })
    return result
}

console.log(associate(arr)) // { white: 'goodness', blue: 'tranquility' }