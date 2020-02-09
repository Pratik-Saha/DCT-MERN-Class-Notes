import React from 'react'
import axios from '../../config/axios'

class UserForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            jobTitle: '',
            experience: '',
            skills: '',
            message: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            jobTitle: this.state.jobTitle,
            experience: this.state.experience,
            skills: this.state.skills
        }
        axios.post('/users/application-form', formData)
            .then((response) => {
                console.log(response)
                this.setState({
                    message: `You have succesfully applied for ${this.state.jobTitle} post`
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render(){
        return(
            <div>
                <h3>Apply For Job</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Full Name</label>{"       "}
                    <input type = "text" id="name" value={this.state.name} name="name" onChange={this.handleChange} size="50"/><br />

                    <label htmlFor="email">Email address</label>{"       "}
                    <input type = "email" id="email" value={this.state.email} name="email" onChange={this.handleChange} size="50"/><br />
                    
                    <label htmlFor="number">Contact Number</label>{"       "}
                    <input type = "tel" id="number" value={this.state.phone} name="phone" onChange={this.handleChange} maxLength="10" placeholder="9831705363" /><br />

                    <label htmlFor="job">Applying for Job</label>
                    <select id="job" value={this.state.jobTitle} name="jobTitle" onChange={this.handleChange}>
                        <option value=''>-----Select-----</option>
                        <option value='Front-End Developer'>Front End Developer</option>
                        <option value='Node.js Developer'>Node.js Developer</option>
                        <option value='MEAN Stack Developer'>MEAN Stack Developer</option>
                        <option value='FULL Stack Developer'>FULL Stack Developer</option>
                    </select><br />

                    <label htmlFor="experience">Experience</label>{"       "}
                    <input type = "text" id="experience" value={this.state.experience} name="experience" onChange={this.handleChange} placeholder="Experience (2 years, 3 months)" size="50"/><br />
                
                    <label htmlFor="skills">Technical Skills</label>{"       "}
                    <textarea id="skills" rows="5" cols="40" value={this.state.skills} name="skills" onChange={this.handleChange} >

                    </textarea><br />

                    <input type="submit" />

                    {
                        this.state.message && <p>{ this.state.message }</p>
                    }
                </form>
            </div>
        )
    }
}

export default UserForm