import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { findUserById } from '../../selectors/user'
import { startGetPostsForUser, resetUserPosts } from '../../action/user'

class ShowUserPage extends React.Component{
    componentWillUnmount(){
        console.log('component unmounted')
        this.props.dispatch(resetUserPosts())
    }

    render(){
        if(this.props.userPosts.length == 0){
            const id = this.props.match.params.id
            this.props.dispatch(startGetPostsForUser(id))
        }
        return(
            <div>
                <h2>USER NAME : {this.props.user.name}</h2>
                <h2>POSTS WRITTEN BY USER</h2>
                <ul>
                    {
                        this.props.userPosts.map((post) => {
                            return <li key = {post.id}><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: findUserById(state.users, id),
        userPosts: state.userPosts
    }
}

export default connect(mapStateToProps)(ShowUserPage)