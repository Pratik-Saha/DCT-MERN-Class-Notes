/*write a function called totalCaps which accepts an array of strings and returns the total number of capitals
 in each of the strings. Do not convert the array into a string
    Example:
     totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HerE'])) == 8
*/

function totalCaps(arr) {
    let count = 0;
    /* using for loop*/
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i].charAt(j) == arr[i].charAt(j).toUpperCase()) {
                count++
            }
        }
    }

    /* using for of */
    /*for(const words of arr){
        for(const char of words){
            if(char == char.toUpperCase()){
                count++
            }
        }
    }*/
    return count;
}

console.log(totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HerE'])) //8