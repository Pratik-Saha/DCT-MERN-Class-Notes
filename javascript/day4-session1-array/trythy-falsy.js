// falsy  - false,undefined,0,'',NaN,null
//truthy - true, 1,-1,'dct',[],{},['dct','academy'],{name:'dct'}
const values = [false, undefined, 0, '', NaN, null, true, 1, -1, 'dct', [], {}, ['dct', 'academy'], 
{ name: 'dct' }]

for (let i = 0; i < values.length; i++) {
    //in a if condition if u just specify the value without any relational operator it will check for whether
    //the value is truthy or falsy
    if (values[i]) {
        console.log('truthy', values[i])
    } else {
        console.log('falsy', values[i])
    }
}