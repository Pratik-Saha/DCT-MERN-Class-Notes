//var - function scoped - and hoisted on top of the function not outside the function
function returnUser(){
    console.log(name) //undefined
    if(true){
        var name = 'arjun'
    }
    return name;
}

console.log(returnUser())

//let - block scoped

function returnUser(){
    if(true){
        let name = 'arjun'
    }
    return name;
}

//console.log(returnUser())

//to make the above let example work

function returnUser(){
    let name; //declare outside a block
    if(true){
        name = 'arjun'  //initialize inside a block
    }
    return name; //access outside a block
}

//console.log(returnUser())