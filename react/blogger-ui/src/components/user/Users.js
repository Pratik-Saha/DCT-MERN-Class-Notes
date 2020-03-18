import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startGetUsers } from '../../action/user'

function Users(props){

    if(props.users.length == 0){
        props.dispatch(startGetUsers())
    }
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2>Users List - {props.users.length}</h2>
                <ul className="list-group">
                    {
                        props.users.map((user) => {
                            return (
                                <li key = {user.id} className="list-group-item"><Link to = {`/users/${user.id}`}>{user.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(Users)