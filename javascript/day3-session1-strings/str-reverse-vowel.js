function reverseVowel(str){
    let count = 0
    const vowels = 'aeiouAEIOU'
    let arr = str.split('');
    let vowelArr = []
    for(let i=0;i<arr.length;i++){
        if(vowels.includes(arr[i])){
            vowelArr.push(arr[i]);   
        }
    }
    vowelArr = vowelArr.reverse();
    for(let i = 0;i<arr.length;i++){
        if(vowels.includes(arr[i])){
            arr[i] = vowelArr[count];
            count++;
        }

    }
    return arr.join('');
}

console.log(reverseVowel('bangalore'))