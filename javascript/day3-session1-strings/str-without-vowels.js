function withOutVowels(str) {
    let result = '';
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result = result + str[i];
        }
    }
    return result;
}

console.log(withOutVowels('bangalore')) //'bnglr'