import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { findUserById } from '../../selectors/user'
import { findPostByPostId } from '../../selectors/Post'
import { startGetPostComments, resetComments } from '../../action/comment'

class ShowUserPost extends React.Component{
    
    componentWillUnmount(){
        console.log('component unmounted')
        this.props.dispatch(resetComments())
    }

    render(){
        if(this.props.comments.length == 0){
            const postId = this.props.match.params.id
            this.props.dispatch(startGetPostComments(postId))
        }
        return(
            <div className="card">
                <div className="card-header">
                    <h3>USER NAME : {this.props.user.name} </h3>
                    <h4>TITLE : {this.props.post.title} </h4>
                </div>
                <div className="card-body">
                    <h3>BODY : <br />{this.props.post.body}</h3>
                </div>
                <div className="card-footer">
                    <h4>COMMENTS: </h4>
                    <ul>
                        {
                            this.props.comments.map((comment) => {
                                return <li key = {comment.id}>{comment.body}</li>
                            })
                        }
                    </ul>
                </div>

                <Link to = {`/users/${this.props.user.id}`}>More Posts From Author: {this.props.user.name}</Link>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const postId = props.match.params.id
    const post = findPostByPostId(state.posts, postId)
    const userId = post.userId
    return{
        user: findUserById(state.users, userId),
        post,
        comments: state.postComments
    }
    
}

export default connect(mapStateToProps)(ShowUserPost)