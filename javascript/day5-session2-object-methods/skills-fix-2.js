const developer = {
    name: 'mohan',
    designation: 'sr software developer',
    skills: ['js','rb','py'],
    details: function(){
        return `${this.name} - ${this.designation}`
    },
    showSkills: function(){
        //inside a method this refers to the current object
        //const _this = this
        this.skills.forEach(function(skill){
            //inside a function this refers to the global object
            console.log(`${this.name} knows ${skill}`)
        }.bind(this)) //the argument passed to the bind method (object) will be now become the value of the this keyword inside the function
    }
}

console.log(developer.details())
//'mohan - sr software developer'
developer.showSkills() //inside use the forEach loop