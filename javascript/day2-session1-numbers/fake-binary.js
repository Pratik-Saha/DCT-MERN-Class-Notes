// if the number is less than 5 represent with 0 else 1
const value = '234781' // '000110'

function fakeBinary(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
        if(value[i] < 5){
            result = result + 0;
        }else{
            result = result + 1;
        }
    }
    return result;
}

console.log(fakeBinary(value));