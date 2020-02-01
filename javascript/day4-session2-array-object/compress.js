const str = 'dddcctt'

function compress(str) {
    let string = ''
    const result = {}
    for (const char of str) {
        if (result[char]) {
            result[char] += 1
        } else {
            result[char] = 1
        }
    }
    for (const key in result) {
        string = string + key + result[key]
    }
    return string
}

console.log(compress(str)) //d3c2t2

function decompress(st) {
    let str = ''
    const result = {}
    for (let i = 0; i < st.length; i = i + 2) {
        result[st[i]] = st[i + 1]
    }
    for (const key in result) {
        for (let i = 0; i < result[key]; i++) {
            str = str + key
        }
    }
    return str

}
console.log(decompress('d3c2t2')) //'dddcctt'