import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { findUserById } from '../../selectors/user'
import { findPostsByUserId } from '../../selectors/Post'
import { startGetPosts } from '../../action/post'

class ShowUserPage extends React.Component{
    render(){
        if(this.props.userPosts.length == 0){
            const id = this.props.match.params.id
            this.props.dispatch(startGetPosts(id))
        }
        return(
            <div className="row">
                <div className="col-md-7 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>USER NAME : {this.props.user.name}</h3>
                            <h4>POSTS WRITTEN BY USER</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                this.props.userPosts.map((post) => {
                                    return <li key = {post.id} className="list-group-item"><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: findUserById(state.users, id),
        userPosts: findPostsByUserId(state.posts, id)
    }
}

export default connect(mapStateToProps)(ShowUserPage)