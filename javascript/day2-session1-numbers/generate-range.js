function generate(n1, n2) {
    let arr = [];
    for (let i = n1; i <= n2; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(generate(5, 9))