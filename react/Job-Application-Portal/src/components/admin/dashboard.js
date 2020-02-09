import React from 'react'
import { Link } from 'react-router-dom'

class ShowDashboard extends React.Component{
    render(){
        return(
            <div>
                <h3>Admin Dashboard</h3>
                
                <Link to = "/admin/front-end-developers">Front-End Developers | </Link>
                <Link to = "/admin/node-js-developers">Node JS Developers | </Link>
                <Link to = "/admin/mean-stack-developers">MEAN stack Developers | </Link>
                <Link to = "/admin/full-stack-developers">FULL stack Developers | </Link>
            </div>
        )
    }
}

export default ShowDashboard