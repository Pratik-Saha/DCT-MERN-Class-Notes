const values = [false, 0, undefined, NaN, '', 'dct', [10]]

function filterValues(values) {

    const result = values.filter(function (ele) {
        return ele
    })
    return result
}

console.log(filterValues(values)) //['dct',[10]]