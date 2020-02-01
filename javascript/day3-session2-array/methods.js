const fruits = [] //const fruits = new Array()

// add element/s to an array
    //end
    console.log(fruits.push('mango')) //push returns the length of the new array
    console.log(fruits)
    console.log(fruits.push('apple','guave')) //push or unshift can take multiple parameter also
    console.log(fruits)
    
    //beginning
    console.log(fruits.unshift('kiwi')) //unshift returns the length of the new array
    console.log(fruits)

    //insert at a certain index
    //javascript does not have any in built method for inserting element at a certain index
    //but we can acheive it using splice() method
    //spice(starting index,number of elements to delete from starting index ,inserting element)
    console.log(fruits.splice(1, 0 , 'sapota')) //returns the array of deleted elements //[]
    console.log(fruits)

//remove element from an array
    const players = ['sachin','virat','saurav','shewag','shikar','dhoni']
    console.log(players)
    //end
    console.log(players.pop()) // pop() delete a  element from the end of the array and return the deleted element //'dhoni'
    console.log(players)

    //beginning
    console.log(players.shift()) //shift() delete a  element from the beginning of the array and return the deleted element //'sachin'

    //at a certain index
    console.log(players.splice(1,2)) //['saurav','shewag']
    console.log(players)

//update element
    const cities = ['bangalore','tumkur','mandya']
    console.log(cities)
    cities[1] = 'mysore'
    console.log(cities)
    // array is mutable - we can update an element in an array 
    // but string is immutable - we can not update an character in a string itself

//read
    const technologies = ['javascript','react','node']
    //for loop
    for(let i = 0; i < technologies.length; i++){
        console.log(technologies[i])
    }
    //forEach
    technologies.forEach(function(tech){
        console.log(tech)
    })
    //for of
    for(const tech of technologies){
        console.log(tech)
    }