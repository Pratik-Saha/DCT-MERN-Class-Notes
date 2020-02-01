const developer = {
    name: 'mohan',
    designation: 'sr software developer',
    skills: ['js','rb','py'],
    details: function(){
        return `${this.name} - ${this.designation}`
    },
    showSkills: function(){
        //inside a method this refers to the current object
        const _this = this
        this.skills.forEach(function(skill){
            //inside a function this refers to the global object
            console.log(`${_this.name} knows ${skill}`) //lexical scope of js
        })
    }
}

console.log(developer.details())
developer.showSkills() //inside use the forEach loop

//lexical scope of js - we can define a variable outside a function and can use it inside a function
//due to lexical scope of js.we dont need to pass the variable as a parameter to the function