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
        this.skills.forEach(skill => { //es6 arrow function - inside a arrow function the value of this keyword is the value of the this keyword outside the arrow function(outer scope)
            console.log(`${this.name} knows ${skill}`)
        })
    }
}

console.log(developer.details())
developer.showSkills() //inside use the forEach loop