import React from 'react'
import axios from '../../config/axios'

class ShowAllFullStackDevelopers extends React.Component{
    constructor(){
        super()
        this.state = {
            fullStackDevelopers: []
        }
    }

    componentDidMount(){
        axios.get('/users/application-forms')
            .then((response) => {
                const allDevelopers = response.data
                const fullStackDevelopers = allDevelopers.filter((developer) => {
                    return developer.jobTitle == "FULL Stack Developer"
                })
                this.setState({fullStackDevelopers})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleShortList = (id) => {
        const formData = {
            status: "shortlisted"
        }
        axios.put(`/users/application-form/update/${id}`, formData)
            .then((response) => {
                const fullStackDevelopers = this.state.fullStackDevelopers
                const developer = fullStackDevelopers.find((developer) => {
                    return developer._id == id
                })
                developer.status = "shortlisted"
                this.setState({fullStackDevelopers})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleReject = (id) => {
        const formData = {
            status: "rejected"
        }
        axios.put(`/users/application-form/update/${id}`, formData)
            .then((response) => {
                const fullStackDevelopers = this.state.fullStackDevelopers
                const developer = fullStackDevelopers.find((developer) => {
                    return developer._id == id
                })
                developer.status = "rejected"
                this.setState({fullStackDevelopers})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return(
            <div>
                <h3>FULL Stack developers</h3>
                <h5>List of candidates applied for Full Stack Developer post</h5>
                <table border = "5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Technical Skills</th>
                                <th>Experience</th>
                                <th>Applied date</th>
                                <th>View Details</th>
                                <th>Update Application status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.fullStackDevelopers.map((developer) => {
                                    return (
                                        <tr key = {developer._id}>
                                            <td>{developer.name}</td>
                                            <td>{developer.skills}</td>
                                            <td>{developer.experience}</td>
                                            <td>{new Date(developer.createdAt).toLocaleDateString()}</td>
                                            <td><button>view Details</button></td>
                                            <td>
                                                { developer.status == "applied" ? (
                                                        <div>
                                                            <button onClick = {() => {{this.handleShortList(developer._id)}}}>Shortlist</button>
                                                            <button onClick = {() => {{this.handleReject(developer._id)}}}>Reject</button>
                                                        </div>
                                                    )  : developer.status == "shortlisted" ? (
                                                        <button>Shortlisted</button>
                                                    ) : (
                                                        <button>Rejected</button>   
                                                    )

                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default ShowAllFullStackDevelopers