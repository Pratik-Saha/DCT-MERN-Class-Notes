/*You are given two strings S1 and S2. You need to find weights of both strings and compare them.The weight of
 a string can be obtained by adding individual weights of the characters that make the string. The weight of
  individual characters are the position on which they occur in the English alphabet table.
    For eg.
        a has weight 1, b has weight 2
    Output: 
        print 1 if the weight of first string is greater
        print 2 if the weight of second string is greater
        print 'equal' if the weight of the strings are equal
    Example:
        Input 1: 
        batman, superman
        output: 2
        
        Input 2: 
        manbat, batman
        output: equal

 */

function strWeight(str1, str2) {
    const sum1 = weight(str1);
    const sum2 = weight(str2);
    if (sum1 > sum2) {
        return 1;
    }
    else if (sum2 > sum1) {
        return 2;
    }
    else {
        return 'equal'
    }
}

function weight(str) {
    let sum = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < str.length; i++) {
        sum = sum + alphabet.indexOf(str[i]) + 1;
    }
    return sum;
}

console.log(strWeight('batman', 'superman'));